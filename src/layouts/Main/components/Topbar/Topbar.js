import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		boxShadow: 'none',
		backgroundColor: '#1AA6B1'
	},
	flexGrow: {
		flexGrow: 1
	},
	signOutButton: {
		marginLeft: theme.spacing(1)
	},
	avatar: {
		position: 'absolute',
		right: 0,
		marginRight: '22px',
		height: '90%',
		width: '3%'
	},
	name: {
		marginTop: theme.spacing(1),
		position: 'absolute',
		/* margin-right: 121%; */
		left: '97%',
		zIndex: 6
	}
}));

const Topbar = (props) => {
	const { className, onSidebarOpen, ...rest } = props;

	const classes = useStyles();

	const userApp = {
		name: 'DN'
	};
	return (
		<AppBar {...rest} className={clsx(classes.root, className)}>
			<Toolbar>
				<RouterLink to="/" />
				<img
					src="/images/logos/wiley.png"
					style={{ height: '50px', backgroundColor: 'white', borderRadius: '3px' }}
				/>
				<h1
					style={{
						fontFamily: 'Arial',
						fontStyle: 'normal',
						fontDisplay: 'swap',
						fontWeight: 100,
						marginLeft: '32%'
					}}
				>
					&nbsp;Digital Operations Hub
				</h1>

				<Typography className={classes.name} variant="h4">
					{userApp.name}
				</Typography>

				<div className={classes.flexGrow} />
				<Hidden mdDown>
					<IconButton color="inherit" />
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
			<Avatar alt="Person" className={classes.avatar} component={RouterLink} to="/account" />
		</AppBar>
	);
};

Topbar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func
};

export default Topbar;
