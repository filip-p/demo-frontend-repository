import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Navgation = ({onRouteChange, isSignedIn, user}) => {
		if (isSignedIn) {
			return (
				<div>
					<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className='f3 b dim black ph2'>{user}</p>
						<p
						onClick={() => onRouteChange('signout')}
					 	className='f3 link dim black underline pointer ph2'>sign out</p>
					 	
					</nav>
					<Sidebar onRouteChange={onRouteChange}/>
				</div>
			);
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p
					onClick={() => onRouteChange('signin')}
				 	className='f3 link dim black underline pointer ph4'>Sign in</p>
				</nav>
			);
		}

}

export default Navgation;