import { Breadcrumb, Button, Input, message, Radio, Segmented, Select, Slider, Upload } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import { Link, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(Draggable);

const EditTemplate = () => {
  const navigate = useNavigate();
  const canvasRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const [urlParams] = useSearchParams();
  const [texts, setTexts] = useState({
    title: 'Title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem deserunt incidunt placeat inventore, porro cum            mollitia quas, tempore accusamus esse voluptatum suscipit ea animi laborum harum quia! Doloribus, ipsum.',
    author: ' Author'
  });
  const [fonts, setFonts] = useState([]);
  const [templates, setTemplates] = useState([]);
  const items = [
    {
      title: <Link to="/settings/templates">Templates</Link>
    },
    { title: 'Edit' }
  ];

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
      title_font: 'Sans Serif',
      content_size: 50,
      content_color: '#FFFFFF',
      content_style: '',
      content_width: 900,
      content_height: 700,
      content_font: 'Sans Serif',
      line_height: 70,
      content_align: 'left',
      credit_size: 50,
      credit_width: 300,
      credit_color: '#FFFFFF',
      credit_style: '',
      credit_align: 'center',
      credit_font: 'Sans Serif'
    },
    position: {
      title: {
        x: 100,
        y: 10
      },
      content: {
        x: 20,
        y: 10
      },
      credit: {
        x: 250,
        y: 300
      }
    }
  });
  const [image, setImage] = useState(null);

  const [position, setPosition] = useState({
    title: {
      x: 0,
      y: 0
    },
    content: {
      x: 0,
      y: 0
    },
    credit: {
      x: 0,
      y: 0
    }
  });

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        @font-face {
          font-family: '${data.font.title_font}';
          src: url('${SERVER_ADDRESS}/font/${data.font.title_font}.ttf') format('truetype');
        }
        .title-font{
          font-family: '${data.font.title_font}', sans-serif;
        }
      `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [data.font.title_font]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        @font-face {
          font-family: '${data.font.content_font}';
          src: url('${SERVER_ADDRESS}/font/${data.font.content_font}.ttf') format('truetype');
        }
        .content-font{
          font-family: '${data.font.content_font}', sans-serif;
        }
      `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [data.font.content_font]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        @font-face {
          font-family: '${data.font.credit_font}';
          src: url('${SERVER_ADDRESS}/font/${data.font.credit_font}.ttf') format('truetype');
        }
        .credit-font{
          font-family: '${data.font.credit_font}', sans-serif;
        }
      `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [data.font.credit_font]);

  const handleBg = async (event) => {
    const file = event.file;
    setImage(file);
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

  const fetchFonts = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/fonts`);
      if (response.status === 200) {
        setFonts(response.data.data);
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to fetch fonts', duration: 2 });
    }
  };

  useEffect(() => {
    if (titleRef.current && data.position?.title) {
      const left = data.position.title.x;
      const top = data.position.title.y;

      titleRef.current.style.left = `${left}px`;
      titleRef.current.style.top = `${top}px`;
    }
    if (contentRef.current && data.position?.content) {
      const left = data.position.content.x;
      const top = data.position.content.y;

      console.log(1);

      contentRef.current.style.left = `${left}px`;
      contentRef.current.style.top = `${top}px`;
    }
    if (authorRef.current && data.position?.credit) {
      const left = data.position.credit.x;
      const top = data.position.credit.y;

      authorRef.current.style.left = `${left}px`;
      authorRef.current.style.top = `${top}px`;
    }
  }, [data, titleRef.current, contentRef.current, authorRef.current]);

  useEffect(() => {
    fetchTemplates();
    fetchFonts();
  }, []);

  useEffect(() => {
    const id = urlParams.get('id');
    if (templates.length > 0) {
      const [current] = templates.filter((data) => data.id === parseInt(id));
      console.log(current);
      var ctx = canvasRef.current.getContext('2d');
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
      };
      img.src = `${SERVER_ADDRESS}/public/backgroundImages/${current.background_image}`;
      console.log(`${SERVER_ADDRESS}/public/backgroundImages/${current.background_image}`);
      const newData = {
        ...current,
        position: {
          title: {
            x: current.position ? current.position.title.x : 0,
            y: current.position ? current.position.title.y : 0
          },
          content: {
            x: current.position ? current.position.content.x : 0,
            y: current.position ? current.position.content.y : 0
          },
          credit: {
            x: current.position ? current.position.credit?.x : 0,
            y: current.position ? current.position.credit?.y : 0
          }
        }
      };
      if (current.hasTitle && titleRef.current) {
        titleRef.current.style.left = current.position.title.x;
        titleRef.current.style.top = current.position.title.y;
      }
      if (contentRef.current) {
        contentRef.current.style.left = current.position ? current.position.content.x : 0;
        contentRef.current.style.top = current.position ? current.position.content.y : 0;
      }
      if (current.hasAuthor && authorRef.current) {
        authorRef.current.style.left = current.position.credit.x;
        authorRef.current.style.top = current.position.credit.y;
      }
      setData(newData);
    }
  }, [templates]);

  useEffect(() => {
    if (data.hasTitle) {
      Draggable.create(titleRef.current, {
        type: 'x,y',
        bounds: canvasRef.current,
        onDrag: function () {
          const top = this.y;
          const left = this.x;
          const position = {
            x: parseInt(left),
            y: parseInt(top)
          };

          console.log(position);
          setPosition((prevData) => ({
            ...prevData,
            title: position
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
        const top = this.y;
        const left = this.x;
        const position = {
          x: parseInt(left),
          y: parseInt(top)
        };

        setPosition((prevData) => ({
          ...prevData,
          content: position
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
          const top = this.y;
          const left = this.x;
          const position = {
            x: parseInt(left),
            y: parseInt(top)
          };

          setPosition((prevData) => ({
            ...prevData,
            credit: position
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

  const handleEditTemplate = async () => {
    console.log(data.position.title.x, position.title.x);
    const updatedPosition = {
      title: {
        x: data.position.title.x + position.title.x,
        y: data.position.title.y + position.title.y
      },
      content: {
        x: data.position.content.x + position.content.x,
        y: data.position.content.y + position.content.y
      },
      credit: {
        x: data.position.credit.x + position.credit.x,
        y: data.position.credit.y + position.credit.y
      }
    };
    data.position = updatedPosition;
    try {
      const formData = new FormData();
      if (!data.name) {
        message.error({ content: 'Please enter the name' });
        return;
      }

      formData.append('data', JSON.stringify(data));
      if (image) formData.append('backgroundImage', image);
      const response = await axios.put(`${SERVER_ADDRESS}/templates/edit`, formData);
      if (response.status === 200) {
        message.success({ content: 'Template modified Successfully' });
        navigate('/settings/templates');
      } else {
        message.error({ content: response.message });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Internal Server Error' });
    }
  };

  return (
    <div className="w-full">
      <Breadcrumb items={items} />
      <div
        className="grid gap-2 h-fit"
        style={{
          gridTemplateColumns: 'minmax(640px, 60%) minmax(340px, 40%)'
        }}
      >
        <div className="flex justify-center">
          <div className="relative justify-center h-fit w-fit overflow-hidden">
            <canvas
              ref={canvasRef}
              className="bg-gray-200 w-[360px] h-[360px] relative"
              style={{
                width: data.size.width / 3 + 'px',
                height: data.size.height / 3 + 'px'
              }}
            />
            {data.hasTitle !== 0 && (
              <p
                className="title-font"
                ref={titleRef}
                style={{
                  position: 'absolute',
                  cursor: 'move',
                  overflow: 'hidden',
                  fontSize: data.font.title_size / 3 + 'px',
                  width: data.font.title_width / 3 + 'px',
                  border: '1px solid black',
                  color: data.font.title_color,
                  textAlign: data.font.title_align
                  // left: 105,
                  // top: 10
                }}
              >
                {texts.title}
              </p>
            )}
            <p
              className="content-font"
              ref={contentRef}
              style={{
                position: 'absolute',
                cursor: 'move',
                fontSize: data.font.content_size / 3 + 'px',
                width: data.font.content_width / 3 + 'px',
                height: data.font.content_height / 3 + 'px',
                lineHeight: data.font.line_height / 3 + 'px',
                border: '1px solid black',
                flexWrap: 'wrap',
                overflow: 'hidden',
                textAlign: data.font.content_align,
                color: data.font.content_color
              }}
            >
              {texts.content}
            </p>
            {data.hasAuthor !== 0 && (
              <p
                className="credit-font"
                ref={authorRef}
                style={{
                  position: 'absolute',
                  cursor: 'move',
                  fontSize: data.font.credit_size / 3 + 'px',
                  width: data.font.credit_width / 3 + 'px',
                  border: '1px solid black',
                  overflow: 'hidden',
                  textAlign: data.font.credit_align,
                  color: data.font.credit_color
                }}
              >
                {texts.author}
              </p>
            )}
          </div>
        </div>
        {/* </canvas> */}
        <div className="flex py-3 container  flex-col gap-4 mb-4 h-[75vh] min-w-fit overflow-y-scroll bg-white  px-4 rounded-md">
          <div className="name-wrapper flex flex-col gap-3 w-[17rem]">
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
                  <img src="../../../src/assets/images/aspect-ratio/post.png" className="w-10 h-10" />
                  Post
                </div>
              </Radio>
              <Radio value="reel" aria-label="reel" className="h-20 flex items-center">
                <div className="flex flex-col items-center">
                  <img src="../../../src/assets/images/aspect-ratio/reel.png" className="w-10 h-auto" />
                  Reel
                </div>
              </Radio>
              <Radio value="video" aria-label="video" className="h-20 flex items-center">
                <div className="mt-6 flex flex-col items-center">
                  <img src="../../../src/assets/images/aspect-ratio/video.png" className="w-auto h-10" />
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
                    value={data.font.title_align}
                    style={{ width: 'fit-content' }}
                    options={['left', 'center', 'right']}
                    onChange={(value) => setData({ ...data, font: { ...data.font, title_align: value } })}
                  />
                </div>
                <div>
                  <p>Preview Text</p>
                  <textarea
                    className="w-full border "
                    value={texts.title}
                    onChange={(e) => setTexts((prev) => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div>
                  <p>Font</p>
                  <Select
                    style={{ width: '10rem' }}
                    value={data.font.title_font}
                    onChange={(val) => {
                      setData({ ...data, font: { ...data.font, title_font: val } });
                    }}
                  >
                    <Select.Option value="Sans Serif">Sans Serif</Select.Option>
                    {fonts.map((font) => (
                      <Select.Option value={font.name}>{font.name}</Select.Option>
                    ))}
                  </Select>
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
              <p>Line Height</p>
              <Slider
                className="w-[18rem]"
                max={400}
                value={data.font.line_height}
                onChange={(value) => setData({ ...data, font: { ...data.font, line_height: value } })}
              />
            </div>
            <div>
              <p>Alignment</p>
              <Segmented
                value={data.font.content_align}
                style={{ width: 'fit-content' }}
                options={['left', 'center', 'right', 'justify']}
                onChange={(value) => setData({ ...data, font: { ...data.font, content_align: value } })}
              />
            </div>
            <div>
              <p>Preview Text</p>
              <textarea
                className="w-full border "
                value={texts.content}
                rows={4}
                onChange={(e) => setTexts((prev) => ({ ...prev, content: e.target.value }))}
              />
            </div>
            <div>
              <p>Font</p>
              <Select
                style={{ width: '10rem' }}
                value={data.font.content_font}
                onChange={(val) => {
                  setData({ ...data, font: { ...data.font, content_font: val } });
                }}
              >
                <Select.Option value="Sans Serif">Sans Serif</Select.Option>
                {fonts.map((font) => (
                  <Select.Option value={font.name}>{font.name}</Select.Option>
                ))}
              </Select>
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
          <div className="selection-container flex flex-col gap-3 ">
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
                    value={data.font.credit_align}
                    style={{ width: 'fit-content' }}
                    options={['left', 'center', 'right']}
                    onChange={(value) => setData({ ...data, font: { ...data.font, credit_align: value } })}
                  />
                </div>
                <div>
                  <p>Preview Text</p>
                  <textarea
                    className="w-full border "
                    value={texts.author}
                    onChange={(e) => setTexts((prev) => ({ ...prev, author: e.target.value }))}
                  />
                </div>
                <div>
                  <p>Font</p>
                  <Select
                    style={{ width: '10rem' }}
                    value={data.font.credit_font}
                    onChange={(val) => {
                      setData({ ...data, font: { ...data.font, credit_font: val } });
                    }}
                  >
                    <Select.Option value="Sans Serif">Sans Serif</Select.Option>
                    {fonts.map((font) => (
                      <Select.Option value={font.name}>{font.name}</Select.Option>
                    ))}
                  </Select>
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
            onClick={handleEditTemplate}
            className="w-[10rem] transform translate-x-1/2 mb-2"
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            Make Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditTemplate;
