import React from 'react'
import { Paper, Grid, Typography, Box } from '@mui/material'
import '../App.css'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
});

const TourCard = ({ tour }) =>
{
    return (


        <Grid item marginY={1} xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src={tour.image}
                        alt="some image" className='img' />
                    <Box paddingX={1}>
                        <Typography variant='subtitle2' component='h2'>
                            {tour.name}

                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <AccessTimeOutlinedIcon sx={{
                                width: 15,
                                height: 15,
                            }} />
                            <Typography variant='body2' component="p" marginLeft={.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                            marginTop={3}>
                            <Rating name="read-only"
                                value={tour.rating}
                                size="small"
                                readOnly
                                precision={0.25} />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                ({tour.numberOfreviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                From C ${tour.price}
                            </Typography>
                        </Box>
                    </Box>

                </Paper>
            </ThemeProvider>
        </Grid>

    );
};

export default TourCard;