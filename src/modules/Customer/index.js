import React from 'react';
import './index.css';

import Dashboard from '../_Dashboard';

import CustomerCard from 'components/CustomerCard';
  
export default class Customer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          
      }
  }

  componentDidMount = () => {
    console.log('Customer page mounted');
  }

  componentWillUnmount = () => {
    console.log('Customer page removed');
}

  render() {
    let props = this.props;

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

    let user1 = {
      salutation: 'Ms.',
      firstname: 'Jane Eunice',
      lastname: 'Gonzales',
      age: 25,
      address: '36th St, Taguig, 1630 Metro Manila',
      phone: '+639171234567',
      email: 'janeeunice.gonzales@prulifeuk.com.ph',
      product: 'Elite 10',
      create_ts: 'July 19, 2019 12:25:31PM'
    };

    let user2 = {
      salutation: 'Ms.',
      firstname: 'Angela',
      lastname: 'Cruz',
      age: 29,
      address: '36th St, Taguig, 1630 Metro Manila',
      phone: '+639171234567',
      email: 'angela.cruz@prulifeuk.com.ph',
      product: 'Elite 10',
      create_ts: 'July 19, 2019 12:25:31PM'
    };

    let user3 = {
      salutation: 'Mr.',
      firstname: 'Carlo',
      lastname: 'Caguicla',
      age: 21,
      address: '36th St, Taguig, 1630 Metro Manila',
      phone: '+639171234567',
      email: 'carlo.caguicla@prulifeuk.com.ph',
      product: 'Elite 10',
      create_ts: 'July 19, 2019 12:25:31PM'
    };


    return <Dashboard history={props.history} showBack={true} title="Customer Tracker">
      <CustomerCard user={user} />

      <CustomerCard user={user1} />

      <CustomerCard user={user2} />

      <CustomerCard user={user3} />
  </Dashboard>;
      
  }
}

