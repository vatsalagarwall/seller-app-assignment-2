import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data'; 
import rooms from './rooms.png';
import beds from './beds.png';
import bath from './bath.png';
import area from './area.png';
import location from './location.png';

function ReadMore() {
  const { id } = useParams();
  const apartment = data.find((item) => item.id === id);

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  const iconDataStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    width: '100%', 
    height: 'auto', 
  };

  return (
    <div className="card">
      <img
        src={apartment.imageSrc}
        className="card-img-top"
        alt={apartment.name}
        style={imageStyle}
      />
      <div className="card-body">
        <p>
          <img src={location} style={{ height: '20px', marginLeft: '-200px' }} />
          <span>{apartment.location}</span>
        </p>
        <h5 className="card-title" style={{ textAlign: 'left', fontSize: '19px' }}>
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
         
        </div>
      </div>
    </div>
  );
}

export default ReadMore;
