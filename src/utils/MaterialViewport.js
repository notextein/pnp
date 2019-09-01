import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function MaterialViewport(props) {

    return (
        <React.Fragment>
            <CssBaseline />
            {props.children}
        </React.Fragment>
    );
}