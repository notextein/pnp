import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import utils from 'utils';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ED1B2E'
    },
    title: {
        flex: 1
    },
    menuButton: {
        backgroundColor: 'white',
        width: 1,
        height: 20,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    menu: {
        marginRight: theme.spacing(1)
    }
}));


export default function ButtonAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    let { title, name, showBack, history, onLogout } = props;
    
    const loadPrevPage = () => {
        history.goBack();
        utils.goToTop();
        return null;
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function showGenericForms() {
        history.push('/generic');
    }

    return (<AppBar position="fixed" className={classes.root}>
        <Toolbar>
            <MenuIcon className={classes.menu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={showGenericForms}>Generic Forms</MenuItem>
            </Menu>
            { showBack && <ChevronLeftIcon className="previous-page" onClick={loadPrevPage} /> }
            <Typography variant="h6" className={classes.title}>{title}</Typography>
            <Typography variant="h6" className={classes.name}>{name}</Typography>
            <div className={classes.menuButton}></div>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={onLogout}>
                <PowerSettingsNew />
            </IconButton>
        </Toolbar>
    </AppBar>

    );
    
}