import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Navbar as ReactstrapNavbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import 'primeicons/primeicons.css';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({ username: 'Crew' });
    const [shopBasketCount, setBasketCount] = useState(0);
    const { id } = useParams();

    const toggle = () => setIsOpen(!isOpen);

    const basketShop = () => {
        if (shopBasketCount >= 20) {
            alert('Sepetiniz de 20 üründen fazlası olamaz.'); // silebilirsiniz.
            return;
        }
        setBasketCount(prevCount => prevCount + 1);
    };

    const links = [
        { name: "Ana Sayfa", path: "/" },
        { name: "Hakkımızda", path: "/Hakkımızda" },
        { name: "Ürünler", path: "/Ürünler" },
        { name: "Destek", path: "/Destek" },
        { name: "Biz Sizi Arayalım", path: "/Arayalım" },
    ];

    return (
        <ReactstrapNavbar style={{ backgroundColor: '#2c3e50', padding: '10px' }} expand="lg">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <NavbarBrand tag={Link} to="/" style={{ color: '#ecf0f1', fontSize: '24px', fontWeight: 'bold' }}>
                    NebulaX
                </NavbarBrand>
                <NavbarToggler onClick={toggle} style={{ backgroundColor: '#ecf0f1' }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={{ display: 'flex', gap: '15px', margin: '0 auto' }} navbar>
                        {links.map((item, index) => (
                            <NavItem key={index}>
                                <NavLink tag={Link} to={item.path} style={{ color: '#ecf0f1', fontSize: '18px' }}>
                                    {item.name}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <Nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }} navbar>
                        <NavItem>
                            <NavLink onClick={basketShop} style={{ cursor: 'pointer', color: '#ecf0f1', fontSize: '20px' }}>
                                <i className="pi pi-search"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ position: 'relative' }}>
                            <NavLink onClick={basketShop} style={{ cursor: 'pointer', color: '#ecf0f1', fontSize: '20px' }}>
                                {shopBasketCount > 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '-5px',
                                        right: '-10px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '5px 8px',
                                        fontSize: '12px'
                                    }}>
                                        {shopBasketCount}
                                    </span>
                                )}
                                <i className="pi pi-shopping-cart"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={`/Profile:${id}`} style={{ cursor: 'pointer', color: '#ecf0f1', fontSize: '20px' }}>
                                <i className="pi pi-user"></i>
                                {isLogin && <span style={{ marginLeft: '5px', fontSize: '16px' }}>{user.username}</span>}
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </ReactstrapNavbar>
    );
};

export default Navbar;
