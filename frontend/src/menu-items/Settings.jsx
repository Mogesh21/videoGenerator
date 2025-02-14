import { SettingsOutlined, ArticleOutlined } from '@mui/icons-material';

const Settings = {
  id: 'group-settings',
  title: 'Settings',
  type: 'group',
  children: [
    // {
    //   id: 'item-settings',
    //   title: 'Style Preferences',
    //   type: 'item',
    //   icon: SettingsOutlined,
    //   url: '/settings/preferences',
    //   breadcrumbs: false
    // },
    {
      id: 'item-templates',
      title: 'Templates',
      type: 'item',
      icon: ArticleOutlined,
      url: '/settings/templates',
      breadcrumbs: false
    }
  ]
};

export default Settings;
