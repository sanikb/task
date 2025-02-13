// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Sales.css';

// eslint-disable-next-line react/prop-types
export default function Sales({ img, title, description, linkText }) {
  return (
    <div className="salcontainer">
      <div className="text-content">
        <p>{title}</p>
        <p>{description}</p>
        <p>
          <a href="#">{linkText}</a>
        </p>
      </div>
      <div className="sales-img">
        <img src={img} alt="Sales" />
      </div>
    </div>
  );
}
