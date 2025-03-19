import { Button, Form, Input, message, Radio, Select, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import readXlsxFile from 'read-excel-file';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import { useNavigate } from 'react-router';
// import makeVideo from 'utils/makeVideo';

const CreateVideo = () => {
  const navigate = useNavigate();
  const [fileData, setFileData] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [current, setCurrent] = useState({});
  const [templates, setTemplates] = useState([]);
  const [type, setType] = useState(false);
  const [progress, setProgress] = useState(null);

  const updateProgress = (val) => {
    setProgress(val);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/projects/videos`);
      if (response.status === 200) {
        console.log('data', response.data);
        setData(response.data);
      } else {
        message.error({ content: 'Internal Server Error', duration: 2 });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Internal Server Error', duration: 2 });
    }
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

  useEffect(() => {
    fetchData();
    fetchTemplates();
  }, []);

  const onChange = async (doc) => {
    const data = await readXlsxFile(doc.file);
    setFileData(data.slice(1));
  };

  const excelprops = {
    beforeUpload: true,
    accept: ['.xlsx', '.xls'],
    onChange: onChange,
    maxCount: 1
  };

  const handleSubmit = async () => {
    let prog;
    let pos = current.position;
    pos = {
      title: {
        x: pos.title.x * 3,
        y: pos.title.y * 3
      },
      content: {
        x: pos.content.x * 3,
        y: pos.content.y * 3
      },
      credit: {
        x: pos.credit.x * 3,
        y: pos.credit.y * 3
      }
    };
    data.position = pos;
    try {
      const exists = data.filter((data) => data.name === name);
      if (exists.length > 0) {
        message.error('Name already exists');
        return;
      }
      setLoading(true);

      const lastResponse = await axios.get(`${SERVER_ADDRESS}/videos/lastId`);

      prog = setInterval(async () => {
        const response = await axios.get('http://127.0.0.1:8080/make/progress', {
          headers: {
            id: lastResponse.data.id
          }
        });
        setProgress(response.data.status);
      }, 1000);

      current.id = lastResponse.data.id;
      current.project_name = name;
      current.type = type;
      current.fileData = fileData;
      // const resp = await axios.post(`${SERVER_ADDRESS}/data`, current);
      // return;
      // const verseData = resp.data;
      const response = await axios.post(`${SERVER_ADDRESS}/make/add`, current);

      if (response.status === 200) {
        if (response.data.message === 'TypeError') {
          message.error({ content: 'Invalid Excel sheet values', duration: 2 });
        } else {
          setProgress(null);
          message.success({ content: 'Videos Generated Successfully', duration: 2 });
          navigate(`/projects/videos/${response.data.id}`, { state: { id: response.data.id } });
        }
      } else {
        message.error({ content: 'Internal Server Error', duration: 2 });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: err.response?.data?.message || 'Internal Server Error', duration: 2 });
    } finally {
      setLoading(false);
      clearInterval(prog);
      setProgress(null);
    }
  };

  return (
    <div className="w-full rounded-xl p-3 bg-white flex flex-col items-center gap-4">
      <p className="ml-10 text-2xl font-bold underline text-blue-600">Generate Video</p>
      <Form onFinish={handleSubmit} className="w-4/6" labelCol={{ span: 10 }} wrapperCol={{ offset: 1, span: 10 }}>
        <Form.Item name="name" label="Project Name" rules={[{ required: true, message: 'Please enter the project name' }]}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item name="excel file" label="Excel File" rules={[{ required: true, message: 'Please Upload the Excel file' }]}>
          <Upload {...excelprops}>
            <Button type="primary">Upload Excel</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="template" label="Template" rules={[{ required: true, message: 'Please Select the template' }]}>
          <Select onChange={(val) => setCurrent(JSON.parse(val))}>
            {templates.map((val) => (
              <Select.Option value={JSON.stringify(val)} key={val.id}>
                {val.name}
              </Select.Option>
            ))}
          </Select>
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
    </div>
  );
};

export default CreateVideo;
