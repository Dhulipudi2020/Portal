import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Notifications, Password } from './components';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(4)
	}
}));

const Settings = () => {
	const classes = useStyles();

	return <div className={classes.root}>I am settings</div>;
};

export default Settings;
