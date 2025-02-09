import { useState } from "react";

const Shopping = () => {
    const response = [
        {
            id: 1,
            name: 'Valorant',
            products: [
                { id: 1, name: 'Valorant E-Pin', price: 100, img: 'https://oyuncumeskeni.tr/assets/img/product/valo7270.png', description: 'Valorantta 240vp, en iyi vpler nebulax dan alınır.' },
                { id: 2, name: 'Valorant E-Pin', price: 100, img: 'https://oyuncumeskeni.tr/assets/img/product/valo7270.png', description: 'Valorantta 240vp, en iyi vpler nebulax dan alınır.' },
                { id: 3, name: 'Valorant E-Pin', price: 100, img: 'https://oyuncumeskeni.tr/assets/img/product/valo7270.png', description: 'Valorantta 240vp, en iyi vpler nebulax dan alınır.' },
            ]
        },

        {
            id: 2,
            name: 'PUBG',
            products: [
                { id: 1, name: 'PUBG E-Pin', price: 100, img: 'https://play-lh.googleusercontent.com/jRC1B-vE-Y4qG5GasrCo-NjNgehL2fyc8SkOGvypQgKrqGOFH7gwZ_c0TI5v0QfqXw', description: 'PUBG de 240vp, en iyi vpler nebulax dan alınır.' },
                { id: 2, name: 'PUBG E-Pin', price: 100, img: 'https://play-lh.googleusercontent.com/jRC1B-vE-Y4qG5GasrCo-NjNgehL2fyc8SkOGvypQgKrqGOFH7gwZ_c0TI5v0QfqXw', description: 'PUBG de 240vp, en iyi vpler nebulax dan alınır.' },
                { id: 3, name: 'PUBG E-Pin', price: 100, img: 'https://play-lh.googleusercontent.com/jRC1B-vE-Y4qG5GasrCo-NjNgehL2fyc8SkOGvypQgKrqGOFH7gwZ_c0TI5v0QfqXw', description: 'PUBG de 240vp, en iyi vpler nebulax dan alınır.' },
            ]
        }
    ];

    return (
        <div style={style.container}>
            {response.map((category) => (
                <div key={category.id}>
                    <div style={style.homeTitle} className="homeTitle">{category.name}</div>
                    <hr style={style.hr} />
                    {category.products.map((product) => (
                        <div style={style.product} key={product.id}>
                            <img style={style.productImg} src={product.img} alt={product.name} />
                            <div style={style.productTitle} className="title">{product.name}</div>
                            <p style={style.productPrice}>{product.price.toLocaleString()} TL</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: '#181a1b',
        color: '#f9f9f9'
    },
    homeTitle: {
        fontSize: '25px',
        fontWeight: 'bold',
        margin: '10px',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    product: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        margin: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        float: 'left'
    },
    productTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '10px'
    },
    productImg: {
        width: '200px',
        height: '200px'
    },
    productPrice: {
        fontSize: '14px',
        margin: '10px'
    },
    hr: {
        width: '40%',
        border: '3px solid white',
        borderRadius: '40px',
        margin: 'auto',
        marginBottom: '20px'
    }
};

export default Shopping;