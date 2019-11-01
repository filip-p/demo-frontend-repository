import React from 'react';

const Card = ({product, onDeleteProduct, view}) => {
	return (
		<div className={view.join(' ')}>
		<article className=' br2 ba dark-gray b--black-10 mv4  mw5 center '>
		  <img src="https://via.placeholder.com/600x300" 
		  className="db w-100 br2 br--top" 
		  alt="Kitten looking menacing."/>
		  <div className="pa2 ph3-ns pb3-ns ">
		    <div className="dt w-100 mt1">
		      <div className="dtc">
		        <h1 className="f5 f4-ns mv0">{product.name}</h1>
		      </div>
		      <div className="dtc tr">
		        <h2 className="f10 mv0">{product.price.toString().match('.\*\\..{0,2}|.\*')[0]}</h2>
		      </div>
		      
		    </div>
		    <a 
		    className="f6 link ma3 ph3 pa3 grow pv2 mb2 dib white bg-dark-red"
		    onClick={() => onDeleteProduct(product)}
		    href="#0">Delete</a>
		  </div>
		</article>
		</div>
		);
}

export default Card;