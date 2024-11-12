import {  YoutubeOutlined } from '@ant-design/icons';

const filemanager = {
  id: 'group-filemanager',
  title: 'File Manager',
  type: 'group',
  children: [
    //   {
    //     id: 'item-images',
    //     title: 'Images',
    //     type: 'item',
    //     url: '/images',
    //     breadcrumbs: false
    //   },
    {
      id: 'item-videos',
      title: 'Videos',
      type: 'item',
      icon: YoutubeOutlined,
      url: '/videos',
      breadcrumbs: false
    }
  ]
};

export default filemanager;
