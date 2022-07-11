import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Could put in variant contained to make look different
const BodyPartButton = styled(Button)({
	marginLeft: '21px',
	color: '#FFF',
	backgroundColor: '#FFA9A9',
	fontSize: '14px',
	borderRadius: '20px',
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: '#F19393',
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
				{/* <Button sx={{ ml: '21px', color: '#FFF', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
					{exercise.bodyPart}
				</Button> */}
				<BodyPartButton>{exercise.bodyPart}</BodyPartButton>
				<TargetButton>{exercise.target}</TargetButton>
				{/* <Button sx={{ ml: '21px', color: '#FFF', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
					{exercise.target}
				</Button> */}
			</Stack>
			<Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
				{exercise.name}
			</Typography>
		</Link>
	);
};

export default ExerciseCard;
