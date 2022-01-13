import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material/styles';
import Logo from './logo.svg'
import {Typography} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        alignItems="center"
        justify="center"
        href="/"
        title="NFP STUDIO"
      >
        <Box
          component={'img'}
          src={Logo}
          height={42}
          width={42}
        />
        <Typography variant={'h6'} sx={{ fontWeight: 900 }} color={'text.primary'} marginLeft={1.5}>
          NFP STUDIO
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://app.nfpstudio.io"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            Dashboard
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
