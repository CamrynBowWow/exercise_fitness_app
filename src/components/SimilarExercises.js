import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: '100px', xs: '100px' }, pl: '15px' }}>
			<Typography variant='h4' mb={5} mt={5} fontWeight={700}>
				Similar <span style={{ color: '#FF2625' }}>Target Muscle</span> exercise
			</Typography>
			<Stack direction='row' sx={{ position: 'relative' }}>
				{targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
			</Stack>
			<Typography variant='h4' mb={5} mt={10} fontWeight={700}>
				Similar <span style={{ color: '#FF2625' }}>Equipment</span> exercise
			</Typography>
			<Stack direction='row' sx={{ position: 'relative' }}>
				{equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
