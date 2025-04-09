import { Button, message, Image, Modal, Popconfirm, Checkbox, Breadcrumb } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useRef, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player/lazy';
import './Video.css';
import navigation from '../../menu-items/index';
import JSZip from 'jszip';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Videos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});
  const items = [
    // {
    //   title: <Link to="/projects">Projects</Link>
    // },
    {
      title: 'Videos'
    }
    // {
    //   title: data?.name
    // }
  ];

  React.useEffect(() => {
    if (!isModalOpen) {
      setPlaying(false);
    }
  }, [isModalOpen]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/videos`);
      if (response.status === 200) {
        const formattedData = response.data.map((val) => {
          const options = { year: '2-digit', month: 'short', day: '2-digit' };
          const formattedDate = new Date(val.created_at).toLocaleDateString('en-GB', options)?.replace(',', '')?.toUpperCase();
          return {
            ...val,
            created_at: formattedDate
          };
        });
        setData(formattedData);
      } else {
        message.error({ content: 'Internal Server Error', duration: 2 });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleView = (vid) => {
    setIsModalOpen(true);
    setCurrentVideo(vid);
    setPlaying(true);
  };

  const handleVideoDelete = async (vid) => {
    try {
      const response = await axios.delete(`${SERVER_ADDRESS}/videos`, {
        headers: {
          id: vid.id,
          name: vid.name
        }
      });
      if (response.status === 200) {
        message.success({ content: 'Video deleted Successfully', duration: 2 });
        fetchData();
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to delete video! Please try later', duration: 2 });
    }
  };

  const handleMultipleDelete = async () => {
    try {
      const names = data.filter((val) => selected.includes(val.id)).map((val) => val.name);
      // return;
      const response = await axios.delete(`${SERVER_ADDRESS}/videos/deleteVideos`, {
        headers: {
          data: JSON.stringify({
            names: names,
            ids: selected
          })
        }
      });
      if (response.status === 200) {
        message.success({ content: 'Selected Videos Deleted Successfully', duration: 2 });
        fetchData();
        setSelected([]);
      } else {
        throw new Error('Internal Server Error');
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Unable to delete! Please try again...', duration: 2 });
    }
  };

  const handleDownload = async () => {
    const selectedVideos = data.filter((val) => selected.includes(val.id));
    const urls = selectedVideos.map((video) => `${SERVER_ADDRESS}/public/videos/${video.name}`);
    const promises = urls.map(async (url) => {
      const res = await fetch(url);
      const blob = await res.blob();
      return blob;
    });

    const files = await Promise.all(promises);
    const zip = new JSZip();
    const videos = zip.folder('Interview bix videos');
    files.forEach((file, index) => {
      videos.file(`${selectedVideos[index].name}.mp4`, file);
    });

    const zipFile = await videos.generateAsync({ type: 'blob' });

    const a = document.createElement('a');

    a.download = 'Interviewbix videos';

    a.href = URL.createObjectURL(zipFile);

    document.body.appendChild(a);
    a.style.display = 'none';
    a.click();
    a.remove();
  };

  return (
    <div className="min-h-full p-4 w-full rounded-xl bg-white flex flex-col items-center ">
      <div className="flex justify-between w-full items-center h-20 px-3">
        <p className="text-2xl text-blue-600 font-bold pl-5">Videos</p>
        <div className="flex gap-2">
          <Button onClick={() => setSelected(data.map((val) => val.id))}>Select All</Button>
          {selected.length > 0 && (
            <div className="flex gap-2">
              <Button onClick={handleDownload}>Download</Button>
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
      </div>
      <div className="min-h-full p-4 w-full rounded-xl bg-white flex flex-col gap-6 items-center">
        <div className="flex gap-3 flex-wrap justify-start w-full px-4">
          <Checkbox.Group value={selected} className='gap-3' onChange={(val) => setSelected([...val])}>
            {data.length > 0 ? (
              data.map((vid, index) => (
                <div key={index} className="w-36 min-h-36 p-2 border flex flex-col items-center group relative">
                  <Checkbox value={vid.id} className="z-1 px-2 py-1 absolute left-1 top-1" />
                  <div className="w-full flex justify-end mb-2 opacity-0 group-hover:opacity-100">
                    <Popconfirm
                      title="Delete video"
                      description="Are you sure to delete this video?"
                      onConfirm={() => handleVideoDelete(vid)}
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
                      src="../../src/assets/images/icons/video.png"
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
                <p className="text-center text-xl ">No Videos available...</p>
              </div>
            )}
          </Checkbox.Group>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          style={{}}
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
              url={isModalOpen ? `${SERVER_ADDRESS}/public/videos/${currentVideo?.name}` : ''}
              controls
              style={{ width: '30rem', height: 'auto' }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Videos;
