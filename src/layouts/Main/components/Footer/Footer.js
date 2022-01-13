import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useTheme} from '@mui/material/styles';
import Link from "@mui/material/Link";

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'row', sm: 'row' }}
        >
          <Box
            display={'flex'}
          >
            <Typography
                align={'center'}
                variant={'subtitle1'}
                sx={{fontWeight: 700}}
                color="text.primary"
                gutterBottom
            >
              &copy; 2022, NFP STUDIO
            </Typography>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Link color={"inherit"} underline="hover" href="https://twitter.com/NFP2021" target="_blank">
                <TwitterIcon />
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
