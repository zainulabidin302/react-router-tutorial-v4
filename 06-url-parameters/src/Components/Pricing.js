import React from 'react';
import './Pricing.css'


const Pricing = ({data}) => {
    return (<div>
    <h3>Compare Pricing Plans</h3>

    <table className="table">
      <thead>
        <tr>
          <th>Features</th>
          <th>Standard Plan</th>
          <th>Gold Plan</th>
          <th>Platinum Plan</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
            return (<tr>
              {item.map(a => {
                return <td>{a}</td>
              })}
            </tr>)
      })}

      </tbody>
    </table>
  </div>)
};


export default Pricing;
