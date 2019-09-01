import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// icons
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import Application from 'components/application';

import utils from 'utils';



const useStyles = makeStyles(theme => ({
    profile: {
        flexGrow: 1,
        padding: theme.spacing(1),

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

export default function CustomerProfile(props) {
    let { setFormObj, toggleForms } = props;
    const classes = useStyles();

    // test data. change this to dynamic
    let user = {
        salutation: 'Mr.',
        firstname: 'Lex Luger',
        lastname: 'Basilio',
        age: 23,
        address: '36th St, Taguig, 1630 Metro Manila',
        phone: '+639171234567',
        email: 'lexluger.basilio@prulifeuk.com.ph',
        product: 'Elite 10',
        create_ts: 'July 19, 2019 12:25:31PM'
    };

    const { salutation, firstname, lastname, age, address, phone, email } = user;
    const initials = utils.getInitials(firstname, lastname);
    const applicationTitle = user.firstname + ' ' + user.lastname + ' | ' + user.product + ' | ' + user.create_ts;

    const doEdit = e => {
        e.preventDefault();
        props.toggleForms('edit-customer');
        utils.goToTop();
        console.log('handle edit here');
    }

    const suspendConversation = e => {
        e.preventDefault();
        alert('Not yet implemented.');
    }

    const newApplication = e => {
        e.preventDefault();
        props.toggleForms('personal-info');
        utils.goToTop();
        console.log('handle submit here');
    }


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
            
                <Button variant="outlined" color="primary" className={classes.button} onClick={doEdit}>
                    Edit Profile
                </Button>
                <Button variant="outlined" color="primary" className={classes.button} onClick={suspendConversation}>
                    Suspend Conversation
                </Button>
            </Paper>
            
            <div className={classes.content}>
                <Button variant="contained" color="primary" className={classes.buttonApplication} onClick={newApplication}>
                    New Application
                </Button>
            </div>

        <Application title={applicationTitle} setFormObj={setFormObj} toggleForms={toggleForms} />
            
        </React.Fragment>
    );
}