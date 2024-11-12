import { Button, Form, Input, message, Radio, Switch, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import readXlsxFile from 'read-excel-file';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import { useNavigate } from 'react-router';

const Create = () => {
  const navigate = useNavigate();
  const [fileData, setFileData] = useState();
  const [bg, setBg] = useState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState(false);
  const [aspectRatio, setAspectRatio] = useState({
    type: 'post',
    width: 1080,
    height: 1080
  });

  const [progress, setProgress] = useState(null);
  const [font, setFont] = useState({
    title_size: '',
    title_color: '#FFFFFF',
    content_size: '',
    content_color: '#FFFFFF',
    credit_size: '',
    credit_color: '#FFFFFF'
  });

  const fetchFont = async () => {
    const response = await axios.get(`${SERVER_ADDRESS}/settings`);
    if (response.status === 200) {
      setFont(response.data);
    } else {
      message.error({ content: 'Some Error occured please try again', duration: 2 });
    }
  };

  useEffect(() => {
    fetchFont();
  }, []);

  const handleChange = (event) => {
    const val = event.target.value;
    if (val === 'post') {
      setAspectRatio({
        width: 1080,
        height: 1080,
        type: 'post'
      });
    } else if (val === 'reel') {
      setAspectRatio({
        width: 1080,
        height: 1920,
        type: 'reel'
      });
    } else if (val === 'video') {
      setAspectRatio({
        width: 1920,
        height: 1080,
        type: 'video'
      });
    } else {
      console.log(4);
    }
  };

  const onChange = async (doc) => {
    const data = await readXlsxFile(doc.file);
    setFileData(data.slice(1));
  };

  const handleBg = async (e) => {
    setBg(e.file);
  };

  const excelprops = {
    beforeUpload: true,
    accept: ['.xlsx', '.xls'],
    onChange: onChange,
    maxCount: 1
  };

  const bgprops = {
    listType: 'picture',
    beforeUpload: true,
    maxCount: 1,
    accept: ['.png', 'jpg', '.jpeg'],
    onChange: handleBg
  };

  const handleSubmit = async () => {
    const title = {
      size: font.title_size,
      color: font.title_color
    };
    const content = {
      size: font.content_size,
      color: font.content_color
    };
    const author = {
      size: font.credit_size,
      color: font.credit_color
    };

    let prog;
    try {
      setLoading(true);

      const formData = new FormData();

      const lastResponse = await axios.get('http://127.0.0.1:8080/videos/lastId');

      prog = setInterval(async () => {
        const response = await axios.get('http://127.0.0.1:8080/make/progress', {
          headers: {
            id: lastResponse.data.id
          }
        });
        setProgress(response.data.status);
      }, 1000);

      formData.append(
        'data',
        JSON.stringify({
          name: name,
          fileData: fileData,
          title: title,
          content: content,
          author: author,
          size: aspectRatio,
          id: lastResponse.data.id,
          type: type
        })
      );

      formData.append('background_image', bg);
      const response = await axios.post(`${SERVER_ADDRESS}/make/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setProgress(null);
        message.success({ content: 'Videos Generated Successfully', duration: 2 });
        navigate(`/videos/${response.data.id}`, { state: { id: response.data.id } });
      } else {
        message.error({ content: 'Internal Server Error', duration: 2 });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Internal Server Error', duration: 2 });
    } finally {
      setLoading(false);
      clearInterval(prog);
      setProgress(null);
    }
  };

  return (
    <div className="w-full rounded-xl p-3 bg-white flex flex-col items-center gap-4">
      <p className="ml-10 text-2xl font-bold underline text-blue-600">Generate Video</p>
      {/* <audio ref={audioRef} controls src="https://android.jaqer.com/bible/nkjv/40001.mp3" /> */}
      <Form onFinish={handleSubmit} className="w-3/6" labelCol={{ span: 10 }} wrapperCol={{ offset: 2, span: 20 }}>
        <Form.Item name="name" label="Project Name" rules={[{ required: true, message: 'Please enter the project name' }]}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item name="size" label="Aspect Ratio" rules={[{ required: true, message: 'Please select the aspect Ratio' }]}>
          <Radio.Group aria-label="text alignment" value={aspectRatio.type} onChange={handleChange}>
            <Radio value="post" aria-label="post">
              {/* <img src="../src/assets/images/aspect-ratio/post.png" /> */}
              {/* <p>Post</p> */}
              Post
            </Radio>
            <Radio value="reel" aria-label="reel">
              {/* <img src="../src/assets/images/aspect-ratio/reel.png" className=" h-full" /> */}
              {/* <p>Reel</p> */}
              Reel
            </Radio>
            <Radio value="video" aria-label="video">
              {/* <img src="../src/assets/images/aspect-ratio/video.png" /> */}
              {/* <p>Video</p> */}
              Video
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="excel file" label="Excel File" rules={[{ required: true, message: 'Please Upload the Excel file' }]}>
          <Upload {...excelprops}>
            <Button type="primary">Upload Excel</Button>
          </Upload>
          {/* <span className="text-xs text-red-600">Note: Required columns-audio url, version, book, chapter, verse, time</span> */}
        </Form.Item>
        <Form.Item name="bg" label="Background Image" rules={[{ required: true, message: 'Please Upload the background Image' }]}>
          <Upload {...bgprops}>
            <Button type="primary">Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="type" label="Video Type" rules={[{ required: true, message: 'Please Select video type' }]}>
          <Radio.Group onChange={(e) => setType(e.target.value)}>
            <Radio value={true}>Seperate Video</Radio>
            <Radio value={false}>Single Video</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 6
          }}
        >
          <Button type="primary" loading={loading} style={{ backgroundColor: '#10e950' }} htmlType="submit">
            {progress !== null ? progress.toString() + '%' : 'Generate'}
          </Button>
        </Form.Item>
      </Form>
      {/* <div>{data}</div> */}
    </div>
  );
};

export default Create;
