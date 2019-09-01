import React from 'react';
import './index.css';
import Dashboard from '../_Dashboard';
import AddCustomerForm from 'forms/AddCustomerForm';
import PersonalInfoForm from 'forms/PersonalInfoForm';
import CustomerProfile from 'forms/CustomerProfile';
import GenericForm from 'forms/GenericForm';

import pru from 'pru';
  
export default class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddCustomerForm: true,
      showCustomerProfile: false,
      showPersonalInfo: false,
      showGeneric: false,
      formObj: {}
    }

  }

  setFormObj = (form) => {
    this.setState({formObj: form});
  }

  toggleForms = (view) => {
    // reset
    this.setState({showAddCustomerForm: false});
    this.setState({showCustomerProfile: false});
    this.setState({showPersonalInfo: false});
    this.setState({showGeneric: false});
    

    switch (view) {
      case 'add-customer':
      case 'edit-customer': // handle form values here
        this.setState({showAddCustomerForm: true});
      break;
      case 'customer-profile':
        this.setState({showCustomerProfile: true});
      break;
      case 'personal-info':
        this.setState({showPersonalInfo: true});
      break;
      case 'generic':
        this.setState({showGeneric: true});
      break;
      default:
        this.setState({showCustomerProfile: true});
    };

  };

  render() {
    let { showAddCustomerForm, showCustomerProfile, showPersonalInfo, showGeneric } = this.state;
    let { history } = this.props;

    let form;
    if (showAddCustomerForm) {
      form = <AddCustomerForm formObj={pru.form.customer} toggleForms={this.toggleForms}/>;
    }
    else if (showCustomerProfile) {
      form = <CustomerProfile toggleForms={this.toggleForms} setFormObj={this.setFormObj}/>
    }
    else if (showPersonalInfo) {
      form = <PersonalInfoForm formObj={pru.form.personalInfo} toggleForms={this.toggleForms} />
    } else if (showGeneric) {
      form = <GenericForm formObj={this.state.formObj} toggleForms={this.toggleForms}/>
    }
    
    return <Dashboard history={history} showBack={true} title="Conversation">
      {form}
    </Dashboard>;
  }
}

