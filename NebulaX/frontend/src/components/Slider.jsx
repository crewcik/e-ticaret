import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const items = [
  {
    src: 'https://oyuncumeskeni.tr/assets/img/sliders/afis-tasarimi49716.png',
    altText: 'Hemen ücretsiz mağzanı oluştur!',
    caption: 'Tek tıkla mağzanı oluştur, satışlara başla!',
    key: 1,
  },
  {
    src: 'https://oyuncumeskeni.tr/assets/img/sliders/afis-tasarimi49716.png',
    altText: '%0 Komisyon',
    caption: '%0 komisyon ile satış yapmaya başla!',
    key: 2,
  },
];

const items2 = [
  {
    src: 'https://oyuncumeskeni.tr/assets/img/product/valo7270.png',
    altText: 'Valorant VPsi bizim işimiz.',
    caption: 'Uygun fiyatlı VP bizim işimiz.',
    key: 1,
  },
  {
    src: 'https://play-lh.googleusercontent.com/jRC1B-vE-Y4qG5GasrCo-NjNgehL2fyc8SkOGvypQgKrqGOFH7gwZ_c0TI5v0QfqXw',
    altText: 'Pubg UC bizim işimiz.',
    caption: 'Uygun fiyatlı UC bizim işimiz.',
    key: 2,
  },
];

function Slider() {
  const [index, setIndex] = useState(0);
  const [indexto, setIndexTo] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSelectTo = (selectedIndex, e) => {
    setIndexTo(selectedIndex);
  };

  return (
    <div style={styles.container}>
      <Carousel style={styles.homeSlider} activeIndex={index} onSelect={handleSelect}>
        {items.map((item) => (
          <Carousel.Item key={item.key}>
            <img style={styles.img} className="d-block w-100" src={item.src} alt={item.altText} />
            <Carousel.Caption>
              <h3 style={styles.itemTitle}>{item.caption}</h3>
              <h5 style={styles.itemContent}>{item.altText}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel style={styles.homeSlider2} activeIndex={indexto} onSelect={handleSelectTo}>
        {items2.map((item) => (
          <Carousel.Item key={item.key}>
            <img style={styles.img2} className="d-block w-100" src={item.src} alt={item.altText} />
            <Carousel.Caption>
              <h3 style={styles.itemTitle}>{item.caption}</h3>
              <h5 style={styles.itemContent}>{item.altText}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 'auto',
    width: '100%',
  },

  homeSlider: {
    flex: '1 1 65%',
    height: '342px',
    border: '2px solid #3d9fb8',
    backgroundColor: '#3d9fb8',
    margin: '20px',
    borderRadius: '20px',
  },

  homeSlider2: {
    flex: '1 1 27%',
    height: '342px',
    border: '2px solid #3d9fb8',
    backgroundColor: '#3d9fb8',
    margin: '20px',
    borderRadius: '20px',
  },

  img: {
    borderRadius: '20px',
    height: '337px',
  },

  img2: {
    borderRadius: '20px',
    height: '337px',
  },

  itemTitle: {
    color: '#fff',
    textShadow: '0 4px 10px rgba(0, 0, 0, 0.7)',
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '10px',
    borderRadius: '10px',
  },

  itemContent: {
    color: '#fff',
    fontSize: '18px',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '5px',
    borderRadius: '10px',
  },
};

export default Slider;