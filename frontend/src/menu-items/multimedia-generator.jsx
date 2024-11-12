import { YoutubeOutlined, PlusCircleOutlined } from '@ant-design/icons';

const icons = { YoutubeOutlined, PlusCircleOutlined };

const multimedia = {
  id: 'group-multimedia',
  title: 'Multimedia',
  type: 'group',
  children: [
    // {
    //   id: 'image',
    //   title: 'Image Generator',
    //   type: 'item',
    //   url: '/generate-image',
    //   icon: icons.PictureOutlined,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'video',
    //   title: 'Video Generator',
    //   type: 'item',
    //   url: '/generate-video',
    //   icon: icons.YoutubeOutlined,
    //   breadcrumbs: false
    // },
    {
      id: 'create',
      title: 'Create New',
      type: 'item',
      url: '/create/new',
      icon: icons.PlusCircleOutlined,
      breadcrumbs: false
    }
  ]
};

export default multimedia;
