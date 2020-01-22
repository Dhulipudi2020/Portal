import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, SwipeableDrawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: 240,
		[theme.breakpoints.up('lg')]: {
			marginTop: 64,
			height: 'calc(100% - 64px)'
		}
	},
	root: {
		backgroundColor: theme.palette.white,
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		padding: theme.spacing(2)
	},
	divider: {
		margin: theme.spacing(2, 0)
	},
	nav: {
		marginBottom: theme.spacing(2)
	}
}));

const Sidebar = (props) => {
	const { open, variant, onClose, className, ...rest } = props;

	const classes = useStyles();

	const pages = [
		{
			title: ' Usage Kpis',
			href: '/dashboard',
			icon: <DashboardIcon />
		}
	];

	const Opages = [
		{
			title: 'Logs',
			href: '/logs',
			icon: <ShoppingBasketIcon />
		},
		{
			title: 'Alert Console',
			href: '/alerts',
			icon: <PeopleIcon />
		},
		{
			title: 'Availability',
			href: '/availability',
			icon: <ImageIcon />
		},
		{
			title: 'Account',
			href: '/account',
			icon: <AccountBoxIcon />
		}
	];

	return (
		<SwipeableDrawer
			anchor="left"
			classes={{ paper: classes.drawer }}
			onClose={onClose}
			open={open}
			variant={variant}
		>
			<div {...rest} className={clsx(classes.root, className)}>
				<Profile />
				<Divider className={classes.divider} />
				<label style={{ fontWeight: 'bold' }}>Business</label>
				<SidebarNav className={classes.nav} pages={pages} />
				<label style={{ fontWeight: 'bold' }}>Operational</label>
				<SidebarNav className={classes.nav} pages={Opages} />
			</div>
		</SwipeableDrawer>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
	variant: PropTypes.string.isRequired
};

export default Sidebar;
