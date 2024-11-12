import { DeleteOutlined } from '@ant-design/icons';
import { Button, Image, message, Popconfirm } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      console.log(location.state.id);
      const response = await axios.get(`${SERVER_ADDRESS}/projects/${location.state.id}`);
      console.log(response.data);
      if (response.status === 200) setData(response.data);
    } catch (err) {
      console.log(err);
      navigate('/images');
      //   message.error({ content: 'Internal Server Error', duration: 2 });
    }
  };

  useEffect(() => {
    if (!location.state?.data) {
      fetchData();
    } else {
      const val = location.state.data;
      setData(val);
    }
  }, []);

  const handleImageDelete = async (img, len) => {
    console.log(img);
    try {
      const response = await axios.delete(`${SERVER_ADDRESS}/images/delete`, {
        headers: {
          id: img.id,
          projectid: img.title_id,
          name: img.name,
          length: len
        }
      });
      if (response.status === 200) {
        message.success({ content: 'Image deleted Successfully', duration: 2 });
        len === 1 ? navigate('/images') : fetchData();
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to delete Image! Please try later', duration: 2 });
    }
  };

  return (
    <div className="min-h-full p-4 w-full rounded-xl bg-white flex flex-col gap-6 items-center">
      <div className="text-2xl font-bold text-blue-600">{data.title}</div>
      <div className="flex gap-3 flex-wrap justify-start w-full px-4">
        {data && data.images?.length > 0 ? (
          data.images.map((img, index) => (
            <div className="w-36 min-h-36 p-2 border flex flex-col items-center group">
              <div className="w-full flex justify-end mb-2 opacity-0 group-hover:opacity-100">
                <Popconfirm
                  title="Delete Image"
                  description="Are you sure to delete this image?"
                  onConfirm={() => handleImageDelete(img, data.images.length)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="w-6 h-6" type="default" danger>
                    <DeleteOutlined />
                  </Button>
                </Popconfirm>
              </div>
              <div className="w-[80%] h-[80%] mb-2">
                <Image
                  key={index}
                  className="content-center"
                  style={{ minWidth: '5rem', minHeight: '5rem' }}
                  src={`${SERVER_ADDRESS}/public/images/${data.id}/${img.name}`}
                />
              </div>
              <div className="w-full h-auto flex justify-between px-2">
                <p className="text-[10px] italic text-black">Type: {img.name.split('.')[1]}</p>
                <p className="text-[10px] italic text-gray-400">{img.created_at}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex w-full justify-center">
            <p className="text-center text-xl ">No Images available...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
