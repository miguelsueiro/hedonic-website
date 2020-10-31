import React from 'react'
import { Link } from 'react-router-dom';
import { getReleasePath } from '../../../utilities';

const ArtistPage = ({
  name,
  bio,
  picture,
  releases,
}) => {
  const pictureSrc = require(`../../../content/images/artists/${picture}`).default
  
  return (
    <div>
      <h1>{name}</h1>
      
      {bio.map((bioLine, index) => (
        <p key={index}>{bioLine}</p>  
      ))}

      <img src={pictureSrc} alt={name}/>
       
      {releases.map((release, index) => (
        <div key={index} style={{border: '1px solid grey'}}>
          <Link to={getReleasePath(release.title)}>{release.title}</Link>
          <p>{release.title}</p>
          {release.images.map((image, index) => (
            <p key={index}>
              {image}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ArtistPage