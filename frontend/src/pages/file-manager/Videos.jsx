import { Button, message, Image, Modal, Popconfirm, Checkbox } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useRef, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player/lazy';
import './Video.css';
import { useLocation, useNavigate } from 'react-router';

const Videos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});

  React.useEffect(() => {
    if (!isModalOpen) {
      setPlaying(false);
    }
  }, [isModalOpen]);

  const fetchData = async (project_id) => {
    try {
      const id = location?.state?.id?.toString() || project_id;
      const response = await axios.get(`${SERVER_ADDRESS}/projects/videos/${id}`);
      if (response.status === 200) {
        setData(response.data);
      } else {
        message.error({ content: 'Internal Server Error', duration: 2 });
      }
    } catch (err) {
      console.log(err);
      navigate('/videos');
    }
  };

  useEffect(() => {
    // console.log(location.state)
    // if (!location.state?.data) {
    //   fetchData();
    // } else {
    //   const val = location.state.data;
    //   setData(val);
    // }
    if (location?.state?.id) {
      fetchData(location.state.id);
    } else {
      navigate('/videos');
    }
  }, []);

  const handleView = (vid) => {
    setIsModalOpen(true);
    setCurrentVideo(vid);
    setPlaying(true);
  };

  const handleVideoDelete = async (vid, len) => {
    try {
      const response = await axios.delete(`${SERVER_ADDRESS}/videos/delete`, {
        headers: {
          id: vid.id,
          projectid: data.id,
          name: vid.name,
          length: len
        }
      });
      if (response.status === 200) {
        message.success({ content: 'Video deleted Successfully', duration: 2 });
        data.videos.length === 1 ? navigate('/videos') : setData({ ...data, videos: data.videos.filter((val) => val.id !== vid.id) });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to delete video! Please try later', duration: 2 });
    }
  };

  const handleMultipleDelete = async () => {
    try {
      const names = data.videos.filter((val) => selected.includes(val.id)).map((val) => val.name);
      // return;
      const response = await axios.delete(`${SERVER_ADDRESS}/videos/deleteVideos`, {
        headers: {
          data: JSON.stringify({
            names: names,
            ids: selected,
            titleid: data.id,
            allvideos: data.videos.length === selected.length
          })
        }
      });
      if (response.status === 200) {
        console.log(selected.length === data.videos.length);
        message.success({ content: 'Selected Videos Deleted Successfully', duration: 2 });
        setSelected([]);
        data.videos.length === selected.length ? navigate('/videos') : fetchData(data.id);
      } else {
        throw new Error('Internal Server Error');
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to delete! Please try again...', duration: 2 });
    }
  };

  return (
    <div className="min-h-full p-4 w-full rounded-xl bg-white flex flex-col items-center ">
      <div className="flex justify-between w-full items-center h-20 px-3">
        <p className="text-2xl text-blue-600 font-bold pl-5">Videos</p>
        {selected.length > 0 && (
          <div className="flex gap-2">
            <Button onClick={() => setSelected([])}>Unselect All</Button>
            <Popconfirm
              title="Delete selected video"
              description="Are you sure to delete these videos?"
              placement="left"
              onConfirm={handleMultipleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button className="" type="default" danger>
                <DeleteOutlined /> Delete Selected
              </Button>
            </Popconfirm>
          </div>
        )}
      </div>
      <div className="min-h-full p-4 w-full rounded-xl bg-white flex flex-col gap-6 items-center">
        {/* <div className="text-2xl font-bold text-blue-600">{videos.title}</div> */}
        <div className="flex gap-3 flex-wrap justify-start w-full px-4">
          <Checkbox.Group value={selected} onChange={(val) => setSelected([...val])}>
            {data && data.videos?.length > 0 ? (
              data.videos.map((vid, index) => (
                <div key={index} className="w-36 min-h-36 p-2 border flex flex-col items-center group relative">
                  <Checkbox value={vid.id} className="z-1 px-2 py-1 absolute left-1 top-1" />
                  <div className="w-full flex justify-end mb-2 opacity-0 group-hover:opacity-100">
                    <Popconfirm
                      title="Delete video"
                      description="Are you sure to delete this video?"
                      onConfirm={() => handleVideoDelete(vid, data.videos.length)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button className="w-6 h-6" type="default" danger>
                        <DeleteOutlined />
                      </Button>
                    </Popconfirm>
                  </div>
                  <div className="w-[60%] h-[60%] mb-2">
                    <Image
                      className="content-center cursor-pointer"
                      style={{ minWidth: '5rem', minHeight: '5rem' }}
                      src="../src/assets/images/icons/video.png"
                      preview={false}
                      onClick={() => handleView(vid)}
                    />
                  </div>
                  <p className="m-0 text-center mb-2 text-ellipsis whitespace-nowrap overflow-hidden w-full px-2">{vid.name}</p>
                  <div className="w-full h-auto flex justify-between px-2">
                    <p className="text-[10px] italic text-black">Type: {vid.name.split('.')[1]}</p>
                    <p className="text-[10px] italic text-gray-400">{vid.created_at}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full justify-center">
                <p className="text-center text-xl ">{data.videos?.length}No Videos available...</p>
              </div>
            )}
          </Checkbox.Group>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          style={{}}
          title={currentVideo?.title}
          open={isModalOpen}
          footer=""
          onCancel={() => {
            setIsModalOpen(false);
            setCurrentVideo({});
            setPlaying(false);
          }}
        >
          <div style={{ backgroundColor: 'black' }} className="video-container mt-6">
            <ReactPlayer
              key={isModalOpen ? currentVideo?.id : null}
              playing={isModalOpen}
              className="videoplayer"
              url={isModalOpen ? `${SERVER_ADDRESS}/public/videos/${data.id}/${currentVideo?.name}` : ''}
              controls
              style={{ width: '30rem', height: 'auto' }}
            />
          </div>
        </Modal>
      )}

      {/* <div className="flex flex-wrap gap-2 pl-2 pt-2 justify-start w-full">
        {searchData ? (
          searchData.map(
            (data) =>
              data.videos.length > 0 && (
                <div
                  className="border w-40 h-40 flex flex-col items-center gap-1 cursor-pointer"
                  key={data.id}
                  onClick={() => handleProject(data)}
                >
                  <img src={folderIcon} className="w-[70%] h-[70%]" />
                  <p className="m-0 text-center text-ellipsis whitespace-nowrap overflow-hidden w-full px-2">{data.title}</p>
                  <div className="w-full h-auto flex justify-end px-2">
                    <p className="text-[10px] italic text-gray-400">{data.created_at}</p>
                  </div>
                </div>
              )
          )
        ) : (
          <div className=" mt-4 flex justify-center w-full">
            <p className="text-md ">Projects Empty..</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Videos;
