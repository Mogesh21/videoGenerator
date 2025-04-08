import { Breadcrumb, Button, Input, InputNumber, message, Radio, Segmented, Select, Slider, Switch, Upload } from 'antd';
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
  const questionRef = useRef();
  const optionsRef = useRef();
  const [fonts, setFonts] = useState([]);
  const [texts, setTexts] = useState({
    question: 'Question',
    options: 'Options'
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
    bg_image: '',
    bg_video: '',
    intro_video: '',
    outro_video: '',
    audio: '',
    intro: false,
    outro: false,
    size: {
      type: 'reel',
      width: 1080,
      height: 1920
    },
    font: {
      style: '',
      question: {
        size: 48,
        animation: '',
        color: '#000000',
        bg: false,
        bgColor: '#ffffff',
        align: 'center',
        width: 700,
        lineHeight: 50
      },
      options: {
        size: 40,
        animation: 'fade',
        color: '#000000',
        answerColor: '#ff630f',
        bg: false,
        bgColor: '#ffffff',
        align: 'center',
        width: 880,
        lineHeight: 50
      },
      image: {
        width: 400,
        height: 400
      }
    },
    positions: {
      question: {
        x: 400,
        y: 400
      },
      options: {
        x: 100,
        y: 1100
      }
    },
    duration: {
      total: 10,
      intro: 5,
      outro: 5,
      timer: 5
    }
  });

  const handleBgImage = async (event) => {
    const file = event.file;
    setData((data) => ({ ...data, bg_image: file }));
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

  const handleBgVideo = async (event, type) => {
    const file = event.file;
    setData((data) => ({ ...data, [type]: file }));
  };

  const handleAudio = async (event) => {
    const file = event.file;
    setData((data) => ({ ...data, audio: file }));
  };

  const fetchTemplates = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/templates`);
      if (response.data.length > 0) setTemplates(response.data);
    } catch (err) {
      console.log(err);
      message.error({ content: 'Please refresh the page' });
    }
  };

  const fetchFonts = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/fonts`);
      console.log(response);
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
    Draggable.create(questionRef.current, {
      type: 'x,y',
      bounds: canvasRef.current,
      onDrag: function () {
        const canvasBounds = canvasRef.current.getBoundingClientRect();
        const questionBounds = questionRef.current.getBoundingClientRect();
        const left = questionBounds.left - canvasBounds.left;
        const top = questionBounds.top - canvasBounds.top;

        const position = {
          x: parseInt(left),
          y: parseInt(top)
        };

        setData((prevData) => ({
          ...prevData,
          positions: { ...prevData.positions, content: position }
        }));
      }
    });

    Draggable.create(optionsRef.current, {
      type: 'x,y',
      bounds: canvasRef.current,
      onDrag: function () {
        const canvasBounds = canvasRef.current.getBoundingClientRect();
        const optionsBounds = optionsRef.current.getBoundingClientRect();
        const left = optionsBounds.left - canvasBounds.left;
        const top = optionsBounds.top - canvasBounds.top;

        const position = {
          x: parseInt(left),
          y: parseInt(top)
        };

        setData((prevData) => ({
          ...prevData,
          positions: { ...prevData.positions, options: position }
        }));
      }
    });
  }, [data.bg_image]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @font-face {
        font-family: '${data.font.style}';
        src: url('${SERVER_ADDRESS}/font/${data.font.style}.ttf') format('truetype');
      }
      .font-style{
        font-family: '${data.font.style}', sans-serif;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [data.font.style]);

  const imageprops = {
    listType: 'picture',
    beforeUpload: () => false,
    maxCount: 1,
    accept: '.png,.jpg,.jpeg',
    onChange: handleBgImage
  };

  const audioprops = {
    listType: 'picture',
    beforeUpload: () => false,
    maxCount: 1,
    accept: '.mp3',
    onChange: handleAudio
  };

  const videoprops = {
    listType: 'picture',
    beforeUpload: () => false,
    maxCount: 1,
    accept: '.mp4,.HEIC,.mov,.gif'
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
      const updatedPosition = {
        question: {
          x: data.positions.question.x * 3,
          y: data.positions.question.y * 3
        },
        options: {
          x: data.positions.options.x * 3,
          y: data.positions.options.y * 3
        }
      };
      data.positions = updatedPosition;
      const formData = new FormData();

      if (!data.name) {
        message.error({ content: 'Please enter the name' });
        return;
      } else if (!data.bg_image) {
        message.error({ content: 'Please upload the bg image' });
        return;
      } else if (!data.bg_video) {
        message.error({ content: 'Please upload the bg video' });
        return;
      } else if (data.intro && !data.intro_video) {
        message.error({ content: 'Please upload the intro video' });
        return;
      } else if (data.outro && !data.outro_video) {
        message.error({ content: 'Please upload the outro video' });
        return;
      } else if (!data.font.style) {
        message.error({ content: 'Please Select the font style' });
        return;
      }

      const exists = templates.filter((temp) => temp.name.toLowerCase() === data.name.toLowerCase()).length > 0;
      if (!exists) {
        formData.append('data', JSON.stringify(data));
        formData.append('backgroundImage', data.bg_image);
        formData.append('backgroundVideo', data.bg_video);
        formData.append('audio', data.audio);

        if (data.intro) {
          formData.append('intro_video', data.intro_video);
        }

        if (data.outro) {
          formData.append('outro_video', data.outro_video);
        }

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
        {/* Canvas */}
        <div className="relative flex justify-center h-fit overflow-hidden">
          <canvas
            ref={canvasRef}
            className="bg-gray-200 border-2 w-[360px] h-[360px] relative"
            style={{
              width: data.size.width / 3 + 'px',
              height: data.size.height / 3 + 'px'
            }}
          />
          <p
            className="font-style"
            ref={questionRef}
            style={{
              position: 'absolute',
              cursor: 'move',
              fontSize: data.font.question.size / 3 + 'px',
              width: data.font.question.width / 3 + 'px',
              border: '1px solid black',
              overflow: 'hidden',
              color: data.font.question.color,
              textAlign: data.font.question.align,
              backgroundColor: data.font.question.bg ? data.font.question.bgColor : '',
              lineHeight: `${data.font.question.lineHeight / 3}px`,
              top: 100
            }}
          >
            {texts.question}
          </p>
          <p
            ref={optionsRef}
            className="font-style"
            style={{
              position: 'absolute',
              cursor: 'move',
              fontSize: data.font.options.size / 3 + 'px',
              width: data.font.options.width / 3 + 'px',
              overflow: 'hidden',
              flexWrap: 'wrap',
              lineHeight: `${data.font.options.lineHeight / 3}px`,
              textAlign: data.font.options.align,
              color: data.font.options.color,
              top: 400
            }}
          >
            {texts.options && (
              <div className="flex flex-col gap-4">
                <p
                  className="border border-black overflow-hidden"
                  style={{ backgroundColor: data.font.options.bg ? data.font.options.bgColor : '' }}
                >
                  {texts.options}
                </p>
                <p
                  className="border border-black overflow-hidden"
                  style={{ backgroundColor: data.font.options.bg ? data.font.options.bgColor : '', color: data.font.options.answerColor }}
                >
                  {texts.options}
                </p>
                <p
                  className="border border-black overflow-hidden"
                  style={{ backgroundColor: data.font.options.bg ? data.font.options.bgColor : '' }}
                >
                  {texts.options}
                </p>
                <p
                  className="border border-black overflow-hidden"
                  style={{ backgroundColor: data.font.options.bg ? data.font.options.bgColor : '' }}
                >
                  {texts.options}
                </p>
              </div>
            )}
          </p>
        </div>

        {/* Menu */}
        <div className="container flex flex-col gap-4 mb-4 min-h-[75vh] max-h-[110vh] min-w-fit bg-white rounded-md overflow-y-scroll px-4 py-3">
          <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
            <p className="text-md font-bold">Template Name:</p>
            <Input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
          </div>
          <div className="w-full border-b border-gray-400"></div>
          {/* Size */}
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
          {/* Intro & Outro */}
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
          {/* Assets */}
          <p className="text-md font-bold">Background Image:</p>
          <Upload {...imageprops}>
            <Button type="primary">Upload Image</Button>
          </Upload>
          <p className="text-md font-bold">Background Video:</p>
          <Upload {...videoprops} onChange={(event) => handleBgVideo(event, 'bg_video')}>
            <Button type="primary">Upload Video</Button>
          </Upload>
          <div className="grid grid-cols-2 ">
            {data.intro && (
              <div className="flex flex-col">
                <p className="text-md font-bold">Intro Video:</p>
                <Upload {...videoprops} onChange={(event) => handleBgVideo(event, 'intro_video')}>
                  <Button type="primary">Upload Intro</Button>
                </Upload>
              </div>
            )}
            {data.outro && (
              <div className="flex flex-col">
                <p className="text-md font-bold">Outro Video:</p>
                <Upload {...videoprops} onChange={(event) => handleBgVideo(event, 'outro_video')}>
                  <Button type="primary">Upload Outro</Button>
                </Upload>
              </div>
            )}
          </div>
          <p className="text-md font-bold">Background Audio:</p>
          <Upload {...audioprops}>
            <Button type="primary">Upload Audio</Button>
          </Upload>
          <div className="w-full border-b border-gray-400"></div>
          {/* Data */}
          {/* Font Style */}
          <div>
            <p className="font-bold">Font Style</p>
            <Select
              style={{ width: '10rem', marginBottom: '10px' }}
              value={data.font.style}
              onChange={(val) => {
                setData({ ...data, font: { ...data.font, style: val } });
              }}
            >
              {fonts.map((font) => (
                <Select.Option value={font.name}>{font.name}</Select.Option>
              ))}
            </Select>
            <p className="font-bold">Duration:</p>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[40%_60%] items-center">
                <p>Total Duration:</p>
                <InputNumber
                  style={{ width: '10rem' }}
                  value={data.duration.total}
                  onChange={(val) => {
                    setData({ ...data, duration: { ...data.duration, total: val } });
                  }}
                />
              </div>
              {data.intro && (
                <div className="grid grid-cols-[40%_60%] items-center">
                  <p>Intro Duration:</p>
                  <InputNumber
                    style={{ width: '10rem' }}
                    value={data.duration.intro}
                    onChange={(val) => {
                      setData({ ...data, duration: { ...data.duration, intro: val } });
                    }}
                  />
                </div>
              )}
              {data.outro && (
                <div className="grid grid-cols-[40%_60%] items-center">
                  <p>Outro Duration:</p>
                  <InputNumber
                    style={{ width: '10rem' }}
                    value={data.duration.outro}
                    onChange={(val) => {
                      setData({ ...data, duration: { ...data.duration, outro: val } });
                    }}
                  />
                </div>
              )}
              <div className="grid grid-cols-[40%_60%] items-center">
                <p>Timer Duration:</p>
                <InputNumber
                  style={{ width: '10rem' }}
                  value={data.duration.timer}
                  onChange={(val) => {
                    setData({ ...data, duration: { ...data.duration, timer: val } });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full border-b border-gray-400"></div>
          {/* Question */}
          <div className="selection-container flex flex-col gap-3">
            <p className="text-md font-bold">Question:</p>
            <div className="flex flex-col gap-2">
              <div>
                <p>Size</p>
                <Slider
                  className="w-[18rem]"
                  value={data.font.question.size}
                  onChange={(value) => setData({ ...data, font: { ...data.font, question: { ...data.font.question, size: value } } })}
                />
              </div>
              <div>
                <p>Width</p>
                <Slider
                  className="w-[18rem]"
                  max={data.size.width}
                  value={data.font.question.width}
                  onChange={(value) => setData({ ...data, font: { ...data.font, question: { ...data.font.question, width: value } } })}
                />
              </div>
              <div>
                <p>Line Height</p>
                <Slider
                  className="w-[18rem]"
                  max={100}
                  value={data.font.question.lineHeight}
                  onChange={(value) => setData({ ...data, font: { ...data.font, question: { ...data.font.question, lineHeight: value } } })}
                />
              </div>
              <div>
                <p>Alignment</p>
                <Segmented
                  style={{ width: 'fit-content' }}
                  defaultValue={data.font.question.align}
                  options={['left', 'center', 'right']}
                  onChange={(value) => setData({ ...data, font: { ...data.font, question: { ...data.font.question, align: value } } })}
                />
              </div>
              <div>
                <p>Preview Text</p>
                <textarea
                  className="w-full border"
                  value={texts.question}
                  onChange={(e) => setTexts((prev) => ({ ...prev, question: e.target.value }))}
                />
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p>Text Color</p>
                  <input
                    type="color"
                    value={data.font.question.color}
                    onChange={(e) =>
                      setData({ ...data, font: { ...data.font, question: { ...data.font.question, color: e.target.value } } })
                    }
                  />
                </div>
                <div>
                  <p className="text-md">BG Color:</p>
                  <div className="flex gap-2 items-center h-[23px]">
                    <Switch
                      className="w-fit"
                      onChange={(val) =>
                        setData((prev) => ({ ...prev, font: { ...prev.font, question: { ...prev.font.question, bg: val } } }))
                      }
                    />
                    {data.font.question.bg && (
                      <input
                        type="color"
                        value={data.font.question.bgColor}
                        onChange={(e) =>
                          setData({ ...data, font: { ...data.font, question: { ...data.font.question, bgColor: e.target.value } } })
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold">Animation</p>
                <Select
                  style={{ width: '10rem' }}
                  value={data.font.question.animation}
                  onChange={(value) => setData({ ...data, font: { ...data.font, question: { ...data.font.question, animation: value } } })}
                >
                  <Select.Option value="fade">Fade</Select.Option>
                  <Select.Option value="bounce">Bounce</Select.Option>
                  <Select.Option value="slideup">Slide Up</Select.Option>
                  <Select.Option value="slidedown">Slide Down</Select.Option>
                  <Select.Option value="slideleft">Slide Left</Select.Option>
                  <Select.Option value="slideright">Slide Right</Select.Option>
                  <Select.Option value="scale">Scale</Select.Option>
                  <Select.Option value="blink">Blink</Select.Option>
                  <Select.Option value="shake">Shake</Select.Option>
                  <Select.Option value="horizontalShake">Horizontal Shake</Select.Option>
                  <Select.Option value="verticalShake">Vertical Shake</Select.Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="w-full border-b border-gray-400"></div>
          {/* Options */}
          <div className="selection-container flex flex-col gap-3">
            <p className="text-md font-bold">Options:</p>
            <div className="flex flex-col gap-2">
              <div>
                <p>Size</p>
                <Slider
                  className="w-[18rem]"
                  value={data.font.options.size}
                  onChange={(value) => setData({ ...data, font: { ...data.font, options: { ...data.font.options, size: value } } })}
                />
              </div>
              <div>
                <p>Width</p>
                <Slider
                  className="w-[18rem]"
                  max={data.size.width}
                  value={data.font.options.width}
                  onChange={(value) => setData({ ...data, font: { ...data.font, options: { ...data.font.options, width: value } } })}
                />
              </div>
              <div>
                <p>Line Height</p>
                <Slider
                  className="w-[18rem]"
                  max={100}
                  value={data.font.options.lineHeight}
                  onChange={(value) => setData({ ...data, font: { ...data.font, options: { ...data.font.options, lineHeight: value } } })}
                />
              </div>
              <div>
                <p>Alignment</p>
                <Segmented
                  style={{ width: 'fit-content' }}
                  defaultValue={data.font.options.align}
                  options={['left', 'center', 'right']}
                  onChange={(value) => setData({ ...data, font: { ...data.font, options: { ...data.font.options, align: value } } })}
                />
              </div>
              <div>
                <p>Preview Text</p>
                <textarea
                  className="w-full border"
                  value={texts.options}
                  onChange={(e) => setTexts((prev) => ({ ...prev, options: e.target.value }))}
                />
              </div>
              <div className="grid grid-cols-3">
                <div>
                  <p>Text Color</p>
                  <input
                    type="color"
                    value={data.font.options.color}
                    onChange={(e) => setData({ ...data, font: { ...data.font, options: { ...data.font.options, color: e.target.value } } })}
                  />
                </div>
                <div>
                  <p>Answer Color</p>
                  <input
                    type="color"
                    value={data.font.options.answerColor}
                    onChange={(e) =>
                      setData({ ...data, font: { ...data.font, options: { ...data.font.options, answerColor: e.target.value } } })
                    }
                  />
                </div>
                <div>
                  <p className="text-md ">BG Color:</p>
                  <div className="flex gap-2 items-center h-[23px]">
                    <Switch
                      className="w-fit"
                      value={data.font.options.bg}
                      onChange={(val) =>
                        setData((prev) => ({ ...prev, font: { ...prev.font, options: { ...prev.font.options, bg: val } } }))
                      }
                    />
                    {data.font.options.bg && (
                      <input
                        type="color"
                        value={data.font.options.bgColor}
                        onChange={(e) =>
                          setData({ ...data, font: { ...data.font, options: { ...data.font.options, bgColor: e.target.value } } })
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold">Animation</p>
                <Select
                  style={{ width: '10rem' }}
                  value={data.font.options.animation}
                  onChange={(value) => setData({ ...data, font: { ...data.font, options: { ...data.font.options, animation: value } } })}
                >
                  <Select.Option value="fade">Fade</Select.Option>
                  <Select.Option value="bounce">Bounce</Select.Option>
                  <Select.Option value="slideup">Slide Up</Select.Option>
                  <Select.Option value="slidedown">Slide Down</Select.Option>
                  <Select.Option value="slideleft">Slide Left</Select.Option>
                  <Select.Option value="slideright">Slide Right</Select.Option>
                  <Select.Option value="scale">Scale</Select.Option>
                  <Select.Option value="blink">Blink</Select.Option>
                  <Select.Option value="shake">Shake</Select.Option>
                  <Select.Option value="horizontalShake">Horizontal Shake</Select.Option>
                  <Select.Option value="verticalShake">Vertical Shake</Select.Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="w-full border-b border-gray-400"></div>
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
