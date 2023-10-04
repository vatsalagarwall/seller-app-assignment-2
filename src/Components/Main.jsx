import React, { useState } from 'react';
import { data } from './data.js';
import rooms from './rooms.png';
import beds from './beds.png';
import bath from './bath.png';
import area from './area.png';
import location from './location.png';
import wishlist from './wishlist.png';
import sandclock from './sandclock.png';
import Header from './Header.jsx';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
  const [numCardsToShow, setNumCardsToShow] = useState(6);
  const [selectedCity, setSelectedCity] = useState('New York');
  const filteredData = data.filter((apartment) => apartment.city === selectedCity);
  const cardsToShow = filteredData.slice(0, numCardsToShow);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor:'#F5F4FD',
    marginTop:'-16px'
  };

  const cityButtonContainerStyle = {
    display: 'flex',
    gap: '20px', 
    marginTop:'50px'
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '10px',
    marginRight: '5px',
    backgroundColor:'#F5F4FD',
    paddingBottom:'40px',
  };

  const cardStyle = {
    width: 'calc(33.33% - 20px)',
    margin: '10px',
    position: 'relative',
  };

  const iconDataStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const wishlistIconStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '30px',
    height: '30px',
  };

  const statusBoxStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'white',
    color: '#373AE3',
    padding: '5px 10px',
    borderRadius: '20px',
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setNumCardsToShow(6); 
  };

  const showMore = () => {
    setNumCardsToShow(numCardsToShow + 3); 
  };

  return (
    <>
        <Header />
      <div style={containerStyle} >
        <div style={cityButtonContainerStyle}>
          {['New York', 'Mumbai', 'Paris', 'London'].map((city) => (
            <button
              key={city}
              type="button"
              className="btn btn-light"
              style={{
                backgroundColor: selectedCity === city ? '#373AE3' : '#ECEBFB',
                color: selectedCity === city ? 'white' : 'black',
                borderRadius: '20px',
                marginLeft: city === 'New York' ? '30px' : '0px',
                fontWeight: selectedCity === city ? 'bold' : 'normal',
              }}
              onClick={() => handleCityChange(city)}
            >
              {city}
            </button>
          ))}
        </div>
        <div>
          <button
            type="button"
            className="btn btn-light"
            style={{
              backgroundColor: '#ECEBFB',
              borderRadius: '20px',
              marginRight: '30px',
              marginTop:'50px',
              color:'#373AE3',
              borderColor:'#373AE3',
              fontWeight:'bolder'
            }}
          >
            View All →
          </button>
        </div>
      </div>

      <div className="row" style={cardContainerStyle}>
        {cardsToShow.map((apartment, index) => (
          <div key={index} className="col-md-4" style={cardStyle}>
            <div className="card" style={{ width: '100%' }}>
              <div style={statusBoxStyle}>{apartment.status}</div>
              <img src={wishlist} alt="Wishlist" style={wishlistIconStyle} />

              <img src={apartment.imageSrc} className="card-img-top" alt={apartment.name} style={{ height: '250px', borderRadius:'12px'}} />
              <div className="card-body">
                <p>
                  <img src={location} style={{ height: '20px', marginLeft: '-200px' }} />
                  <span>{apartment.location}</span>
                </p>
                <h5 className="card-title" style={{ textAlign: 'left', fontSize:'19px' }}>
                  {apartment.name}
                </h5>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    marginBottom: '-20px',
                  }}
                >
                  <div style={iconDataStyle}>
                    <img
                      src={rooms}
                      style={{
                        height: '40px',
                        marginLeft: '-30px',
                      }}
                      alt="Rooms"
                    />
                    <p>{apartment.rooms} Rooms</p>
                  </div>
                  <div style={iconDataStyle}>
                    <img
                      src={beds}
                      style={{
                        height: '40px',
                        marginLeft: '-5px',
                      }}
                      alt="Beds"
                    />
                    <p>{apartment.beds} Bed</p>
                  </div>
                  <div style={iconDataStyle}>
                    <img
                      src={bath}
                      style={{
                        height: '40px',
                        marginLeft: '-15px',
                      }}
                      alt="Bathrooms"
                    />
                    <p>{apartment.bathrooms} Bath</p>
                  </div>
                  <div style={iconDataStyle}>
                    <img
                      src={area}
                      style={{
                        height: '40px',
                        marginLeft: '-20px',
                      }}
                      alt="Area"
                    />
                    <p>{apartment.area_sqft} sft</p>
                  </div>
                </div>
                <hr />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p>
                    <span style={{ fontSize: '25px', color: '#373BE4' }}>
                      ${apartment.price_per_month_usd}
                    </span>{' '}
                    /month
                  </p>
                  <a href="#" className="btn" style={{ borderColor: '#373BE4', borderRadius: '30px', display: 'flex', alignItems: 'center', padding: '10px', color: '#373BE4', fontWeight: 'bold' }} onClick={()=>navigate('/readmore')}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {numCardsToShow < filteredData.length && (
        <div style={{ textAlign: 'center', marginTop: '-30px', backgroundColor:'#F5F4FD', padding:'30px' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={showMore}
            style={{ backgroundColor: '#373AE3', borderRadius: '20px' }}
          >
            <img src={sandclock} style={{ height: '27px' }} /> Show More
          </button>
        </div>
      )}
    </>
  );
}

export default Main;

