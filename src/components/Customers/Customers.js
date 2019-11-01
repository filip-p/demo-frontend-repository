import React from 'react';
import TableRow from '../TableRow/TableRow';

const Customers = ({customers, onRouteChange, onSelectCustomer}) => {
		const table = customers.map((customer, i) => {
			return <TableRow customer={customer} onRouteChange={onRouteChange} onSelectCustomer={onSelectCustomer} />
		})
		return (
			<article>
			  <h1 className="f2 bold center">Customers</h1>
			  <ul className="list pl0 ml0 center mw5 ba b--light-silver br2">
			    {table}
			  </ul>
			</article>
		);
}

export default Customers;