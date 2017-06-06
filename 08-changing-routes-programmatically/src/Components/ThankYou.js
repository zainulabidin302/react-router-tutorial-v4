import React from 'react';

const ThankYou = ({match}) => (

  <div><h4>Thank you</h4> Dear {match.params.email}! We welcome you to our team, Cheers!</div>
);



export default ThankYou;
