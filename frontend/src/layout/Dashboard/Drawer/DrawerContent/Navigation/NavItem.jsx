import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { handlerActiveItem, useGetMenuMaster } from 'api/menu';

export default function NavItem({ item, level }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const isSelected =
    !!matchPath({ path: item.url, end: false }, pathname) || pathname.startsWith(item.url) || menuMaster.openedItem === item.id;

  useEffect(() => {
    if (matchPath({ path: item.url, end: false }, pathname)) {
      handlerActiveItem(item.id);
    }
  }, [pathname, item.url, item.id]);

  let listItemProps = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} />)
  };

  if (item?.external) {
    listItemProps = {
      component: 'a',
      href: item.url,
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  }

  const Icon = item.icon;
  const itemIcon = Icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : null;

  return (
    <ListItemButton
      {...listItemProps}
      selected={isSelected}
      onClick={() => handlerActiveItem(item.id)}
      sx={{
        pl: drawerOpen ? `${level * 28}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(isSelected && {
          color: theme.palette.primary.main,
          bgcolor: theme.palette.primary.lighter,
          borderRight: `2px solid ${theme.palette.primary.main}`
        })
      }}
    >
      {itemIcon && <ListItemIcon>{itemIcon}</ListItemIcon>}
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ color: isSelected ? theme.palette.primary.main : 'inherit' }}>
            {item.title}
          </Typography>
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired
};
