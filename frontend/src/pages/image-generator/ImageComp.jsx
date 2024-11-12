import React, { useEffect, useRef, useState } from 'react';
import { Button, MenuItem, Select, TextareaAutosize, ToggleButton, ToggleButtonGroup } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { message } from 'antd';
import SelectVerse from '../../components/selectVerse';
import { useNavigate } from 'react-router';
import { LoadingButton } from '@mui/lab';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const ImageComp = () => {
  const canvasRef = useRef();
  const navigate = useNavigate();
  const [create, setCreate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState({
    width: 0,
    height: 0,
    type: ''
  });
  const [font, setFont] = useState({
    title: {
      size: '',
      color: '#FFFFFF',
      text: ''
    },
    content: {
      size: '',
      color: '#FFFFFF',
      text: ''
    },
    author: {
      size: '',
      color: '#FFFFFF',
      text: ''
    }
  });
  const [bg, setBg] = useState();

  useEffect(() => {
    const drawBackground = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');

      const scaledWidth = aspectRatio.width / 3;
      const scaledHeight = aspectRatio.height / 3;
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;

      ctx.fillStyle = 'black';
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

  const handleChange = (event, val) => {
    console.log(val);
    if (val === 'post') {
      console.log(1);
      setAspectRatio({
        width: 1080,
        height: 1080,
        type: 'post'
      });
    } else if (val === 'reel') {
      console.log(2);
      setAspectRatio({
        width: 1080,
        height: 1920,
        type: 'reel'
      });
    } else if (val === 'video') {
      console.log(3);
      setAspectRatio({
        width: 1920,
        height: 1080,
        type: 'video'
      });
    }
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      if (!aspectRatio || !bg || !font.title || !font.content || !font.author) {
        message.warning({ content: 'Please fill all the fields', duration: 2 });
      }
      const lastResponse = await axios.get('http://127.0.0.1:8080/images/lastId');
      const form = new FormData();

      form.append('name', JSON.stringify(''));
      form.append('title', JSON.stringify(font.title));
      form.append('content', JSON.stringify(font.content));
      form.append('author', JSON.stringify(font.author));
      form.append('size', JSON.stringify(aspectRatio));
      form.append('verseType', JSON.stringify(false));
      form.append('id', lastResponse.data.id);
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
    <div className="bg-white min-h-[80vh] rounded-xl  py-8 flex justify-center flex-col gap-2 items-center">
      {create === null && (
        <>
          <p className="font-bold text-2xl text-blue-500">Generate Image</p>
          <div className="flex gap-2">
            <Button className="w-fit px-2 py-1" variant="contained" color="success" onClick={() => setCreate(true)}>
              Create New
            </Button>
            <Button className="w-fit px-2 py-1" variant="outlined" color="error" onClick={() => setCreate(false)}>
              Select from Existing
            </Button>
          </div>
        </>
      )}
      {create != null && (
        <div className="flex gap-2 items-center">
          <p>Aspect Ratio:</p>
          <ToggleButtonGroup exclusive aria-label="text alignment" value={aspectRatio?.type} onChange={handleChange}>
            <ToggleButton value="post" className="w-20 h-20" aria-label="post">
              <img src="../src/assets/images/aspect-ratio/post.png" />
            </ToggleButton>
            <ToggleButton value="reel" className="w-20 h-20" aria-label="reel">
              <img src="../src/assets/images/aspect-ratio/reel.png" className=" h-full" />
            </ToggleButton>
            <ToggleButton value="video" className="w-20 h-20" aria-label="video">
              <img src="../src/assets/images/aspect-ratio/video.png" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      )}
      {create === true && (
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex gap-2 items-center justify-center flex-wrap w-[60vw]">
            <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
              <p className="text-right w-[10rem]">Title Font:</p>
              <Select
                className="w-28"
                placeholder="Size"
                value={font.title.size}
                onChange={(e) => setFont({ ...font, title: { ...font.title, size: e.target.value } })}
              >
                <MenuItem value={10}>10px</MenuItem>
                <MenuItem value={20}>20px</MenuItem>
                <MenuItem value={30}>30px</MenuItem>
                <MenuItem value={40}>40px</MenuItem>
                <MenuItem value={50}>50px</MenuItem>
                <MenuItem value={60}>60px</MenuItem>
                <MenuItem value={70}>70px</MenuItem>
                <MenuItem value={80}>80px</MenuItem>
                <MenuItem value={90}>90px</MenuItem>
                <MenuItem value={100}>100px</MenuItem>
              </Select>
              <input type="color" onChange={(e) => setFont({ ...font, title: { ...font.title, color: e.target.value } })} />
            </div>
            <TextareaAutosize
              className="w-full rounded-md border p-3 col-span-3"
              onChange={(e) => setFont({ ...font, title: { ...font.title, text: e.target.value } })}
            />
            <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
              <p className="text-right w-[10rem]">Content Font size: </p>
              <Select
                className="w-28"
                value={font.content.size}
                onChange={(e) => setFont({ ...font, content: { ...font.content, size: e.target.value } })}
              >
                <MenuItem value={10}>10px</MenuItem>
                <MenuItem value={20}>20px</MenuItem>
                <MenuItem value={30}>30px</MenuItem>
                <MenuItem value={40}>40px</MenuItem>
                <MenuItem value={50}>50px</MenuItem>
                <MenuItem value={60}>60px</MenuItem>
                <MenuItem value={70}>70px</MenuItem>
                <MenuItem value={80}>80px</MenuItem>
                <MenuItem value={90}>90px</MenuItem>
                <MenuItem value={100}>100px</MenuItem>
              </Select>
              <input type="color" onChange={(e) => setFont({ ...font, content: { ...font.content, color: e.target.value } })} />
            </div>
            <TextareaAutosize
              className="w-full rounded-md border p-3 col-span-3"
              onChange={(e) => setFont({ ...font, content: { ...font.content, text: e.target.value } })}
            />
            <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
              <p className="text-right w-[10rem]">Author Font size: </p>
              <Select
                className="w-28"
                value={font.author.size}
                onChange={(e) => setFont({ ...font, author: { ...font.author, size: e.target.value } })}
              >
                <MenuItem value={10}>10px</MenuItem>
                <MenuItem value={20}>20px</MenuItem>
                <MenuItem value={30}>30px</MenuItem>
                <MenuItem value={40}>40px</MenuItem>
                <MenuItem value={50}>50px</MenuItem>
                <MenuItem value={60}>60px</MenuItem>
                <MenuItem value={70}>70px</MenuItem>
                <MenuItem value={80}>80px</MenuItem>
                <MenuItem value={90}>90px</MenuItem>
                <MenuItem value={100}>100px</MenuItem>
              </Select>
              <input type="color" onChange={(e) => setFont({ ...font, author: { ...font.author, color: e.target.value } })} />
            </div>
            <TextareaAutosize
              className="w-full rounded-md border p-3 col-span-3"
              onChange={(e) => setFont({ ...font, author: { ...font.author, text: e.target.value } })}
            />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <p>Background Image</p>
            <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => {
                  setBg(event.target.files[0]);
                }}
              />
            </Button>
          </div>
          <div className="flex justify-center">
            <canvas ref={canvasRef}></canvas>
          </div>
          <div>
            <LoadingButton loading={loading} variant="contained" color="success" className="w-20 px-2 mr-4" onClick={handleGenerate}>
              Generate
            </LoadingButton>
            <Button variant="contained" color="error" className="w-20 px-2" onClick={() => setCreate(null)}>
              Back
            </Button>
          </div>
        </div>
      )}
      {create === false && <SelectVerse aspectRatio={aspectRatio} handleCreate={(val) => setCreate(val)} />}
    </div>
  );
};

export default ImageComp;
