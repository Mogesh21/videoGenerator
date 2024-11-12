import { LoadingButton } from '@mui/lab';
import { MenuItem, Select } from '@mui/material';
import { message } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useState } from 'react';

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [font, setFont] = useState({
    title_size: '',
    title_color: '#FFFFFF',
    content_size: '',
    content_color: '#FFFFFF',
    credit_size: '',
    credit_color: '#FFFFFF'
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
    }
  };
  return (
    <div>
      <div className="flex justify-center items-start flex-col gap-2 w-[40vw]">
        <div className="flex gap-2 items-center justify-center flex-wrap ">
          <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
            <p className="text-right w-[10rem]">Title Font:</p>
            <Select
              className="w-28"
              placeholder="Size"
              value={font.title_size}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, title_size: e.target.value });
              }}
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

            <input
              type="color"
              value={font.title_color}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, title_color: e.target.value });
              }}
            />
          </div>
          <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
            <p className="text-right w-[10rem]">Content Font size: </p>
            <Select
              className="w-28"
              value={font.content_size}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, content_size: e.target.value });
              }}
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
            <input
              type="color"
              value={font.content_color}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, content_color: e.target.value });
              }}
            />
          </div>
          <div className="grid grid-cols-3 gap-3 justify-items-center place-items-center">
            <p className="text-right w-[10rem]">Author Font size: </p>
            <Select
              className="w-28"
              value={font.credit_size}
              onChange={(e) => {
                setHidden(true);
                setFont({ ...font, credit_size: e.target.value });
              }}
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
          <div className='w-full flex justify-center'>
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
