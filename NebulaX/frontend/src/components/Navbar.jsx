import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as ReactstrapNavbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const link = [
        { name: "Ana Sayfa", path: "/" },
        { name: "Hakkımızda", path: "/Hakkımızda" },
        { name: "Ürünler", path: "/Ürünlerimiz" },
        { name: "Destek", path: "/Destek" },
    ];

    const navbarStyle = {
        backgroundColor: '#343a40', 
        borderBottom: '2px solid #333', 
    };

    const navLinkStyle = {
        fontSize: '1.1rem',
        color: '#fff',
    };

    const navLinkHoverStyle = {
        color: '#ff8c00',
    };

    const buttonStyle = {
        backgroundColor: '#dc3545', 
        color: 'white',
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
    };

    const buttonHoverStyle = {
        backgroundColor: '#c82333', 
    };

    return (
        <ReactstrapNavbar style={navbarStyle} dark expand="lg">
            <NavbarBrand tag={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
                NebulaX
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    {link.map((item, index) => (
                        <NavItem key={index}>
                            <NavLink
                                tag={Link}
                                to={item.path}
                                style={navLinkStyle}
                                onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                                onMouseLeave={(e) => e.target.style.color = navLinkStyle.color}>
                                {item.name}
                            </NavLink>
                        </NavItem>
                    ))}
                    {!isLogin && (
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/Giriş"
                                style={buttonStyle}
                                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
                                Üye Girişi
                            </NavLink>
                        </NavItem>
                    )}
                </Nav>
            </Collapse>
        </ReactstrapNavbar>
    );
}

export default Navbar;
