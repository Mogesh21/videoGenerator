import { Breadcrumb, Button, InputNumber, message, Modal, Progress, Segmented, Select, Slider, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

gsap.registerPlugin(Draggable);

const comments = {
  twenty: ['Getting started...', 'Warming up...', 'Just the beginning!'],
  fifty: ['Halfway there!', 'Looking good!', "You're doing great!"],
  seventy: ['Almost done!', 'Hang tight!', 'Nearly there!'],
  eighty: ['Finishing touches...', 'Just a moment more...', 'Final stretch!']
};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const CreateVideo = () => {
  const navigate = useNavigate();
  const canvasRef = useRef();
  const questionRef = useRef();
  const imageRef = useRef();
  const optionsRef = useRef();
  const [comment, setComment] = useState("Let's start");
  const [progress, setProgress] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [fonts, setFonts] = useState([]);
  const [texts, setTexts] = useState({
    question: ['Question'],
    images: [],
    options: ['Option1', 'Option2', 'Option3', 'Option4'],
    answer: 'Option2'
  });
  const [templates, setTemplates] = useState([]);
  const twoColors = {
    '0%': '#108ee9',
    '50%': '#87d068',
    '100%': '#87d068'
  };
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
        x: 100,
        y: 100
      },
      options: {
        x: 40,
        y: 200
      }
    },
    duration: {
      total: 10,
      intro: 5,
      outro: 5,
      timer: 5
    }
  });

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

  const fetchCategories = async () => {
    const response = await axios.get('https://interviewbix.com/api/category-list');
    if (response.status === 200) {
      setCategories(response.data.data);
    }
  };

  const fetchSubCategories = async (cat_id) => {
    const response = await axios.post(
      'https://interviewbix.com/api/subcategory-list',
      {
        category_id: cat_id
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    if (response.status === 200) {
      setSubCategories(response.data.data);
    }
  };

  const fetchSections = async (subcat_id) => {
    const response = await axios.post(
      'https://interviewbix.com/api/section-list',
      {
        sub_category_id: subcat_id
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    if (response.status === 200) {
      setSections(response.data.data);
    }
  };

  const fetchQuestions = async (section_id) => {
    console.log(section_id);
    const response = await axios.post(
      'https://interviewbix.com/api/question-list',
      {
        section_id: section_id
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    if (response.status === 200) {
      setQuestions(response.data.data);
    }
  };

  const handleQuestion = (id) => {
    const [current] = questions.filter((val) => val.id === id);

    const parser = new DOMParser();
    const doc = parser.parseFromString(current.question, 'text/html');

    const text = [...doc.querySelectorAll('p')].map((p) => p.textContent);
    const text2 = [...doc.querySelectorAll('div')].map((div) => div.textContent);
    const text3 = [...doc.querySelectorAll('span')].map((p) => p.textContent);
    const text4 = [...doc.querySelectorAll('h1')].map((p) => p.textContent);
    const text5 = [...doc.querySelectorAll('h2')].map((p) => p.textContent);
    const text6 = [...doc.querySelectorAll('h3')].map((p) => p.textContent);
    const text7 = [...doc.querySelectorAll('h4')].map((p) => p.textContent);
    const text8 = [...doc.querySelectorAll('h5')].map((p) => p.textContent);
    const text9 = [...doc.querySelectorAll('h6')].map((p) => p.textContent);
    const images = [...doc.querySelectorAll('img')].map((img) => img.src);

    const options = [current.option_1, current.option_2, current.option_3, current.option_4];
    const answer = current.answer;

    setTexts({
      question: [...text, ...text2, ...text3, ...text4, ...text5, ...text6, ...text7, ...text8, ...text9],
      images: images,
      options: options,
      answer: answer
    });

    if (imageRef.current) {
      const questionBounds = questionRef.current.getBoundingClientRect();
      console.log(questionBounds);
      imageRef.current.style.left = `${data.positions.question.x}px`;
      imageRef.current.style.top = `${data.positions.question.y + 50}px`;
      gsap.to(imageRef.current, { x: 0, y: 0, force3D: false });
    }
  };

  const handleTemplate = (id) => {
    if (templates.length > 0) {
      const [current] = templates.filter((data) => data.id === parseInt(id));
      var ctx = canvasRef.current.getContext('2d');
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
      };
      img.src = `${SERVER_ADDRESS}/public/templates/${current.background_image}`;

      const newData = {
        ...current,
        positions: {
          question: {
            x: current.positions.question.x / 3,
            y: current.positions.question.y / 3
          },
          options: {
            x: current.positions.options.x / 3,
            y: current.positions.options.y / 3
          },
          images: {
            x: current.positions.question.x / 3,
            y: current.positions.question.y / 3 + 50
          }
        }
      };

      if (questionRef.current) {
        const left = newData.positions.question.x;
        const top = newData.positions.question.y;

        questionRef.current.style.left = `${left}px`;
        questionRef.current.style.top = `${top}px`;
        gsap.to(questionRef.current, { x: 0, y: 0, force3D: false });
      }
      if (optionsRef.current) {
        const left = newData.positions.options.x;
        const top = newData.positions.options.y;

        gsap.to(optionsRef.current, { x: 0, y: 0, force3D: false });
        optionsRef.current.style.left = `${left}px`;
        optionsRef.current.style.top = `${top}px`;
      }

      newData.font = {
        ...newData.font,
        images: {
          width: 300,
          height: 300
        }
      };
      setData(newData);
    }
  };

  useEffect(() => {
    if (progressPercent <= 20) {
      setComment(getRandom(comments.twenty));
    } else if (progressPercent <= 50) {
      setComment(getRandom(comments.fifty));
    } else if (progressPercent <= 70) {
      setComment(getRandom(comments.seventy));
    } else if (progressPercent <= 100) {
      setComment(getRandom(comments.eighty));
    }
  }, [progressPercent]);

  useEffect(() => {
    fetchTemplates();
    fetchFonts();
    fetchCategories();
  }, []);

  useEffect(() => {
    let interval;

    if (progress) {
      interval = setInterval(async () => {
        try {
          const response = await axios.get(`${SERVER_ADDRESS}/videos/status/${progress}`);
          if (response.status === 200 && response.data.progress !== 0) {
            setProgressPercent(response.data.progress);
          }
        } catch (error) {
          console.error('Error fetching progress:', error);
          clearInterval(interval);
          setProgress(null);
        }
      }, 1000);
    }

    return () => {
      // setProgress(null);
      if (interval) clearInterval(interval);
    };
  }, [progress]);

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
          positions: { ...prevData.positions, question: position }
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
    Draggable.create(imageRef.current, {
      type: 'x,y',
      bounds: canvasRef.current,
      onDrag: function () {
        const canvasBounds = canvasRef.current.getBoundingClientRect();
        const imageBounds = imageRef.current.getBoundingClientRect();
        const left = imageBounds.left - canvasBounds.left;
        const top = imageBounds.top - canvasBounds.top;

        const position = {
          x: parseInt(left),
          y: parseInt(top)
        };

        setData((prevData) => ({
          ...prevData,
          positions: { ...prevData.positions, images: position }
        }));
      }
    });
  }, [data.bg_image, texts.images]);

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

  const handleCreateVideo = async () => {
    setProgressPercent(0);
    try {
      const updatedPosition = {
        question: {
          x: data.positions.question.x * 3,
          y: data.positions.question.y * 3
        },
        options: {
          x: data.positions.options.x * 3,
          y: data.positions.options.y * 3
        },
        images: {
          x: data.positions.images.x * 3,
          y: data.positions.images.y * 3
        }
      };
      // data.positions = updatedPosition;
      const content = {
        text: texts.question.filter((val) => val.trim()),
        images: texts.images,
        options: texts.options,
        answer: texts.answer
      };

      const assets = {
        background_image: data.background_image,
        background_video: data.background_video,
        audio: data.audio
      };

      if (data.intro) {
        assets.intro_video = data.intro_video;
      }
      if (data.outro) {
        assets.outro_video = data.outro_video;
      }

      const reqId = Date.now() + Math.floor(Math.random() * 99);
      setProgress(reqId);
      const response = await axios.post(`${SERVER_ADDRESS}/videos/create`, {
        size: data.size,
        positions: updatedPosition,
        duration: data.duration,
        content: content,
        assets: assets,
        font: data.font,
        intro: data.intro,
        outro: data.outro,
        reqId: reqId
      });
      if (response.status === 200) {
        message.success({ content: 'Video Created Successfully' });
        navigate('/videos');
      } else {
        message.error({ content: response.message });
      }
      setProgress(null);
      setProgressPercent(0);
    } catch (err) {
      setProgress(null);
      setProgressPercent(0);
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
        <div className="flex justify-center">
          <div className="relative justify-center h-fit w-fit overflow-hidden">
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
                border: texts.question[0] ? '1px solid black' : '',
                overflow: 'hidden',
                transform: 'none !important',
                color: data.font.question.color,
                textAlign: data.font.question.align,
                backgroundColor: data.font.question.bg ? data.font.question.bgColor : '',
                lineHeight: `${data.font.question.lineHeight / 3}px`,
                top: 100,
                left: 50
              }}
            >
              {...texts.question}
            </p>
            {texts.images[0] && (
              <img
                className="font-style"
                ref={imageRef}
                src={texts.images[0]}
                style={{
                  position: 'absolute',
                  cursor: 'move',
                  width: data.font.image.width / 3 + 'px',
                  height: data.font.image.height / 3 + 'px',
                  overflow: 'hidden',
                  transform: 'none !important',
                  top: 100,
                  left: 50
                }}
              />
            )}

            <p
              ref={optionsRef}
              className="font-style"
              style={{
                position: 'absolute',
                cursor: 'move',
                fontSize: data.font.options.size / 3 + 'px',
                width: data.font.options.width / 3 + 'px',
                overflow: 'hidden',
                transform: 'none !important',
                flexWrap: 'wrap',
                lineHeight: `${data.font.options.lineHeight / 3}px`,
                textAlign: data.font.options.align,
                top: 400,
                left: 40
              }}
            >
              {texts.options && (
                <div className="flex flex-col gap-4">
                  <p
                    className="border border-black overflow-hidden"
                    style={{
                      backgroundColor: data.font.options.bg ? data.font.options.bgColor : '',
                      color: texts.options[0] === texts.answer ? data.font.options.answerColor : data.font.options.color
                    }}
                  >
                    {texts.options[0]}
                  </p>
                  <p
                    className="border border-black overflow-hidden"
                    style={{
                      backgroundColor: data.font.options.bg ? data.font.options.bgColor : '',
                      color: texts.options[1] === texts.answer ? data.font.options.answerColor : data.font.options.color
                    }}
                  >
                    {texts.options[1]}
                  </p>
                  <p
                    className="border border-black overflow-hidden"
                    style={{
                      backgroundColor: data.font.options.bg ? data.font.options.bgColor : '',
                      color: texts.options[2] === texts.answer ? data.font.options.answerColor : data.font.options.color
                    }}
                  >
                    {texts.options[2]}
                  </p>
                  <p
                    className="border border-black overflow-hidden"
                    style={{
                      backgroundColor: data.font.options.bg ? data.font.options.bgColor : '',
                      color: texts.options[4] === texts.answer ? data.font.options.answerColor : data.font.options.color
                    }}
                  >
                    {texts.options[3]}
                  </p>
                </div>
              )}
            </p>
            <p
              style={{
                color: data.font.question.color,
                position: 'absolute',
                top: 1840 / 3,
                left: 350/3,
                fontSize: 50/3
              }}
            >
              interviewbix.com
            </p>
          </div>
        </div>

        {/* Menu */}
        {progress ? (
          <div className="bg-white flex flex-col items-center justify-center gap-2 pb-8">
            <p className=" w-fit text-[1.2rem] font-bold bg-gradient-to-r from-[#108ee9]  to-[#87d068] bg-clip-text text-transparent">
              {comment}
            </p>
            <Progress percent={progressPercent} strokeColor={twoColors} className="w-[80%]" size={[, 15]} />
          </div>
        ) : (
          <div className="container flex flex-col gap-4 mb-4 min-h-[75vh] max-h-[110vh] min-w-fit bg-white rounded-md overflow-y-scroll px-4 py-3">
            <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
              <p className="text-md font-bold">Select Template</p>
              <Select onChange={(val) => handleTemplate(val)}>
                {templates.map((template) => (
                  <Select.Option key={template.id} value={template.id}>
                    {template.name}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
              <p className="text-md font-bold">Select Category</p>
              <Select onChange={(val) => fetchSubCategories(val)}>
                {categories.map((category) => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.categoryTitle}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
              <p className="text-md font-bold">Select subCategory</p>
              <Select onChange={(val) => fetchSections(val)}>
                {subCategories.map((subcategory) => (
                  <Select.Option key={subcategory.id} value={subcategory.id}>
                    {subcategory.chapterName}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
              <p className="text-md font-bold">Select Section</p>
              <Select onChange={(val) => fetchQuestions(val)}>
                {sections.map((section) => (
                  <Select.Option key={section.id} value={section.id}>
                    {section.sectionTitle}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className="name-wrapper flex flex-col gap-3 w-[18rem]">
              <p className="text-md font-bold">Select Question</p>
              <Select onChange={(val) => handleQuestion(val)}>
                {questions.map((question) => (
                  <Select.Option key={question.id} value={question.id}>
                    {question.id}
                  </Select.Option>
                ))}
              </Select>
            </div>
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
                  <Select.Option key={font.id} value={font.name}>
                    {font.name}
                  </Select.Option>
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
                {data.intro === 1 && (
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
                {data.outro === 1 && (
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
                    onChange={(value) =>
                      setData({ ...data, font: { ...data.font, question: { ...data.font.question, lineHeight: value } } })
                    }
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
                    onChange={(value) =>
                      setData({ ...data, font: { ...data.font, question: { ...data.font.question, animation: value } } })
                    }
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
                <div className="grid grid-cols-3">
                  <div>
                    <p>Text Color</p>
                    <input
                      type="color"
                      value={data.font.options.color}
                      onChange={(e) =>
                        setData({ ...data, font: { ...data.font, options: { ...data.font.options, color: e.target.value } } })
                      }
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
            {texts.images && texts.images.length > 0 && (
              <>
                <div className="w-full border-b border-gray-400"></div>
                <div className="grid grid-cols-[40%_60%] items-center">
                  <p>Image Width:</p>
                  <InputNumber
                    style={{ width: '10rem' }}
                    value={data.font.image?.width}
                    onChange={(val) => {
                      setData({ ...data, font: { ...data.font, image: { ...data.font.image, width: val } } });
                    }}
                  />
                </div>
                <div className="grid grid-cols-[40%_60%] items-center">
                  <p>Image Height:</p>
                  <InputNumber
                    style={{ width: '10rem' }}
                    value={data.font.image?.height}
                    onChange={(val) => {
                      setData({ ...data, font: { ...data.font, image: { ...data.font.image, height: val } } });
                    }}
                  />
                </div>
              </>
            )}
            <div className="w-full border-b border-gray-400"></div>

            <Button
              onClick={handleCreateVideo}
              className="w-[10rem] transform translate-x-1/2 mb-2"
              style={{ backgroundColor: 'green', color: 'white' }}
            >
              Create
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateVideo;
