import { useEffect, useState } from 'react';
import vimsService from '../Services/VIMSService';

const PolicyList=()=>{
    const [policies,setPolicies]=useState([]);
    const init = () => {
        vimsService.getAll()
          .then(response => {
            console.log('Printing policy data', response.data);
            setPolicies(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        init();
      }, []);
      return (
        <div className="container">
          <h3>List of policies</h3>
          <hr/>
          <div>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>policyId</th>
                  <th>policyName</th>
                  <th>policyPremium</th>
                  <th>policyType</th>
                  <th>policyLaunchDate</th>
                  <th>duration</th>
                </tr>
              </thead>
              <tbody>
              {
                policies.map(policie => (
                  <tr key={policie.policyId}>
                    <td>{policie.policyId}</td>
                    <td>{policie.policyName}</td>
                    <td>{policie.policyPremium}</td>
                    <td>{policie.policyType}</td>
                    <td>{policie.policyLaunchDate}</td>
                    <td>{policie.duration}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
            
          </div>
        </div>
      );
}
export default PolicyList;