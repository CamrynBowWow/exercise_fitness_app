import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BodyPartButton = styled(Button)({
	marginLeft: '21px',
	color: '#FFF',
	backgroundColor: '#FFA9A9',
	fontSize: '14px',
	borderRadius: '20px',
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: '#F16969',
	},
});

const TargetButton = styled(Button)({
	marginLeft: '21px',
	color: '#FFF',
	backgroundColor: '#FCC757',
	fontSize: '14px',
	borderRadius: '20px',
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: '#D69E29',
	},
});

const ExerciseCard = ({ exercise }) => {
	return (
		<Link className='exercise-card' to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
			<Stack direction='row'>
				<BodyPartButton variant='contained'>{exercise.bodyPart}</BodyPartButton>
				<TargetButton variant='contained'>{exercise.target}</TargetButton>
			</Stack>
			<Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
				{exercise.name}
			</Typography>
		</Link>
	);
};

export default ExerciseCard;
