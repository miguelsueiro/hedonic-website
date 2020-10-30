import React from 'react'
import { Link } from "react-router-dom";
import { artistsContent } from '../../content/artists';
import { getReleasePath } from '../../utilities'

const getReleasesContent = () => {
  let result = []

  artistsContent.forEach((content, index) => {
    content.releases.forEach(obj => {
      result.push(
        Object.assign(obj, {author: artistsContent[index].name})
      );
    })
  });
  
  return result
}

const ReleasesPage = () => {
  return (
    <div>
      <h1>Releases</h1>
      <nav>
        <ul>
          {getReleasesContent().map((content, index) => (
            <li key={index}>
              <Link to={getReleasePath(content.title)}>
                {content.title} — {content.author}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ReleasesPage