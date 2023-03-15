import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography, Paper } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation';
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordion'
import BasicModal from '../components/Modal';

const Tour = () =>
{
    return (
        <Container sx={{ width: { xs: 400, md: 900 } }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore The World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: { xs: "block", md: "flex" } }}>

                <img sx={{ width: { xs: 300, sm: 550 }, height: 325 }}
                    src="https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg "
                    alt="" height={325} width={550} >
                </img>

                <ImageCollage />

            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    eget arcu dictum varius duis at consectetur lorem donec
                    massa sapien faucibus et molestie ac feugiat sed lectus
                    vestibulum mattis ullamcorper velit sed ullamcorper
                    morbi tincidunt ornare massa eget egestas purus viverra
                    accumsan in nisl nisi scelerisque eu ultrices vitae
                </Typography>

            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={1.5}>
                    Frequently asked questions
                </Typography>
                <CustomizedAccordions />


            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>

                    <BasicModal />
                </BottomNavigation>
            </Paper>

        </Container>
    )
}

export default Tour