import React, { useState } from 'react';
import Link from 'next/link'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            
          <MDBNavbarBrand>NextTester</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink>
                <Link href="/">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              
             
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
};

export default Navbar;
