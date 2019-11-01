import React from 'react';

	const CustomerDetails = ({selectedCustomer}) => {
		const products = selectedCustomer.purchasedProducts.map((product, i) => {
			return <tr>
					   <th className="pv3 pr3 bb b--black-20">{product.id}</th>
					   <th  className="pv3 pr3 bb b--black-20">{product.name}</th>
					   <th  className="pv3 pr3 bb b--black-20">{product.price}</th>
				   </tr>
		})
		return (
			<article className="br3 ba b--black-10 mv4 mw6 shadow-5 center">
			<div className="pa3 pa5-ns">
			  <h4 className="f2 fw6">Customer info</h4>
			  <dl className="f4 lh-title mv2">
			    <dt className="b">Name: </dt>
			    <dd className=" ml0 ">   {selectedCustomer.name}</dd>
			  </dl>
			  <dl className="f4 lh-title mv2">
			    <dt className=" b">E-mail: </dt>
			    <dd className=" ml0 ">   {selectedCustomer.email}</dd>
			  </dl>
			  <dl className="f4 lh-title mv2">
			    <dt className=" b pt4">Purchased products: </dt>
			    <table className="f6 w-100 mw8 center pa4"  cellspacing="0">
			    <tr>
			    <th className="fw6 bb b--black-20  pb3 pr3 center">ID</th>
			    <th className="fw6 bb b--black-20  pb3 pr3 center">NAME</th>
			    <th className="fw6 bb b--black-20  pb3 pr3 center">PRICE</th>
			  	</tr>
			  	{products}
			    </table>
			  </dl>
			</div>
			</article>
		);
}

export default CustomerDetails;