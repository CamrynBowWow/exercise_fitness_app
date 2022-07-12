import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import PeenCorpLightGray from '../assets/images/PeenCorpLightGray.png';

const Footer = () => {
	return (
		<Box mt='80px' width='100%' pt='1px' pb='15px' bgcolor='#D3D3D3'>
			<Stack gap='20px' alignItems='center' px='40px' pt='24px'>
				<img src={PeenCorpLightGray} alt='Peen Corp' width='310px' height='100px' />
				<Typography variant='h6' pb='10px' mt='5px' fontWeight={500}>
					Made By Camryn Bowden <br /> Peen CORP.
				</Typography>
			</Stack>
		</Box>
	);
};

export default Footer;
