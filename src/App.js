import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IdleTimer from 'react-idle-timer'
import pru from 'pru';
import utils from 'utils';
import Modules from 'modules';
import MaterialViewport from './utils/MaterialViewport';

import ResetNavigation from './components/ResetNavigation';

import globalState from 'ducks/store';

export default class App extends React.Component {

    render() {
        
        // let's us subscribe to the globalState perpetually and log changes when the state changes
        // call unsubscribe() to unsubscribe
        const unsubscribe = globalState.subscribe(() => console.log('globalState', globalState.getState()));

        return(<>
            {/* <MaterialViewport> */}
                <IdleTimer
                    onIdle={() => {
                        if(pru.getUserInfo() != null) {
                            pru.fetch('/security/logout', {
                                statusCode: 4
                            }, p => {
                                pru.setUserInfo(null);
                                
                                window.location.href = '/';
                            });
                        }
                    }}
                    debounce={250}
                    timeout={1000 * 60 * 15}
                />
                <Router>
                    <div className="container">
                        {
                            Modules.map((module, index) => {
                                return <Route exact key={'route-' + index} path={module.path} component={props => {
                                    if(pru.getOP(module, 'protected') == true) {
                                        if(pru.getUserInfo() != null) {
                                            return <module.component {...props} />;
                                        } else {
                                            window.location.href = '/';
                                        }
                                    } else {
                                        return <module.component {...props} />;
                                    }
                                }} />
                            })
                        }
                    
                    <ResetNavigation />
                    </div>
                </Router>
                
            {/* </MaterialViewport> */}
        </>);
    }
}
  