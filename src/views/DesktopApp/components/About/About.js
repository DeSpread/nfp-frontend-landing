import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StacksIcon from '../../../../images/icon_stacks.svg'
import CommunityIcon from '../../../../images/icon_community.svg'
import ToolIcon from '../../../../images/icon_tool.svg'

const About = () => {
  return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={100}
                data-aos-offset={100}
                data-aos-duration={600}
            >
              <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
              >
                <Box sx={{ marginBottom: 2 }}>
                  <img
                      width={60}
                      height={60}
                      src={StacksIcon}
                      alt={'Stacks'}
                      loading={'lazy'}/>
                </Box>
                <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{fontWeight: 900}}
                    align={'center'}
                >
                  For Stacks community
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={100}
                data-aos-offset={100}
                data-aos-duration={600}
            >
              <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
              >
                <Box sx={{ marginBottom: 2 }}>
                  <img
                      width={60}
                      height={60}
                      src={CommunityIcon}
                      alt={'Community'}
                      loading={'lazy'}/>
                </Box>
                <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{fontWeight: 900}}
                    align={'center'}
                >
                  Focus on community needs
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={100}
                data-aos-offset={100}
                data-aos-duration={600}
            >
              <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
              >
                <Box sx={{ marginBottom: 2 }}>
                  <img
                      width={60}
                      height={60}
                      src={ToolIcon}
                      alt={'Tool'}
                      loading={'lazy'}/>
                </Box>
                <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{fontWeight: 900}}
                    align={'center'}
                >
                  Build tool
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
};

export default About;
