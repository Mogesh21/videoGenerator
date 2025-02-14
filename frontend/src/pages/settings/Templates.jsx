import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm, Table } from 'antd';
import axios from 'axios';
import Preview from 'components/Preview';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Templates = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);

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
    fetchTemplates();
  }, []);

  const createNewTemplate = () => {
    navigate('/settings/templates/new');
  };

  const handleEdit = (data) => {
    navigate(`/settings/templates/edit?id=${data.id}`);
  };

  const handleDelete = async (data) => {
    try {
      const response = await axios.put(`${SERVER_ADDRESS}/templates/delete`, { id: data.id, bg: data.background_image });
      if (response.status === 200) {
        message.success({ content: 'Template deleted successfully' });
        fetchTemplates();
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to delete.Please try again' });
    }
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
          <Button onClick={() => handleEdit(data)}>Edit</Button>
          <Popconfirm title="Delete this template" onConfirm={() => handleDelete(data)}>
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-end">
        <Button type="none" className="bg-green-500 text-white" onClick={createNewTemplate}>
          Create <PlusOutlined />
        </Button>
      </div>
      <Table columns={columns} dataSource={templates} />
    </div>
    // <div
    //   className="grid grid-cols-auto-fit gap-3 p-4"
    //   style={{ gridTemplateColumns: `repeat(auto-fit, minmax(15rem, ${templates.length < 3 ? '17rem' : '1fr'}))` }}
    // >
    //   {templates.map((record) => (
    //     <div ref={containerRef} className="bg-white flex items-center  max-w-[17rem] h-[20rem]">
    //       <p className="font-bold w-full text-center">{record.name}</p>
    //       {/* <Preview data={record} width={dimensions.width} height={dimensions.height} /> */}
    //     </div>
    //   ))}
    //   <div
    //     onClick={createNewTemplate}
    //     className="bg-white relative max-w-[17rem] h-[20rem] flex justify-center items-center cursor-pointer"
    //   >
    //     {/* <div className="absolute  inset-0 bg-white hover:blur-lg"></div> */}

    //     <PlusCircleOutlined
    //       style={{
    //         fontSize: '2rem',
    //         zIndex: 10
    //       }}
    //     />
    //   </div>
    // </div>
  );
};

export default Templates;
