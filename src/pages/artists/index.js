import React from 'react'
import { Link } from "react-router-dom";
import { artistsContent } from '../../content/artists';
import { paramCase } from 'change-case';

const getArtistPath = (name) => name && `/artists/${paramCase(name)}`

const ArtistsPage = () => {
  return (
    <div>
      <h1>Artists</h1>
      <nav>
        <ul>
          {artistsContent.map((dataItem) => (
            <li>
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