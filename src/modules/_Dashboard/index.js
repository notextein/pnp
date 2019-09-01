import React from 'react';
import './index.css';
import pru from 'pru';
import AppBar from './AppBar';
import plukLogo from 'images/pluk_logo.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    doLogout = () => {
        pru.fetch('/security/logout', {
            statusCode: 4
        }, p => {
            pru.setUserInfo(null);
            
            window.location.href = '/';
        });
    }

    panelAnimationEnd = () => {
        let modalPanel = this.refs.modalPanel;

        if(modalPanel.className.indexOf('bounceIn') > -1) {
            modalPanel.classList.remove('bounceIn');
        } else if(modalPanel.className.indexOf('bounceOut') > -1) {
            this.setState({
                showModal: false
            });
        }
    }

    cancelLogout = () => {
        let modalPanel = this.refs.modalPanel;

        modalPanel.classList.add('bounceOut');
    }

    render() {
        let { title, showBack, history, children } = this.props;
        let { showModal } = this.state;

        return(<>
            <AppBar
                title={title}
                showBack={showBack}
                history={history}
                name={pru.getUserInfo().name}
                onLogout={() => {
                    this.setState({
                        showModal: true
                    });
            }} />
            
            <div style={{ textAlign: 'center', marginTop: 30 }}>
            </div>
            <div style={{ textAlign: 'center', marginBottom: 30,  marginTop: 70 }}>
                <img src={plukLogo} />
            </div>

            <div className="dashboard-content">
                {children}
            </div>

            <Dialog
                open={showModal}
                onClose={() => {
                    this.setState({
                        showModal: false
                    });
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{
                    textAlign: 'center'
                }}>LOG OUT</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to log out?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.doLogout} color="primary">Yes</Button>
                    <Button onClick={() => {
                        this.setState({
                            showModal: false
                        });
                    }} color="primary" autoFocus>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>);
    }
}