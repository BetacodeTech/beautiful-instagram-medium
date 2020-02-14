import React from 'react';
import "./style.css"
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium} from "@fortawesome/free-brands-svg-icons";

const MediumCard = () => {

  const title = useSelector(state => state.medium.title);
  const description = useSelector(state => state.medium.description);
  const image = useSelector(state => state.medium.image);
  const mediumAddress = useSelector(state => state.medium.mediumAddress);
  const readLength = useSelector(state => state.medium.readLength);

  return (
    <div className="medium-card">
      <div className="header"> 
        <FontAwesomeIcon icon={faMedium} className="icon"/>
        <div>
          <div className="writer">Medium.com / <span>{mediumAddress}</span></div>
          <div className="length">{readLength} read</div>
        </div>
      </div>
      
      <img className="image" src={image}></img>
      <h1 className="title">
        {title}
      </h1>
      <p className="description">
        {description}
      </p>
    </div>
  )
};

export default MediumCard;
