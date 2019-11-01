import React from 'react';
import Card from '../Card/Card';

class CardList extends React.Component  {
		constructor(props) {
			super(props);
			this.state = {
				view: 'grid'
			}
		};

		setGridView = () => {
			this.setState({view:'grid'})
		}

		setListView = () => {
			this.setState({view:'list'})
		}
		render(){

		let boxClass = ["box"];
		this.state.view === 'grid'
		?boxClass.push('dib ')
		:this.state.view === 'list'
		?boxClass.push('')
		:boxClass.push('')
		
		const cardComponent = this.props.products.map((product, i) => {
			return <Card product={product} onDeleteProduct={this.props.onDeleteProduct} view={boxClass}/>

		});

			return (

			<div>
				<div className='w-100 cf fr'>
					<div className='cf fr ph3'>
						<i 
						onClick={this.setListView}
						className="fa fa-list fa-lg grow pa3bg-black selected" ></i>
						<i 
						onClick={this.setGridView}
						className="fa fa-th  fa-lg grow pa3 float right" ></i>
					</div>
				</div>
				<div className='pl5'>
				{cardComponent}
				</div>
			</div>
		);
		}
}

export default CardList;