import { SettingsOutlined } from '@mui/icons-material';

const Settings = {
  id: 'group-settings',
  title: 'Settings',
  type: 'group',
  children: [
    {
      id: 'item-setiings',
      title: 'Style Preferences',
      type: 'item',
      icon: SettingsOutlined,
      url: '/settings/preferences',
      breadcrumbs: false
    }
  ]
};

export default Settings;
