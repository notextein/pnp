import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TabletIcon from '@material-ui/icons/Iso';
import SecurityIcon from '@material-ui/icons/Security';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import HotelIcon from '@material-ui/icons/Hotel';
import FolderIcon from '@material-ui/icons/Folder';

import pru from 'pru';





const useStyles = makeStyles(theme =>({
    avatar: {
        margin: theme.spacing(1),
        color: '#fff',
        backgroundColor: blue[700],
    },
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        width: 120,
        height: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 40
    }
}));

export default function Application(props) {
    let { type, setFormObj, toggleForms } = props;
    const classes = useStyles();

    const form = pru.form;
    let cardIcon, cardName, formSchema;
    switch (type) {

        case 'needs-analysis':
            cardIcon = <TabletIcon className={classes.icon} />
            formSchema = form["needsPriority"];
            cardName = 'Needs Analysis';
            break;
        case 'product-customization':
            cardIcon = <SecurityIcon className={classes.icon} />
            formSchema = form["product"];
            cardName = 'Product Customization';
            break;
        case 'risk-rofiler':
            cardIcon = <InsertChartIcon className={classes.icon} />
            formSchema = form["riskProfile"];
            cardName = 'Investment Risk Profiler';
            break;
        case 'addtl-personal-info':
            cardIcon = <PersonAddIcon className={classes.icon} />
            formSchema = form["personalInfo.additionalPersonalInformation"];
            cardName = 'Additional Personal Information';
            break;
        case 'medical-info':
            cardIcon = <HotelIcon className={classes.icon} />
            formSchema = form["personalInfo.additionalPersonalInformation"];
            cardName = 'Medical Information';
            break;
        case 'doc-checklist':
            cardIcon = <FolderIcon className={classes.icon} />
            formSchema = form["personalInfo.requiredDocuments"];
            cardName = 'Document Checklist';
            break;
        default:
            cardIcon = <PersonIcon className={classes.icon} />
            formSchema = form["personalInfo"];
            cardName = 'Personal Information';
            break;
    }

    const handleClick = e => {
        setFormObj(formSchema);
        toggleForms('generic');
    }

    return (
        <Button variant="outlined" className={classes.root} onClick={handleClick}>
            <div className={classes.container}>
                <Avatar className={classes.avatar}>
                    {cardIcon}
                </Avatar>
                {cardName}
            </div>
        </Button>
        
    );
}