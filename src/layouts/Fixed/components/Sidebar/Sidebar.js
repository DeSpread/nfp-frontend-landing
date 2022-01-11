import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

const Sidebar = ({ pages, open, variant, onClose }) => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 256,
          top: { xs: 0, md: 71 },
          height: { xs: '100%', md: 'calc(100% - 71px)' },
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
          paddingTop: { xs: 2, sm: 3 },
        }}
      >
        <SidebarNav pages={pages} onClose={onClose} />
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
};

export default Sidebar;
