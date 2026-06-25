import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, title, path, isHorizontal }) => {
  const navigate = useNavigate();

  if (isHorizontal) {
    return (
      <div 
        className="category-card category-scroll-item" 
        onClick={() => navigate(path)}
      >
        <img src={image} alt={title} />
        <div className="category-card-title" style={{ fontSize: "12px" }}>{title}</div>
      </div>
    );
  }

  return (
    <div className="category-card" style={{ cursor: 'pointer' }} onClick={() => navigate(path)}>
      <img src={image} alt={title} />
      <div className="category-card-title">{title}</div>
    </div>
  );
};

export default CategoryCard;
