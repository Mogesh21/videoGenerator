import { PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Form, Input, message, Modal, Popconfirm, Table, Upload } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useState } from 'react';

const Fonts = () => {
  const [fonts, setFonts] = useState([]);
  const [form] = Form.useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const items = [
    {
      title: 'Settings'
    },
    {
      title: 'Fonts'
    }
  ];

  const handleChange = async (files, name) => {
    try {
      const { file } = files;
      if (file.status === 'done') {
        const formData = new FormData();
        formData.append('data', JSON.stringify({ name: name }));
        formData.append('font', file.originFileObj);
        const response = await axios.put(`${SERVER_ADDRESS}/fonts/edit`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response.status === 200) {
          message.success({ content: 'Font file Changed successfully', duration: 2 });
          // fetchFonts();
        } else {
          throw new Error('Font Error');
        }
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to change font', duration: 2 });
    }
  };

  const beforeUpload = (file) => {
    const isTTF = file.type === 'font/ttf' || file.name.endsWith('.ttf');

    if (!isTTF) {
      message.error('You can only upload TTF files!');
      return false;
    }

    return true;
  };

  const uploadProps = {
    beforeUpload,
    accept: ['.ttf'],
    maxCount: 1,
    showUploadList: false,
    customRequest: ({ onSuccess }) => onSuccess('ok')
  };

  const newFontProps = {
    showUploadList: true,
    beforeUpload,
    accept: ['.ttf'],
    multiple: false,
    customRequest: ({ onSuccess }) => onSuccess('ok')
  };

  const columns = [
    {
      title: 'S.No',
      width: '10%',
      render: (data, _, index) => <p>{index + 1}</p>
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Options',
      width: '30%',
      render: (_, data) => (
        <div className="flex gap-2 justify-end">
          <Upload {...uploadProps} onChange={(file) => handleChange(file, data.name)}>
            <Button type="primary" color="red">
              Change
            </Button>
          </Upload>
          <Popconfirm title="Delete this template" onConfirm={() => handleDelete(data)}>
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      )
    }
  ];

  const fetchFonts = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/fonts`);
      if (response.status === 200) setFonts(response.data.data);
    } catch (error) {
      console.log(error);
      message.error({ content: 'Unable to get data', duration: 2 });
    }
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  const handleDelete = async (data) => {
    try {
      const response = await axios.delete(`${SERVER_ADDRESS}/fonts/delete?id=${data.id}&&name=${data.name}`);
      if (response.status === 200) {
        message.success({ content: 'Font deleted successfully' });
        fetchFonts();
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to delete.Please try again' });
    }
  };

  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('data', JSON.stringify(data));
      formData.append('font', data.file?.file.originFileObj);
      const response = await axios.post(`${SERVER_ADDRESS}/fonts/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        message.success({ content: 'Font added successfully', duration: 2 });
        setModalOpen(false);
        form.resetFields();
        fetchFonts();
      } else {
        console.log(response);
        throw new Error('Unable to add');
      }
    } catch (error) {
      console.log(error);
      message.error({ message: 'Unable to add.Please refresh the page' });
    }
  };

  return (
    <>
      <div className="w-full rounded-xl p-3 bg-white flex flex-col items-center gap-4">
        <div className="w-full flex justify-between">
          <Breadcrumb items={items} />
          <Button type="none" className="bg-green-500 text-white" onClick={() => setModalOpen(true)}>
            Add <PlusOutlined />
          </Button>
        </div>
        <Table className="w-full" columns={columns} dataSource={fonts} />
      </div>
      <Modal
        open={modalOpen}
        title="Add Font"
        footer={() => {}}
        onCancel={() => {
          form.resetFields();
          setModalOpen(false);
        }}
      >
        <Form form={form} onFinish={handleSubmit} className="pt-6" labelCol={{ span: 6 }} wrapperCol={{ span: 15 }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter name'
              },
              {
                validator: (_, name) => {
                  if (fonts.filter((font) => font.name.toLowerCase() === name.toLowerCase()).length > 0) return Promise.reject();
                  else return Promise.resolve();
                },
                message: 'Name already exists'
              }
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Font File" name="file" rules={[{ required: true, message: 'Please add file' }]}>
            <Upload {...newFontProps}>
              <Button type="primary" color="red">
                .ttf File
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 10, offset: 10 }}>
            <button type="submit" className="bg-green-600 text-white px-2 py-2 rounded-md">
              Submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Fonts;
