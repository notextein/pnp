import React from 'react';
import './index.css';
import Dashboard from '../_Dashboard';
import FormList from 'forms/FormList';
import GenericForm from 'forms/GenericForm';

import pru from 'pru';
  
export default class Generic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        showAll: true,
        showForm: false,
        formObj: {}
      }
  }

  setFormObj = (form) => {
    this.setState({formObj: form});
  }

  toggleForms = (view) => {
    // reset
    this.setState({showAll: false});
    this.setState({showForm: false});
    

    switch (view) {
      case 'show-form':
        this.setState({showForm: true});
      break;
      default:
        this.setState({showAll: true});
    };

  };

  render() {
    let { showAll, showForm, formObj } = this.state;
    let { history } = this.props;

    console.log('Generic props', this.props);

    let form;
    if (showAll) {
        form = <FormList toggleForms={this.toggleForms} setFormObj={this.setFormObj}/>;
    } else if (showForm) {
     form = <GenericForm formObj={formObj} toggleForms={this.toggleForms}/>
    }


    return (<>
        <Dashboard history={history} showBack={true} title="Generic Forms">
            {form}
        </Dashboard>
    </>);
    
  }
}

