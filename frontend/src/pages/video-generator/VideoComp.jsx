import { useRef, useState } from 'react';
import { CloseCircleFilled, PlusOutlined } from '@ant-design/icons';
// import { Button, Input, message } from 'antd';
import { SERVER_ADDRESS } from '../../config/AppConfig';
import axios from 'axios';
import { Button } from 'antd';
import ReactPlayer from 'react-player/lazy';
import Input from '@mui/material/Input';
import GenerateVideo from 'components/GenerateVideo';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';

const VideoComp = () => {
  const navigate = useNavigate();
  const [audio, setAudio] = useState();
  const [fileList, setFileList] = useState([]);
  const [imageValues, setImageValues] = useState([]);
  const audioUrl = useRef(null);
  const [title, setTitle] = useState('');
  const [generate, setGenerate] = useState(false);
  const [video, setVideo] = useState('');

  const handleTimeInput = (value, index) => {
    const values = imageValues;
    values[index] = value;
    setImageValues([...values]);
  };

  const handleImageRemove = (index) => {
    const filteredImages = fileList.filter((_, idx) => index !== idx);
    const filteredValues = imageValues.filter((_, idx) => index !== idx);
    setFileList(filteredImages);
    console.log(filteredImages, filteredValues);
    setImageValues(filteredValues);
  };

  const handleGenerate = async () => {
    try {
      setGenerate(true);
      setVideo('');
      // if (!audio) message.error({ content: 'Please upload the audio file', duration: 2 });
      // else if (fileList.length === 0) message.error({ content: 'Please add the Images', duration: 2 });
      // else if (fileList.length !== imageValues.length) message.warning({ content: 'Please give duration for all images', duration: 2 });
      {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('Images', JSON.stringify(fileList));
        formData.append('Values', JSON.stringify(imageValues));

        if (audio) formData.append('audio', audio);
        fileList.forEach((val) => {
          if (val.originFileObj) formData.append('image', val.originFileObj);
        });

        const response = await axios.post(`${SERVER_ADDRESS}/videos/create`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response.status === 200) {
          console.log(response);
          setVideo(response.data.video);
          navigate('/videos');
        } else {
          // message.error({ content: response.data.err, duration: 2 });
        }
      }
    } catch (err) {
      console.log(err);
      // message.error({
      //   content: 'Internal Server Error',
      //   duration: 2
      // });
    } finally {
      setGenerate(false);
    }
  };

  return (
    <div className="bg-white select-none rounded-xl ">
      {true ? (
        <div className=" min-h-screen h-inherit w-full flex flex-col items-center gap-4">
          <TextField label="Title" className="w-2/6 mt-10" variant="outlined" onChange={(e) => setTitle(e.target.value)} value={title} />
          <div className="w-3/6 flex flex-col gap-3 items-center relative">
            {0 ? (
              <Input
                className="h-14 text-[1.2rem] text-[#0066FF] transition-all"
                placeholder="Audio url"
                ref={audioUrl}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     const inputElement = e.target as HTMLInputElement;
                //     const audioExtensions = [".mp3", ".wav", ".ogg", ".aac", ".flac"];
                //     const valid = audioExtensions.some((ext) => inputElement.value.endsWith(ext));
                //     if (valid) setAudio(inputElement.value);
                //     else {
                //       audioUrl.current?.input?.classList?.add("animate-shake");
                //       audioUrl.current?.input?.classList?.add("animate-shake text-red-400");
                //       setTimeout(() => {
                //         audioUrl.current?.input?.classList.remove("animate-shake text-[#0066FF]");
                //         setAudio("");
                //       }, 500);
                //     }
                //   }
                // }}
              />
            ) : (
              <div className="flex justify-center w-full">
                <input
                  type="file"
                  id="audioUpload"
                  accept="audio/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      setAudio(e.target.files[0]);
                    }
                  }}
                  multiple
                />
                <label
                  htmlFor="audioUpload"
                  className="cursor-pointer text-white bg-blue-600  h-14 w-full rounded-lg flex flex-col items-center justify-center"
                >
                  Upload Audio
                </label>
              </div>
            )}
            {audio && <audio src={URL.createObjectURL(audio)} controls></audio>}
          </div>
          <div className="flex items-center flex-col">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              accept=".png, .jpeg, .jpg"
              onChange={(e) => {
                if (e.target.files) {
                  const newFileList = Array.from(e.target.files).map((file) => ({
                    uid: String(Math.floor(Math.random() * 100000)),
                    name: file.name,
                    status: 'done',
                    url: URL.createObjectURL(file),
                    thumbUrl: URL.createObjectURL(file),
                    originFileObj: file
                  }));
                  setFileList((prev) => [...prev, ...newFileList]);
                }
              }}
              multiple
            />
            <label htmlFor="fileUpload" className="cursor-pointer border h-20 w-20 rounded-lg flex flex-col items-center justify-center">
              <PlusOutlined />
            </label>
            {fileList.length === 0 && <p className="text-blue-500 font-bold py-2">Upload Images</p>}
          </div>
          <div className=" min-w-[220px] flex flex-wrap justify-center gap-5">
            {fileList &&
              fileList.map((file, index) => (
                <div key={file.uid} className="flex justify-between relative items-center backdrop-blur-xl rounded-xl border p-2">
                  <img
                    src={file.thumbUrl || file.url}
                    alt={file.name}
                    style={{ width: 100, height: 100, objectFit: 'cover', marginRight: 10 }}
                  />
                  <div className="flex p-3">
                    <Input
                      className="h-10 w-14 border pl-2 content-center text-center"
                      style={{ borderRadius: '5px 0 0 5px' }}
                      onChange={(e) => handleTimeInput(parseInt(e.target.value), index)}
                    />
                    <span className="m-0 bg-blue-600 block px-2 text-center text-white content-center rounded-r-lg">Sec</span>
                  </div>
                  <CloseCircleFilled
                    className="absolute top-1 right-1 text-red-500 cursor-pointer"
                    onClick={() => handleImageRemove(index)}
                  />
                </div>
              ))}
          </div>
          {audio && fileList.length > 0 && (
            <Button onClick={handleGenerate} loading={generate} color="primary" className="w-30 h-12 rounded-xl px-4 mb-4 shadow-md">
              Generate
            </Button>
          )}
          {video && (
            <div className="flex flex-col gap-2 mt-4 mb-8 w-[70vw] items-center ">
              <ReactPlayer src={video} controls className="bg-black w-3/6 aspect-video" />
              <a href={video} target="_blank" download={true} className="decoration-none">
                <button className="w-full h-12 bg-green-500 text-white rounded-xl px-4 mb-4 shadow-md">Download</button>
              </a>
            </div>
          )}
        </div>
      ) : (
        <GenerateVideo />
      )}
    </div>
  );
};

export default VideoComp;
