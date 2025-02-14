import { Button, Input, message, Radio, Segmented, Select, Slider, Upload } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import { useNavigate } from 'react-router';

gsap.registerPlugin(Draggable);

const CreateTemplate = () => {
  const navigate = useNavigate();
  const canvasRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const [loading, setLoading] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [data, setData] = useState({
    name: '',
    hasTitle: 0,
    hasAuthor: 0,
    size: {
      type: 'post',
      width: 1080,
      height: 1080
    },
    bg: '',
    font: {
      font_style: '',
      title_size: 50,
      title_width: 100,
      title_color: '#FFFFFF',
      title_style: '',
      title_align: 'center',
      content_size: 50,
      content_color: '#FFFFFF',
      content_style: '',
      content_width: 900,
      content_height: 700,
      content_align: 'left',
      credit_size: 50,
      credit_width: 300,
      credit_color: '#FFFFFF',
      credit_style: '',
      credit_align: 'center'
    },
    position: {
      title: {
        x: 100,
        y: 10
      },
      content: {
        x: 20,
        y: 150
      },
      credit: {
        x: 250,
        y: 300
      }
    }
  });

  const handleBg = async (event) => {
    const file = event.file;
    setData((data) => ({ ...data, bg: file }));
    const ctx = canvasRef.current.getContext('2d');
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);

        if (data.hasTitle) {
          drawTitle(ctx);
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const fetchTemplates = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/templates`);
      console.log(response.data);
      if (response.data.length > 0) setTemplates(response.data);
    } catch (err) {
      console.log(err);
      message.error({ content: 'Please refresh the page' });
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (data.hasTitle) {
      Draggable.create(titleRef.current, {
        type: 'x,y',
        bounds: canvasRef.current,
        onDrag: function () {
          const canvasBounds = canvasRef.current.getBoundingClientRect();
          const titleBounds = titleRef.current.getBoundingClientRect();
          const left = titleBounds.left - canvasBounds.left;
          const top = titleBounds.top - canvasBounds.top;

          const position = {
            x: parseInt(left),
            y: parseInt(top)
          };

          setData((prevData) => ({
            ...prevData,
            position: { ...prevData.position, title: position }
          }));
        }
      });
    }
  }, [data.hasTitle, data.bg]);

  useEffect(() => {
    Draggable.create(contentRef.current, {
      type: 'x,y',
      bounds: canvasRef.current,
      onDrag: function () {
        const canvasBounds = canvasRef.current.getBoundingClientRect();
        const contentBounds = contentRef.current.getBoundingClientRect();
        const left = contentBounds.left - canvasBounds.left;
        const top = contentBounds.top - canvasBounds.top;

        const position = {
          x: parseInt(left),
          y: parseInt(top)
        };

        setData((prevData) => ({
          ...prevData,
          position: { ...prevData.position, content: position }
        }));
      }
    });
  }, [data.bg]);

  useEffect(() => {
    if (data.hasAuthor) {
      Draggable.create(authorRef.current, {
        type: 'x,y',
        bounds: canvasRef.current,
        onDrag: function () {
          const canvasBounds = canvasRef.current.getBoundingClientRect();
          const creditBounds = authorRef.current.getBoundingClientRect();
          const left = creditBounds.left - canvasBounds.left;
          const top = creditBounds.top - canvasBounds.top;

          console.log(left);
          const position = {
            x: parseInt(left),
            y: parseInt(top)
          };

          setData((prevData) => ({
            ...prevData,
            position: { ...prevData.position, credit: position }
          }));
        }
      });
    }
  }, [data.hasAuthor, data.bg]);

  const bgprops = {
    listType: 'picture',
    beforeUpload: () => false,
    maxCount: 1,
    accept: '.png,.jpg,.jpeg',
    onChange: handleBg
  };

  const handleRatio = (val) => {
    const size = { type: val };

    if (val === 'post') {
      size.width = 1080;
      size.height = 1080;
    } else if (val === 'reel') {
      size.width = 1080;
      size.height = 1920;
    } else if (val === 'video') {
      size.width = 1920;
      size.height = 1080;
    }

    canvasRef.current.style.width = size.width / 3 + 'px';
    canvasRef.current.style.height = size.height / 3 + 'px';

    setData({ ...data, size: size });
  };

  const handleCreateTemplate = async () => {
    try {
      const formData = new FormData();
      if (!data.name) {
        message.error({ content: 'Please enter the name' });
        return;
      } else if (!data.bg) {
        message.error({ content: 'Please upload the bg image' });
        return;
      }
      const exists = templates.filter((temp) => temp.name.toLowerCase() === data.name.toLowerCase()).length > 0;
      if (!exists) {
        formData.append('data', JSON.stringify(data));
        formData.append('backgroundImage', data.bg);
        const response = await axios.post(`${SERVER_ADDRESS}/templates/create`, formData);
        if (response.status === 200) {
          message.success({ content: 'Template Created Successfully' });
          navigate('/settings/templates');
        } else {
          message.error({ content: response.message });
        }
      } else {
        message.error({ content: 'Template name already exists' });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Internal Server Error' });
    }
  };

  return (
    <div
      className="grid gap-2 h-fit"
      style={{
        gridTemplateColumns: 'minmax(640px, 60%) minmax(340px, 40%)'
      }}
    >
      <div className="relative flex justify-center h-fit overflow-hidden">
        <canvas
          ref={canvasRef}
          className="bg-gray-200 border-2 w-[360px] h-[360px] relative"
          style={{
            width: data.size.width / 3 + 'px',
            height: data.size.height / 3 + 'px'
          }}
        />
        {data.hasTitle !== 0 && (
          <p
            ref={titleRef}
            style={{
              position: 'absolute',
              cursor: 'move',
              fontSize: data.font.title_size / 3 + 'px',
              width: data.font.title_width / 3 + 'px',
              border: '1px solid black',
              textAlign: 'center',
              overflow: 'hidden',
              fontStyle: data.font.title_style === 'italic' || data.font.title_style === 'bolditalic' ? 'italic' : 'normal',
              fontWeight: data.font.title_style === 'bold' || data.font.title_style === 'bolditalic' ? 'bold' : 'normal',
              color: data.font.title_color,
              textAlign: data.font.title_align
            }}
          >
            Title
          </p>
        )}
        <p
          ref={contentRef}
          style={{
            position: 'absolute',
            cursor: 'move',
            fontSize: data.font.content_size / 3 + 'px',
            width: data.font.content_width / 3 + 'px',
            height: data.font.content_height / 3 + 'px',
            overflow: 'hidden',
            border: '1px solid black',
            flexWrap: 'wrap',
            fontStyle: data.font.content_style === 'italic' || data.font.content_style === 'bolditalic' ? 'italic' : 'normal',
            fontWeight: data.font.content_style === 'bold' || data.font.content_style === 'bolditalic' ? 'bold' : 'normal',
            textAlign: data.font.content_align,
            color: data.font.content_color,
            top: '30px'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem deserunt incidunt placeat inventore, porro cum
          mollitia quas, tempore accusamus esse voluptatum suscipit ea animi laborum harum quia! Doloribus, ipsum.
        </p>
        {data.hasAuthor !== 0 && (
          <p
            ref={authorRef}
            style={{
              position: 'absolute',
              cursor: 'move',
              fontSize: data.font.credit_size / 3 + 'px',
              width: data.font.credit_width / 3 + 'px',
              overflow: 'hidden',
              border: '1px solid black',
              fontStyle: data.font.credit_style === 'italic' || data.font.credit_style === 'bolditalic' ? 'italic' : 'normal',
              fontWeight: data.font.credit_style === 'bold' || data.font.credit_style === 'bolditalic' ? 'bold' : 'normal',
              textAlign: data.font.credit_align,
              color: data.font.credit_color
            }}
          >
            Author or credit
          </p>
        )}
      </div>
      {/* </canvas> */}
      <div className="container flex flex-col gap-4 mb-4 h-[75vh] min-w-fit bg-white rounded-md overflow-y-scroll px-4 py-3">
        <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
          <p className="text-md font-bold">Template Name:</p>
          <Input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>
        <div className="w-full border-b border-gray-400"></div>
        <div className="size-container">
          <p className="text-md font-bold">Size:</p>
          <Radio.Group
            aria-label="text alignment"
            className="flex gap-2 items-start"
            value={data.size.type}
            onChange={(e) => handleRatio(e.target.value)}
          >
            <Radio value="post" aria-label="post" className="h-20 flex items-center">
              <div className="flex flex-col items-center mt-4">
                <img src="../../src/assets/images/aspect-ratio/post.png" className="w-10 h-10" />
                Post
              </div>
            </Radio>
            <Radio value="reel" aria-label="reel" className="h-20 flex items-center">
              <div className="flex flex-col items-center">
                <img src="../../src/assets/images/aspect-ratio/reel.png" className="w-10 h-auto" />
                Reel
              </div>
            </Radio>
            <Radio value="video" aria-label="video" className="h-20 flex items-center">
              <div className="mt-6 flex flex-col items-center">
                <img src="../../src/assets/images/aspect-ratio/video.png" className="w-auto h-10" />
                Video
              </div>
            </Radio>
          </Radio.Group>
        </div>
        <div className="w-full border-b border-gray-400"></div>
        <p className="text-md font-bold">Background Image:</p>
        <Upload {...bgprops}>
          <Button type="primary">Upload Image</Button>
        </Upload>
        <div className="w-full border-b border-gray-400"></div>
        <div className="selection-container flex flex-col gap-3">
          <div>
            <p className="text-md font-bold">Title:</p>
            <Radio.Group
              value={data.hasTitle}
              onChange={(e) => setData({ ...data, hasTitle: e.target.value })}
              options={[
                { value: 1, label: 'Yes' },
                { value: 0, label: 'No' }
              ]}
            />
          </div>
          {data.hasTitle !== 0 && (
            <div className="flex flex-col gap-2">
              <div>
                <p>Size</p>
                <Slider
                  className="w-[18rem]"
                  value={data.font.title_size}
                  onChange={(value) => setData({ ...data, font: { ...data.font, title_size: value } })}
                />
              </div>
              <div>
                <p>Width</p>
                <Slider
                  className="w-[18rem]"
                  max={data.size.width}
                  value={data.font.title_width}
                  onChange={(value) => setData({ ...data, font: { ...data.font, title_width: value } })}
                />
              </div>
              <div>
                <p>Alignment</p>
                <Segmented
                  style={{ width: 'fit-content' }}
                  options={['left', 'center', 'right']}
                  onChange={(value) => setData({ ...data, font: { ...data.font, title_align: value } })}
                />
              </div>
              <div>
                <p>Style</p>
                <Select
                  style={{ width: '10rem' }}
                  value={data.font.title_style}
                  onChange={(val) => {
                    setData({ ...data, font: { ...data.font, title_style: val } });
                  }}
                >
                  <Select.Option value="normal">normal</Select.Option>
                  <Select.Option value="bold">Bold</Select.Option>
                  <Select.Option value="bolditalic">Bold + Italic</Select.Option>
                  <Select.Option value="italic">Italic</Select.Option>
                </Select>
              </div>
              <div>
                <p>Color</p>
                <input
                  type="color"
                  value={data.font.title_color}
                  onChange={(e) => {
                    setData({ ...data, font: { ...data.font, title_color: e.target.value } });
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-full border-b border-gray-400"></div>
        <div className="flex flex-col gap-2">
          <p className="text-md font-bold">Content:</p>
          <div>
            <p>Size</p>
            <Slider
              className="w-[18rem]"
              value={data.font.content_size}
              onChange={(value) => setData({ ...data, font: { ...data.font, content_size: value } })}
            />
          </div>
          <div>
            <p>Width</p>
            <Slider
              className="w-[18rem]"
              max={data.size.width}
              value={data.font.content_width}
              onChange={(value) => setData({ ...data, font: { ...data.font, content_width: value } })}
            />
          </div>
          <div>
            <p>Height</p>
            <Slider
              className="w-[18rem]"
              max={data.size.height}
              value={data.font.content_height}
              onChange={(value) => setData({ ...data, font: { ...data.font, content_height: value } })}
            />
          </div>
          <div>
            <p>Alignment</p>
            <Segmented
              style={{ width: 'fit-content' }}
              options={['left', 'center', 'right', 'justify']}
              onChange={(value) => setData({ ...data, font: { ...data.font, content_align: value } })}
            />
          </div>
          <div>
            <p>Style</p>
            <Select
              style={{ width: '10rem' }}
              value={data.font.content_style}
              onChange={(val) => {
                setData({ ...data, font: { ...data.font, content_style: val } });
              }}
            >
              <Select.Option value="normal">normal</Select.Option>
              <Select.Option value="bold">Bold</Select.Option>
              <Select.Option value="bolditalic">Bold + Italic</Select.Option>
              <Select.Option value="italic">Italic</Select.Option>
            </Select>
          </div>
          <div>
            <p>Color</p>
            <input
              type="color"
              value={data.font.content_color}
              onChange={(e) => {
                setData({ ...data, font: { ...data.font, content_color: e.target.value } });
              }}
            />
          </div>
        </div>
        <div className="w-full border-b border-gray-400"></div>
        <div className="selection-container flex flex-col gap-3 bg-white">
          <div>
            <p className="text-md font-bold">Author:</p>
            <Radio.Group
              value={data.hasAuthor}
              onChange={(e) => setData({ ...data, hasAuthor: e.target.value })}
              options={[
                { value: 1, label: 'Yes' },
                { value: 0, label: 'No' }
              ]}
            />
          </div>
          {data.hasAuthor !== 0 && (
            <div className="flex flex-col gap-2">
              <div>
                <p>Size</p>
                <Slider
                  className="w-[18rem]"
                  value={data.font.credit_size}
                  onChange={(value) => setData({ ...data, font: { ...data.font, credit_size: value } })}
                />
              </div>
              <div>
                <p>Width</p>
                <Slider
                  className="w-[18rem]"
                  max={data.size.width}
                  value={data.font.credit_width}
                  onChange={(value) => setData({ ...data, font: { ...data.font, credit_width: value } })}
                />
              </div>{' '}
              <div>
                <p>Alignment</p>
                <Segmented
                  style={{ width: 'fit-content' }}
                  options={['left', 'center', 'right']}
                  onChange={(value) => setData({ ...data, font: { ...data.font, credit_align: value } })}
                />
              </div>
              <div>
                <p>Style</p>
                <Select
                  style={{ width: '10rem' }}
                  value={data.font.credit_style}
                  onChange={(val) => {
                    setData({ ...data, font: { ...data.font, credit_style: val } });
                  }}
                >
                  <Select.Option value="normal">normal</Select.Option>
                  <Select.Option value="bold">Bold</Select.Option>
                  <Select.Option value="bolditalic">Bold + Italic</Select.Option>
                  <Select.Option value="italic">Italic</Select.Option>
                </Select>
              </div>
              <div>
                <p>Color</p>
                <input
                  type="color"
                  value={data.font.credit_color}
                  onChange={(e) => {
                    setData({ ...data, font: { ...data.font, credit_color: e.target.value } });
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <Button
          onClick={handleCreateTemplate}
          className="w-[10rem] transform translate-x-1/2 mb-2"
          style={{ backgroundColor: 'green', color: 'white' }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateTemplate;
