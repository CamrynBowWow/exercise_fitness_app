import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [search, setSearch] = useState('');
	const [bodyParts, setBodyParts] = useState([]);

	let myRef = useRef(); // Still needs some work

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
			console.log(bodyPartsData);
			setBodyParts(['all', ...bodyPartsData]);
		};

		fetchExercisesData(); // Calls the function as soon as the app loads
	}, []);

	const handleSearch = async () => {
		if (search) {
			try {
				const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

				const searchedExercises = exercisesData.filter(
					(exercise) =>
						exercise.name.toLowerCase().includes(search) ||
						exercise.target.toLowerCase().includes(search) ||
						exercise.equipment.toLowerCase().includes(search) ||
						exercise.bodyPart.toLowerCase().includes(search)
				);

				setSearch('');
				setExercises(searchedExercises);

				window.scrollTo({ top: myRef.current.offsetTop + 326, behavior: 'smooth' });
			} catch (error) {
				//TODO Use react simple snackbar
			}
		}
	};

	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
			<Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='49px' textAlign='center'>
				Awesome Exercises <br /> You Should Know
			</Typography>
			<Box position='relative' mb='72px'>
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none' },
						width: { lg: '800px', xs: '350px' },
						backgroundColor: '#FFF',
					}}
					height='76px'
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder='Search Exercises'
					type='text'
				/>
				<Button
					className='search-btn'
					sx={{
						bgcolor: '#FF2625',
						color: '#FFF',
						textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
						position: 'absolute',
						right: '0',
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box ref={myRef} sx={{ position: 'relative', width: '100%', p: '20px' }}>
				<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
			</Box>
		</Stack>
	);
};

export default SearchExercises;
