import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = ({onRouteChange}) => {
	return (
		<SideNav>
            <SideNav.Toggle />
            <SideNav.Nav >
                <NavItem eventKey="home" 
                onClick={() => onRouteChange('home')}>
                    <NavIcon>
                        <i className="fas fa-fw fa-boxes" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Products
                    </NavText>
                    <NavItem 
                    onClick={() => onRouteChange('createProduct')}
                    eventKey="home/createNewProduct">
                        <NavText>
                            Create New Product
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="customers" 
                onClick={() => onRouteChange('customers')}>
                    <NavIcon>
                        <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText >
                        Customers
                    </NavText>
                    <NavItem disabled
                    onClick={() => onRouteChange('createCustomer')}
                    eventKey="home/createNewCustomer">
                        <NavText>
                            Create New Customer
                        </NavText>
                    </NavItem>

                </NavItem>
                <NavItem 
                    disabled
                    eventKey="createNewCustomer">
                                        <NavIcon>
                      
                    </NavIcon>
                        <NavText>
                            Create New Customer
                        </NavText>
                    </NavItem>
            </SideNav.Nav>

        </SideNav>
		);
}

export default Sidebar;