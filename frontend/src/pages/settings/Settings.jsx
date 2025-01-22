import { LoadingButton } from '@mui/lab';
import { message, Input, Select, Checkbox } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useState } from 'react';
// import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap');

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [font, setFont] = useState({
    font_style: '',
    title_size: '',
    title_color: '#FFFFFF',
    title_style: '',
    content_size: '',
    content_color: '#FFFFFF',
    content_style: '',
    credit_size: '',
    credit_color: '#FFFFFF',
    credit_style: ''
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/settings/`);

      if (response.status === 200) {
        if (response.data) setFont(response.data);
      } else {
        throw new Error('Unable to fetch Data. Refresh Again...');
      }
    } catch (err) {
      console.log(err);
      message.error({ content: err.message, duration: 2 });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async () => {
    console.log(font);
    const numberRegex = /^[0-9]{1,3}$/;
    if (!numberRegex.test(font.title_size) || parseInt(font.title_size) < 0 || parseInt(font.title_size) > 100) {
      message.error({ content: 'Invalid value for title font size. Size must be in range [1 - 100]' });
      return;
    } else if (!numberRegex.test(font.content_size) || font.content_size < 0 || font.content_size > 100) {
      message.error({ content: 'Invalid value for content font size. Size must be in range [1 - 100]' });
      return;
    } else if (!numberRegex.test(font.credit_size) || font.credit_size < 0 || font.credit_size > 100) {
      message.error({ content: 'Invalid value for Author font size. Size must be in range [1 - 100]' });
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(`${SERVER_ADDRESS}/settings/update`, font);
      if (response.status === 200) {
        message.success({ content: 'Preferences updated Successfully', duration: 2 });
      } else {
        message.error({ content: 'Unable to update! Please try again...', duration: 2 });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Internal Server Error', duration: 2 });
    } finally {
      setLoading(false);
      setHidden(false);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-start flex-col gap-2 w-[60vw]">
        <div className="flex gap-2 items-center flex-wrap ">
          <div className="flex gap-2 items-center w-full">
            <span className="w-[10rem]">Font Style:</span>
            <Select
              value={font.font_style}
              className=" ml-1 w-[10rem]"
              onChange={(val) => {
                setHidden(true);
                setFont({ ...font, font_style: val });
              }}
            >
              <Select.Option value="Noto Sans" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                Noto Sans
              </Select.Option>
              <Select.Option value="Kanit" style={{ fontFamily: "'Kanit', sans-serif" }}>
                Kanit
              </Select.Option>
              <Select.Option value="Noto Serif" style={{ fontFamily: "'Noto Serif', serif" }}>
                Noto Serif
              </Select.Option>
              <Select.Option value="Playfair" style={{ fontFamily: "'Playfair Display', serif" }}>
                Playfair
              </Select.Option>
              <Select.Option value="Poppins" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Poppins
              </Select.Option>
              <Select.Option value="Roboto" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Roboto
              </Select.Option>
              <Select.Option value="SourGummy" style={{ fontFamily: "'Sour Gummy', cursive" }}>
                Sour Gummy
              </Select.Option>
            </Select>
          </div>
          <div className="flex gap-3 justify-items-center place-items-center">
            <p className=" w-[10rem]">Title Font:</p>
            <Input
              placeholder="Enter size in px"
              className="w-[5rem]"
              value={font.title_size}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, title_size: e.target.value });
              }}
            />
            <Select
              style={{ width: '10rem' }}
              value={font.title_style}
              onChange={(val) => {
                setHidden(true);
                setFont({ ...font, title_style: val });
              }}
            >
              <Select.Option value="normal">normal</Select.Option>
              <Select.Option value="bold">Bold</Select.Option>
              <Select.Option value="bolditalic">Bold + Italic</Select.Option>
              <Select.Option value="italic">Italic</Select.Option>
            </Select>
            <input
              type="color"
              value={font.title_color}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, title_color: e.target.value });
              }}
            />
          </div>
          <div className="flex gap-3 justify-items-center place-items-center">
            <p className=" w-[10rem]">Content Font size: </p>
            <Input
              placeholder="Enter size in px"
              className="w-[5rem]"
              value={font.content_size}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, content_size: e.target.value });
              }}
            />
            <Select
              style={{ width: '10rem' }}
              value={font.content_style}
              onChange={(val) => {
                setHidden(true);
                setFont({ ...font, content_style: val });
              }}
            >
              <Select.Option value="normal">normal</Select.Option>
              <Select.Option value="bold">Bold</Select.Option>
              <Select.Option value="bolditalic">Bold + Italic</Select.Option>
              <Select.Option value="italic">Italic</Select.Option>
            </Select>
            <input
              type="color"
              value={font.content_color}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, content_color: e.target.value });
              }}
            />
          </div>
          <div className="flex gap-3 justify-items-center place-items-center">
            <p className=" w-[10rem]">Author Font size: </p>
            <Input
              placeholder="Enter size in px"
              className="w-[5rem]"
              value={font.credit_size}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, credit_size: e.target.value });
              }}
            />
            <Select
              style={{ width: '10rem' }}
              value={font.credit_style}
              onChange={(val) => {
                setHidden(true);
                setFont({ ...font, credit_style: val });
              }}
            >
              <Select.Option value="normal">normal</Select.Option>
              <Select.Option value="bold">Bold</Select.Option>
              <Select.Option value="bolditalic">Bold + Italic</Select.Option>
              <Select.Option value="italic">Italic</Select.Option>
            </Select>
            <input
              type="color"
              value={font.credit_color}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, credit_color: e.target.value });
              }}
            />
          </div>
        </div>
        {hidden && (
          <div className="ml-[11rem] flex justify-center">
            <LoadingButton loading={loading} variant="contained" color="success" className="w-20 px-2 mr-4" onClick={handleSave}>
              Save
            </LoadingButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
