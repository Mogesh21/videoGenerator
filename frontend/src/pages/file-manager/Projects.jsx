import { Button, Input, message, Select } from 'antd';
import axios from 'axios';
import { SERVER_ADDRESS } from 'config/AppConfig';
import React, { useEffect, useRef, useState } from 'react';
import folderIcon from '../../assets/images/icons/5994710.png';
import { useNavigate } from 'react-router';
import { ArrowUpOutlined } from '@ant-design/icons';

const Projects = () => {
  const navigate = useNavigate();
  const sortRef = useRef();
  const [sort, setSort] = useState('ASC');
  const [projects, setProjects] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${SERVER_ADDRESS}/projects/videos`);
      if (response.status === 200) {
        const data = response.data.sort((a, b) => {
          const first = Math.floor(new Date(a.created_at).getTime() / 1000);
          const second = Math.floor(new Date(b.created_at).getTime() / 1000);
          return first - second;
        });
        setProjects(data);
        setSearchData(data);
      } else {
        message.error({ content: 'Internal Server Error', duration: 2 });
      }
    } catch (err) {
      console.log(err);
      message.error({ content: 'Internal Server Error', duration: 2 });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProject = (data) => {
    navigate(`/videos/${data.id}`, { state: { data: data } });
  };

  const handleSearch = (val) => {
    console.log(val);
    const filterData = projects.filter((data) => data.title.toLowerCase().includes(val.toLowerCase()));
    setSearchData(filterData);
  };

  const handleSort = () => {
    if (sort === 'ASC') {
      const data = searchData.reverse();
      setSort('DESC');
      setSearchData(data);
    } else {
      const data = searchData.reverse();
      setSort('ASC');
      setSearchData(data);
    }
    sortRef.current.style.transform = sortRef.current.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
  };

  return (
    <div className="min-h-full p-4 w-full rounded-xl bg-white flex flex-col items-center ">
      <div className="flex justify-between w-full items-center h-20 px-3">
        <div>Projects</div>
        <div className="flex gap-2">
          <Button className="justify-between" onClick={handleSort}>
            <ArrowUpOutlined ref={sortRef} className="transition-rotate duration-300" />
            Sort By {sort}
          </Button>
          <Input style={{ width: '14rem' }} placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 pl-2 pt-2 justify-start w-full">
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
                  <p className="m-0 text-center text-ellipsis whitespace-nowrap overflow-hidden w-full px-2">{data.name}</p>
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
      </div>
    </div>
  );
};

export default Projects;
