import React from 'react'
import { Link } from "react-router-dom";
import { getArtistPath } from '../../../utilities';

const ReleasePage = ({
  author,
  title,
  images,
}) => {
  return (
    <div>
      <h2>title {title}</h2>
      
      <Link to={getArtistPath(author)}>{author}</Link>
      
      {images && images.map((image, index) => (
        <div key={index} style={{border: '1px solid grey'}}>
          {image}
        </div>
      ))}
    </div>
  );
}

export default ReleasePage