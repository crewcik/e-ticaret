import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { id: 1, imgUrl: "https://oyuncumeskeni.tr/assets/img/product/valo7270.png", path: "/category-valorant", name: "Valorant" },
  { id: 2, imgUrl: "https://play-lh.googleusercontent.com/jRC1B-vE-Y4qG5GasrCo-NjNgehL2fyc8SkOGvypQgKrqGOFH7gwZ_c0TI5v0QfqXw", path: "/category-pubg", name: "PUBG" },
];

const CategorySlider = () => {
  return (
    <div style={{ width: '97.3%', margin: 'auto'}}>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px 0", display: "flex", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "20px", border: '2px solid #3d9fb8' }}>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
            {categories.map((category) => (
              <Col key={category.id} style={{ flex: "0 0 auto", textAlign: "center" }}>
                <Link to={category.path} style={{ textDecoration: "none", color: "black" }}>
                  <img src={category.imgUrl} alt={category.name} style={{ width: "120px", height: "120px", borderRadius: "10px" }} />
                  <p style={{ textTransform: 'uppercase', marginTop: "5px", fontSize: "14px", fontWeight: "bold", color: 'white' }}>{category.name}</p>
                </Link>
              </Col>
            ))}
          </div>
        </div>
    </div>
  );
};

export default CategorySlider;