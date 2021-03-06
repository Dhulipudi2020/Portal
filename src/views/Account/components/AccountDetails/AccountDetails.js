import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, CardActions, Divider, Grid, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {}
}));

const AccountDetails = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const [ values, setValues ] = useState({
		firstName: 'Shen',
		lastName: 'Zhi',
		email: 'shen.zhi@devias.io',
		phone: '',
		state: 'Alabama',
		country: 'USA'
	});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	const states = [
		{
			value: 'alabama',
			label: 'Alabama'
		},
		{
			value: 'new-york',
			label: 'New York'
		},
		{
			value: 'san-francisco',
			label: 'San Francisco'
		}
	];

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<form autoComplete="off" noValidate>
				<CardHeader subheader="The information can be edited" title="Profile" />
				<Divider />
				<CardContent>
					<Grid container spacing={3} />
				</CardContent>
				<Divider />
				<CardActions>
				
				</CardActions>
			</form>
		</Card>
	);
};

AccountDetails.propTypes = {
	className: PropTypes.string
};

export default AccountDetails;
