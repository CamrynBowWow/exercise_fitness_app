import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
	return (
		<Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position='relative' p='20px'>
			<Typography color='#FF2625' fontWeight='600' fontSize='26px' sx={{ cursor: 'default' }}>
				Fitness Club
			</Typography>
			<Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' }, cursor: 'default' }} mb='23px' mt='30px'>
				Sweat, Smile <br /> And Repeat
			</Typography>
			<Typography fontSize='22px' lineHeight='35px' mb={4} sx={{ cursor: 'default' }}>
				Check out the most effective exercises
			</Typography>
			<Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#FF2625', padding: '10px' }}>
				Explore Exercises
			</Button>
			{/* <Stack>
				<a
					href='#exercises'
					style={{
						marginTop: '45px',
						textDecoration: 'none',
						width: '200px',
						textAlign: 'center',
						background: '#FF2625',
						padding: '14px',
						fontSize: '22px',
						textTransform: 'none',
						color: 'white',
						borderRadius: '4px',
					}}
				>
					Explore Exercises
				</a>
			</Stack> */}
			<Typography fontWeight={600} color='#FF2625' sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' }, cursor: 'default' }} fontSize='200px'>
				Exercise
			</Typography>
			<img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
		</Box>
	);
};

export default HeroBanner;
