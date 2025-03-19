import { Breadcrumb, Button, Input, message, Radio, Segmented, Select, Slider, Switch, Upload } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

gsap.registerPlugin(Draggable);

const CreateTemplate = () => {
  const navigate = useNavigate();
  const canvasRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const [fonts, setFonts] = useState([]);
  const [texts, setTexts] = useState({
    title: 'Title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem deserunt incidunt placeat inventore, porro cum            mollitia quas, tempore accusamus esse voluptatum suscipit ea animi laborum harum quia! Doloribus, ipsum.',
    author: ' Subtitle-1-1'
  });
  const [templates, setTemplates] = useState([]);
  const items = [
    {
      title: <Link to="/settings/templates">Templates</Link>
    },
    { title: 'New' }
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
    logo_image: '',
    intro: false,
    outro: false,
    font: {
      bookName: '',
      font_style: '',
      title_size: 70,
      title_width: 180,
      title_color: '#FFFFFF',
      title_style: 'normal',
      title_align: 'center',
      title_font: 'Sans Serif',
      content_size: 50,
      content_color: '#FFFFFF',
      content_style: 'normal',
      content_width: 900,
      content_height: 700,
      content_font: 'Sans Serif',
      line_height: 70,
      content_align: 'left',
      credit_size: 50,
      credit_width: 300,
      credit_color: '#FFFFFF',
      credit_style: 'normal',
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

  const handleImage = async (event) => {
    const file = event.file;
    setData((data) => ({ ...data, logo_image: file }));
  };

  const textTimeline = [
    { time: 0, text: 'Welcome to My Video', duration: 3 },
    { time: 3, text: 'Canvas & Video Integration', duration: 3 },
    { time: 6, text: 'Smooth Text Transitions', duration: 3 }
  ];

  const handleVideo = (files) => {
    const file = files.file;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const video = document.createElement('video');

    video.src = URL.createObjectURL(file);
    video.muted = true;
    video.loop = true;

    video.onloadedmetadata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const totalDuration = 6;
      video.play();

      let startTime = Date.now(); // Track start time
      let currentText = '';
      let opacity = 0;
      let fadeDirection = 1;
      let i = 0;

      const drawFrame = () => {
        const elapsedTime = (Date.now() - startTime) / 1000; // Convert to seconds

        if (elapsedTime >= totalDuration) {
          console.log('Processing complete. Stopping...');
          return; // Stop rendering after total duration is reached
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        console.log(i);
        i += 1;
        console.log('elapsed', elapsedTime);

        let newText = '';

        // Find the text to display at the current time
        for (let entry of textTimeline) {
          if (elapsedTime >= entry.time && elapsedTime < entry.time + entry.duration) {
            newText = entry.text;
            break;
          }
        }

        // Handle text transitions (fade in/out)
        if (newText !== currentText) {
          fadeDirection = -1; // Start fade-out if text is changing
        } else if (opacity < 1 && fadeDirection === 1) {
          opacity += 0.02; // Smooth fade-in
        }
        if (opacity <= 0) {
          currentText = newText;
          fadeDirection = 1; // Start fade-in
        }

        if (currentText) {
          ctx.globalAlpha = opacity;
          ctx.font = 'bold 40px Arial';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.fillText(currentText, canvas.width / 2, canvas.height - 100);
          ctx.globalAlpha = 1; // Reset alpha
        }

        opacity = Math.max(0, Math.min(1, opacity + fadeDirection * 0.02)); // Apply fade

        requestAnimationFrame(drawFrame);
      };

      drawFrame();
    };
  };

  const handleVideo2 = (event) => {
    const file = event.file; // Get the video file
    // setData((data) => ({ ...data, bg: file }));

    const ctx = canvasRef.current.getContext('2d');
    const video = document.createElement('video');

    video.src = URL.createObjectURL(file);
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.loop = true;
    video.play();

    video.onloadeddata = () => {
      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;

      const drawFrame = () => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(video, 0, 0, canvasRef.current.width, canvasRef.current.height);

        if (data.hasTitle) {
          drawTitle(ctx);
        }

        requestAnimationFrame(drawFrame);
      };

      drawFrame();
    };
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
    fetchTemplates();
    fetchFonts();
  }, []);

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

  const bgprops = {
    listType: 'picture',
    beforeUpload: () => false,
    maxCount: 1,
    accept: '.png,.jpg,.jpeg',
    onChange: handleBg
  };

  const imageprops = {
    listType: 'picture',
    beforeUpload: () => false,
    maxCount: 1,
    accept: '.png,.jpg,.jpeg',
    onChange: handleImage
  };

  const videoBgprops = {
    listType: 'picture',
    beforeUpload: () => false,
    maxCount: 1,
    accept: '.mp4,.HEIC,.mov,.gif',
    onChange: handleVideo
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
        formData.append('logo_image', data.logo_image);
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
    <div className="w-full">
      <Breadcrumb items={items} />
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
          {data.font.title_font && data.hasTitle !== 0 && (
            <p
              className="title-font"
              ref={titleRef}
              style={{
                position: 'absolute',
                cursor: 'move',
                fontSize: data.font.title_size / 3 + 'px',
                width: data.font.title_width / 3 + 'px',
                border: '1px solid black',
                overflow: 'hidden',
                fontStyle: data.font.title_style === 'italic' || data.font.title_style === 'bolditalic' ? 'italic' : 'normal',
                fontWeight: data.font.title_style === 'bold' || data.font.title_style === 'bolditalic' ? 'bold' : 'normal',
                color: data.font.title_color,
                textAlign: data.font.title_align,
                top: 10
              }}
            >
              {texts.title}
            </p>
          )}
          <p
            ref={contentRef}
            className="content-font"
            style={{
              position: 'absolute',
              cursor: 'move',
              fontSize: data.font.content_size / 3 + 'px',
              width: data.font.content_width / 3 + 'px',
              height: data.font.content_height / 3 + 'px',
              overflow: 'hidden',
              border: '1px solid black',
              flexWrap: 'wrap',
              lineHeight: `${data.font.line_height / 3}px`,
              fontStyle: data.font.content_style === 'italic' || data.font.content_style === 'bolditalic' ? 'italic' : 'normal',
              fontWeight: data.font.content_style === 'bold' || data.font.content_style === 'bolditalic' ? 'bold' : 'normal',
              textAlign: data.font.content_align,
              color: data.font.content_color,
              top: '50px'
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
                overflow: 'hidden',
                border: '1px solid black',
                fontStyle: data.font.credit_style === 'italic' || data.font.credit_style === 'bolditalic' ? 'italic' : 'normal',
                fontWeight: data.font.credit_style === 'bold' || data.font.credit_style === 'bolditalic' ? 'bold' : 'normal',
                textAlign: data.font.credit_align,
                color: data.font.credit_color,
                bottom: 10,
                right: 30
              }}
            >
              {texts.author}
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
          <div className="grid grid-cols-2">
            <div>
              <p className="text-md font-bold">Intro:</p>
              <Switch className="w-fit" onChange={(val) => setData((prev) => ({ ...prev, intro: val }))} />
            </div>
            <div>
              <p className="text-md font-bold">Outro:</p>
              <Switch className="w-fit" onChange={(val) => setData((prev) => ({ ...prev, outro: val }))} />
            </div>
          </div>
          <div className="w-full border-b border-gray-400"></div>
          {(data.intro || data.outro) && (
            <>
              <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
                <p className="text-md font-bold">Book Name</p>
                <Input
                  value={data.font.bookName || ''}
                  onChange={(e) => setData({ ...data, font: { ...data.font, bookName: e.target.value } })}
                />
              </div>
              <div className="w-full border-b border-gray-400"></div>
            </>
          )}
          <p className="text-md font-bold">Background Image:</p>
          <Upload {...bgprops}>
            <Button type="primary">Upload Image</Button>
          </Upload>
          {(data.intro || data.outro) && (
            <>
              <p className="text-md font-bold">Logo Image:</p>
              <Upload {...imageprops}>
                <Button type="primary">Upload Logo Image</Button>
              </Upload>
            </>
          )}

          {/* <div className="w-full border-b border-gray-400"></div>
          <p className="text-md font-bold">Background Video:</p>
          <Upload {...videoBgprops}>
            <Button type="primary">Upload Video</Button>
          </Upload> */}
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
                    defaultValue={data.font.title_align}
                    options={['left', 'center', 'right']}
                    onChange={(value) => setData({ ...data, font: { ...data.font, title_align: value } })}
                  />
                </div>
                <div>
                  <p>Preview Text</p>
                  <textarea
                    className="w-full border"
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
                style={{ width: 'fit-content' }}
                defaultValue={data.font.content_align}
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
          <div className="selection-container flex flex-col gap-3 bg-white">
            <div>
              <p className="text-md font-bold">Sub Title:</p>
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
                </div>
                <div>
                  <p>Alignment</p>
                  <Segmented
                    style={{ width: 'fit-content' }}
                    defaultValue={data.font.credit_align}
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
            onClick={handleCreateTemplate}
            className="w-[10rem] transform translate-x-1/2 mb-2"
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
