import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// icons
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import utils from 'utils';

const useStyles = makeStyles(theme => ({
    profile: {
        flexGrow: 1,
        padding: theme.spacing(1),
        margin: theme.spacing(2),

    },
    application: {
        flexGrow: 1,
        margin: theme.spacing(2),

    },
    content: {
        flexGrow: 1,
        margin: theme.spacing(2),
    },
    icon: {
        // margin: theme.spacing(2),
    },
    avatar: {
        margin: 10,
    },
    firstItem: {
        marginTop: 10
    },
    textWithIcon: {
        marginLeft: 10
    },
    button: {
        margin: theme.spacing(2),
        width: 300,
    },
    buttonApplication: {
        width: 450
    }
    
}));

export default function CustomerCard(props) {
    let { user } = props;
    const classes = useStyles();

    const { salutation, firstname, lastname, age, address, phone, email } = user;
    const initials = utils.getInitials(firstname, lastname);


    return (
        <React.Fragment>
            <Paper className={classes.profile} elevation={2}>
                <Grid container>
                    <Grid item xs={1}>
                        <Avatar className={classes.avatar}>{initials}</Avatar>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography className={classes.firstItem} variant="h5" gutterBottom>
                            {salutation+' '+firstname+' '+lastname+', '+age}
                        </Typography>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <HomeIcon className={classes.icon} color="disabled"/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.textWithIcon} variant="body1">
                                    {address}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <PhoneIcon className={classes.icon} color="disabled"/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.textWithIcon} variant="body1">
                                    {phone}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <MailIcon className={classes.icon} color="disabled"/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.textWithIcon} variant="body1">
                                    {email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}