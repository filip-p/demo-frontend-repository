import React from 'react';

const TableRow = ({customer, onRouteChange, onSelectCustomer}) => {
		return (
			<div>
			  <li 
			  className="ph3 f3 pv3 bb b--light-silver"
			  onClick={(event) => {onRouteChange('customerDetails'); onSelectCustomer(customer);}}
			  >{customer.name}</li>
			</div>
		);
}

export default TableRow;