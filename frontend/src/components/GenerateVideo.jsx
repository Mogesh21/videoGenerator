import { Form, Input } from 'antd';
import React from 'react';

const GenerateVideo = () => {
  const [form] = Form.useForm();
  return (
    <div className="w-full p-4 ">
      <Form form={form} labelCol={{ span: 10 }} wrapperCol={{ span: 8 }}>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default GenerateVideo;
