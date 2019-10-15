import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar fixed="top" color="faded" light>
				<NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Articles
              </DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<NavItem>
										<NavLink href="/articles/mens">Men</NavLink>
									</NavItem>
								</DropdownItem>
								<DropdownItem>
									<NavItem>
										<NavLink href="/articles/womens">Women</NavLink>
									</NavItem>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown >
						<NavItem>
							<NavLink href="/podcast">Podcast</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/team">Team</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/about">About</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default Navigation;