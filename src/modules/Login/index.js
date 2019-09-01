import React from 'react';
import './index.css';
import pru from 'pru';
import plukLogo from 'images/pluk_logo.png';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/PersonOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import MaterialUIForm from 'react-material-ui-form';
import utils from 'utils';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prompt: '',
            checking: false,
            username: '',
            password: '',
            hidePassword: true
        }
    }

    doLogin = e => {
        e.preventDefault();
        let { checking, username, password } = this.state;
        
        if(!checking) {
            this.setState({
                prompt: '',
                checking: true
            }, () => {
                pru.fetch('/security/login', {
                    username,
                    password
                }, p => {
                    this.setState({
                        checking: false
                    }, () => {
                        if(p.isSuccess) {
                            // let form = {
                            //     test: 'test'
                            // };
                            // pru.setPruForms(form);
                            pru.setUserInfo(p.result);
                            this.props.history.replace('/home');
                            
                        } else {
                            this.setState({
                                password: '',
                                prompt: p.message
                            });
                        }
                    });
                });
            });
        }
    }

    render() {
        let { prompt, username, password, hidePassword, checking } = this.state;

        return(<div className="login-container">
            {
                (prompt != '') ?
                <div ref="prompt" className="prompt fast animated slideInDown" onAnimationEnd={e => {
                    let prompt = this.refs.prompt;

                    if(prompt.className.indexOf('slideInDown') > -1) {
                        prompt.classList.remove('slideInDown');
                    } else if(prompt.className.indexOf('slideOutUp') > -1) {
                        this.setState({
                            prompt: ''
                        });
                    }
                }}>
                    {prompt}
                    <div className="close far fa-times-circle" onClick={() => {
                        let prompt = this.refs.prompt;

                        prompt.classList.add('slideOutUp');
                    }}></div>
                </div>
                : <></>
            }
            {
                (checking) ?
                <div className="checking">
                    <span>Checking credentials...</span>
                </div>
                : 
                <div className="panel">
                    <div className="logo">
                        <img src={plukLogo} />
                    </div>
                    <h1>PRUone</h1>

                    <MaterialUIForm onSubmit={this.doLogin}>
                        <Paper style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 30
                        }}>
                            <Input
                                disableUnderline={true}
                                placeholder="Username or Email"
                                style={{
                                    flex: 1,
                                    padding: '0px 15px'
                                }}
                                value={username}
                                onChange={event => {
                                    this.setState({
                                        username: event.target.value.replace(/[ ]/g, '')
                                    });
                                }}
                            />
                            <IconButton disabled={true}>
                                <PersonIcon style={{
                                    color: '#A8A8A8'
                                }} />
                            </IconButton>
                        </Paper>
                        <Paper style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 30
                        }}>
                            <Input
                                disableUnderline={true}
                                type={(hidePassword) ? 'password' : 'text'}
                                placeholder="Password"
                                style={{
                                    flex: 1,
                                    padding: '0px 15px'
                                }}
                                value={password}
                                onChange={event => {
                                    this.setState({
                                        password: event.target.value.replace(/[ ]/g, '')
                                    });
                                }}
                                onKeyPress={e => {
                                    if(e.key == 'Enter') {
                                        this.doLogin(e);
                                    }
                                }}
                            />
                            <IconButton onClick={() => {
                                this.setState({
                                    hidePassword: !hidePassword
                                });
                            }}>
                                { (!hidePassword) ? <VisibilityIcon style={{
                                    color: '#A8A8A8'
                                }}  /> : <VisibilityOffIcon style={{
                                    color: '#A8A8A8'
                                }}  /> }
                            </IconButton>
                        </Paper>
                        <p className="align-center">
                            <Button variant="contained" color="primary" onClick={this.doLogin} style={{
                                backgroundColor: '#ED1B2E',
                                width: 150,
                                height: 40
                            }} disabled={(username != '' && password != '') ? false : true}>
                                <span style={{
                                    color: 'white',
                                    font: 'normal 14px \'FS Albert Bold\''
                                }}>LOG IN</span>
                            </Button>
                        </p>
                    </MaterialUIForm>
                    {/* <form onSubmit={this.doLogin}>
                        <div className="textbox">
                            <input type="text" placeholder="Username or email" value={username} onChange={event => {
                                this.setState({
                                    username: event.target.value.replace(/[ ]/g, '')
                                });
                            }} />
                            <i className="icon far fa-user"></i>
                        </div>
                        <div className="textbox">
                            <input type={(hidePassword) ? 'password' : 'text'} placeholder="Your Password" value={password} onChange={event => {
                                this.setState({
                                    password: event.target.value.replace(/[ ]/g, '')
                                });
                            }} />
                            <i className={'icon fa fa-eye' + ((!hidePassword) ? '-slash' : '')} onClick={() => {
                                this.setState({
                                    hidePassword: !hidePassword
                                });
                            }} style={{
                                cursor: 'pointer'
                            }}></i>
                        </div>
                        <p className="align-center"><button className="button" disabled={(username != '' && password != '') ? false : true}>LOG IN</button></p>
                    </form> */}
                </div>
            }
        </div>);
    }
}

