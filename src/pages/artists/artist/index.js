import React from 'react'
import { Link } from 'react-router-dom';
import { getReleasePath } from '../../../utilities';

const ArtistPage = ({
  name,
  bio,
  picture,
  releases,
}) => {
  
  return (
    <div>
      <h2>{name}</h2>
      
      {bio.map((bioLine, index) => (
        <p key={index}>{bioLine}</p>  
      ))}

       
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