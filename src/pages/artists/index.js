import React from 'react'
import { Link } from "react-router-dom";
import { artistsContent } from '../../content/artists';
import { getArtistPath } from '../../utilities';

const ArtistsPage = () => {
  return (
    <div>
      <h1>Artists</h1>
      <nav>
        <ul>
          {artistsContent.map((dataItem, index) => (
            <li key={index}>
              <Link to={getArtistPath(dataItem.name)}>
                {dataItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ArtistsPage