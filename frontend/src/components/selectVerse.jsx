import { UploadOutlined } from '@ant-design/icons';
import { Form, Button, message, Select, Switch, Upload, Radio, Input } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const SelectVerse = ({ handleCreate, aspectRatio }) => {
  const canvasRef = useRef();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [books, setBooks] = useState([]);
  const [verse, setVerse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [bookId, setBookId] = useState();
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState([]);
  const [form] = Form.useForm();
  const [fullChapter, setFullChapter] = useState(false);
  const [verseType, setVerseType] = useState(true);
  const [currentVerse, setCurrentVerse] = useState('');
  const [author, setAuthor] = useState('');
  const [font, setFont] = useState({
    title: {
      size: '',
      color: '#000000',
      text: ''
    },
    content: {
      size: '',
      color: '#000000',
      text: ''
    },
    author: {
      size: '',
      color: '#000000',
      text: ''
    }
  });
  const [bg, setBg] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(`${SERVER_ADDRESS}/data/books`);
      if (response.status === 200) {
        setBooks(response.data);
      } else {
        message.error({ content: 'Internal Server Error! Refresh the site', duration: 2 });
      }
    };
    fetchBooks();
  }, []);

  const fetchVerse = async (val) => {
    const response = await axios.get(`${SERVER_ADDRESS}/data/verse`, {
      headers: {
        bookId: val || bookId
      }
    });

    if (response.status === 200) {
      const uniqueChapters = Array.from(new Set(response.data.map((val) => val.chapter_num)));
      setChapters(uniqueChapters);
      setData(response.data);
    } else message.error({ content: 'Internal Server Error', duration: 2 });
  };

  useEffect(() => {
    try {
      if (bookId || bookId === 0) {
        fetchVerse();
      }
    } catch (err) {
      console.log(err);
    }
  }, [bookId]);

  useEffect(() => {
    const current = data.filter((data) => data.chapter_num === currentChapter);
    setVerse(current);
  }, [currentChapter]);

  useEffect(() => {
    const drawBackground = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      console.log(aspectRatio);

      const scaledWidth = aspectRatio.width / 3;
      const scaledHeight = aspectRatio.height / 3;
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;

      ctx.fillStyle = 'gray';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      try {
        if (bg) {
          const background = new Image();
          const bgUrl = URL.createObjectURL(bg);
          background.src = bgUrl;
          background.onload = () => {
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            if (font.title) {
              ctx.font = `bold ${font.title.size / 3}px Arial`;
              ctx.fillStyle = font.title.color || '#FFFFFF';
              ctx.textAlign = 'center';
              ctx.fillText('Title here', canvas.width / 2, 50);
            }
            if (font.content) {
              ctx.font = `${font.content.size / 3}px Arial`;
              ctx.fillStyle = font.content.color || '#FFFFFF';
              ctx.textAlign = 'center';
              ctx.fillText('Content here', canvas.width / 2, canvas.height / 2);
            }

            if (font.author) {
              ctx.font = `italic ${font.author.size / 3}px Arial`;
              ctx.fillStyle = font.author.color || '#FFFFFF';
              ctx.textAlign = 'right';
              ctx.fillText('- Author here', canvas.width - 30, canvas.height - 50);
            }
            URL.revokeObjectURL(bgUrl);
          };
        } else {
          ctx.fillStyle = '#666666';

          if (font.title) {
            ctx.font = `bold ${font.title.size / 3}px Arial`;
            ctx.fillStyle = font.title.color || '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText('Title here', canvas.width / 2, 50);
          }
          if (font.content) {
            ctx.font = `${font.content.size / 3}px Arial`;
            ctx.fillStyle = font.content.color || '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText('Content here', canvas.width / 2, canvas.height / 2);
          }

          if (font.author) {
            ctx.font = `italic ${font.author.size / 3}px Arial`;
            ctx.fillStyle = font.author.color || '#FFFFFF';
            ctx.textAlign = 'right';
            ctx.fillText('- Author here', canvas.width - 30, canvas.height - 50);
          }
        }
      } catch (error) {
        console.error('Error drawing on canvas:', error);
      }
    };

    if (aspectRatio) drawBackground();
  }, [aspectRatio, font, bg]);

  const props = {
    listType: 'picture',
    beforeUpload: true,
    onChange: (e) => {
      setBg(e.file);
    }
  };

  const onFinish = async () => {
    try {
      setLoading(true);
      font.title.text = books.find((book) => book.book_num === bookId).title;
      font.author.text = author;
      if (fullChapter) {
        const verses = data.filter((val) => val.chapter_num === currentChapter).map((val) => val.content);
        font.content.text = verses;
      } else {
        if (verseType) {
          font.content.text = [currentVerse];
        }
      }
      if (!aspectRatio || !bg || !font.title || !font.content || !font.author || !name) {
        message.warning({ content: 'Please fill all the fields', duration: 2 });
      }
      const lastResponse = await axios.get('http://127.0.0.1:8080/images/lastId');
      const form = new FormData();
      form.append('name', JSON.stringify(name));
      form.append('title', JSON.stringify(font.title));
      form.append('content', JSON.stringify(font.content));
      form.append('author', JSON.stringify(font.author));
      form.append('size', JSON.stringify(aspectRatio));
      form.append('id', lastResponse?.data?.id);
      form.append('versetype', JSON.stringify(verseType));
      form.append('background_image', bg);

      const response = await axios.post('http://127.0.0.1:8080/images/add', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        message.success({ content: 'Images Generated Successfully', duration: 2 });
        navigate(`/images/${response.data.id}`, { state: { id: response.data.id } });
      } else {
        message.error({ content: 'Internal Server Error', duration: 2 });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Internal Server Error', duration: 2 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form form={form} labelCol={{ span: 8 }} style={{ width: '30rem' }} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label="Project Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please give Project name'
            }
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Select Book"
          name="book"
          rules={[
            {
              required: true,
              message: 'Please select the book'
            }
          ]}
        >
          {books && (
            <Select
              onChange={(val) => {
                setBookId(val);
              }}
            >
              {books.map((book) => (
                <Select.Option key={book.book_num} value={book.book_num}>
                  {book.title}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="Select Chapter"
          name="chapter"
          rules={[
            {
              required: true,
              message: 'Please select the chapter'
            }
          ]}
        >
          {chapters && (
            <>
              <Select
                value={currentChapter}
                onChange={(val) => {
                  setCurrentChapter(val);
                }}
              >
                {chapters.map((chapter, index) => (
                  <Select.Option key={index} value={chapter}>
                    {chapter}
                  </Select.Option>
                ))}
              </Select>
              {typeof currentChapter === 'number' && (
                <div className="mt-2 flex gap-2">
                  <p>Full Chapter</p>
                  <Switch onChange={(val) => setFullChapter(val)} />
                </div>
              )}
            </>
          )}
        </Form.Item>
        <Form.Item
          label="Verse Type"
          name="verse_type"
          wrapperCol={{
            span: 16
          }}
        >
          <Radio.Group disabled={!fullChapter} onChange={(e) => setVerseType(e.target.value)} defaultValue={verseType}>
            <Radio value={true}>Single Verse</Radio>
            <Radio value={false}>Multiple Verses</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Select Verse" name="verse">
          {verse && (
            <Select disabled={fullChapter} onChange={(val) => setCurrentVerse(val)}>
              {verse.map((verse) => (
                <Select.Option key={verse.verse_num} value={verse.content}>
                  {verse.content}
                </Select.Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="Author"
          name="author"
          rules={[
            {
              required: true,
              message: 'Please give author name'
            }
          ]}
        >
          <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Background Image"
          name="background_image"
          wrapperCol={{
            span: 16
          }}
          rules={[
            {
              required: true,
              message: 'Please upload the Background Image'
            }
          ]}
        >
          <Upload {...props} className="flex flex-col justify-start">
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex gap-2 items-center justify-center flex-wrap w-[60vw]">
            <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
              <p className="text-right w-[10rem]">Title Font:</p>
              <Select
                className="w-28"
                placeholder="Size"
                value={font.title.size}
                onChange={(val) => setFont({ ...font, title: { ...font.title, size: val } })}
              >
                <Select.Option value={10}>10px</Select.Option>
                <Select.Option value={20}>20px</Select.Option>
                <Select.Option value={30}>30px</Select.Option>
                <Select.Option value={40}>40px</Select.Option>
                <Select.Option value={50}>50px</Select.Option>
                <Select.Option value={60}>60px</Select.Option>
                <Select.Option value={70}>70px</Select.Option>
                <Select.Option value={80}>80px</Select.Option>
                <Select.Option value={90}>90px</Select.Option>
                <Select.Option value={100}>100px</Select.Option>
              </Select>
              <input type="color" onChange={(e) => setFont({ ...font, title: { ...font.title, color: e.target.value } })} />
            </div>
            <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
              <p className="text-right w-[10rem]">Content Font size: </p>
              <Select
                className="w-28"
                value={font.content.size}
                onChange={(val) => setFont({ ...font, content: { ...font.content, size: val } })}
              >
                <Select.Option value={10}>10px</Select.Option>
                <Select.Option value={20}>20px</Select.Option>
                <Select.Option value={30}>30px</Select.Option>
                <Select.Option value={40}>40px</Select.Option>
                <Select.Option value={50}>50px</Select.Option>
                <Select.Option value={60}>60px</Select.Option>
                <Select.Option value={70}>70px</Select.Option>
                <Select.Option value={80}>80px</Select.Option>
                <Select.Option value={90}>90px</Select.Option>
                <Select.Option value={100}>100px</Select.Option>
              </Select>
              <input type="color" onChange={(e) => setFont({ ...font, content: { ...font.content, color: e.target.value } })} />
            </div>
            <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
              <p className="text-right w-[10rem]">Author Font size: </p>
              <Select
                className="w-28"
                value={font.author.size}
                onChange={(value) => setFont({ ...font, author: { ...font.author, size: value } })}
              >
                <Select.Option value={10}>10px</Select.Option>
                <Select.Option value={20}>20px</Select.Option>
                <Select.Option value={30}>30px</Select.Option>
                <Select.Option value={40}>40px</Select.Option>
                <Select.Option value={50}>50px</Select.Option>
                <Select.Option value={60}>60px</Select.Option>
                <Select.Option value={70}>70px</Select.Option>
                <Select.Option value={80}>80px</Select.Option>
                <Select.Option value={90}>90px</Select.Option>
                <Select.Option value={100}>100px</Select.Option>
              </Select>
              <input type="color" onChange={(e) => setFont({ ...font, author: { ...font.author, color: e.target.value } })} />
            </div>
          </div>
          <div className="flex justify-center p-2">
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" loading={loading} style={{ backgroundColor: 'green' }} className="mr-3" htmlType="submit">
            Generate
          </Button>
          <Button type="primary" style={{ backgroundColor: 'red' }} className="w-20 px-2" onClick={() => handleCreate(null)}>
            Back
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SelectVerse;
