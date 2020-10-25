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
      
      <p>{bio}</p>
      <p>{picture}</p>
      
      {releases.map((release, index) => (
        <div key={index} style={{border: '1px solid grey'}}>
          <Link to={getReleasePath(release.title)}>{release.title}</Link>
          <p>{release.title}</p>
          <p>{release.description}</p>
          {release.images.map((image) => (
            <p>
              {image}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ArtistPage