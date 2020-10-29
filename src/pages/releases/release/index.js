import React from 'react'
import { Link } from "react-router-dom";
import { getArtistPath } from '../../../utilities';

const ReleasePage = ({
  author,
  title,
  images,
  catNumber,
  credits,
  description,
  releaseDate,
  format,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      
      <Link to={getArtistPath(author)}>{author}</Link>

      {catNumber && <p>{catNumber}</p>}
      {releaseDate && <p>{releaseDate}</p>}
      {format && <p>{format}</p>}

      {credits && credits.map((creditLine) => (
        <>
          {creditLine}
          <br/>
        </>
      ))}

      {description && description.map((descriptionLine, index) => (
        <p key={index}>{descriptionLine}</p>
      ))}
      
      {images && images.map((image, index) => (
        <div key={index} style={{border: '1px solid grey'}}>
          {image}
        </div>
      ))}
    </div>
  );
}

export default ReleasePage