import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';

import Card from 'components/Card';


const useStyles = makeStyles(theme =>({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    marginRight: theme.spacing(4),
    
  },
  appBar: {
    backgroundColor: '#787878'
  },
  title: {
    flexGrow: 1
  },
  container: {
    padding: theme.spacing(2),
  },
  cards: {
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'row',
  }
}));

export default function Application(props) {
    let { title, setFormObj, toggleForms} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="subtitle2" className={classes.title} color="inherit">
                        {title.toUpperCase()}
                    </Typography>

                    <div>
                        <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            // onClick={handleMenu}
                            color="inherit"
                        >
                            <FileCopyIcon />
                        </IconButton>
                        <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <DeleteIcon />
                        </IconButton>
                        
                    </div>
                </Toolbar>
            </AppBar>
            <Paper className={classes.container} variant="body1" elevation={0}>
                <Grid container>
                    <Grid className={classes.cards} item xs={8}>
                        <Box display="flex" flexDirection="row">
                            <Card type="personal-info" setFormObj={setFormObj} toggleForms={toggleForms} />
                            <Card type="needs-analysis" setFormObj={setFormObj} toggleForms={toggleForms} />
                            <Card type="product-customization" setFormObj={setFormObj} toggleForms={toggleForms} />
                            <Card type="risk-rofiler" setFormObj={setFormObj} toggleForms={toggleForms} />
                            <Card type="addtl-personal-info" setFormObj={setFormObj} toggleForms={toggleForms} />
                            <Card type="medical-info" setFormObj={setFormObj} toggleForms={toggleForms} />
                            <Card type="doc-checklist" setFormObj={setFormObj} toggleForms={toggleForms} />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Container>
                            [coverage content here...]
                        </Container>
                    </Grid>
                   
                        
                </Grid>
            </Paper>
        </div>
    );
}