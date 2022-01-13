import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typed from "react-typed";
import PreviewImg from '../../../../images/preview.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TwitterIcon from "@mui/icons-material/Twitter";

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'} data-aos={isMd ? 'fade-right' : 'fade-up'}>
        <Grid container spacing={4}>
          <Grid item container xs={12} md={12} alignItems={'center'}>
            <Typography
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
            >
              Building Tools
              <br/>
              For{' '}
              <Typography
                  color={'primary'}
                  component={'span'}
                  variant={'inherit'}
              >
                <Typed
                    strings={['Stacks']}
                    typeSpeed={150}
                    loop={true}
                />
              </Typography>
              <br/>
              Community
            </Typography>
          </Grid>
          <Grid item container xs={12} md={12} alignItems={'center'}>
            <Button
                variant="contained"
                color="primary"
                component="a"
                href={"https://app.nfpstudio.io"}
                size="large"
                fullWidth={isMd ? false : true}
                startIcon={<DashboardIcon/>}
            >
              Dashboard
            </Button>
            <Box
                marginTop={{xs: 2, sm: 0}}
                marginLeft={{sm: 2}}
                width={{xs: '100%', md: 'auto'}}
            >
              <Button
                  component={'a'}
                  href={'https://twitter.com/NFP2021'}
                  target="blank"
                  variant="outlined"
                  color="primary"
                  size="large"
                  marginTop={{xs: 2, sm: 0}}
                  marginLeft={{sm: 2}}
                  fullWidth={isMd ? false : true}
                  startIcon={<TwitterIcon/>}
              >
                Twitter
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={PreviewImg}
          alt="..."
          effect="blur"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
