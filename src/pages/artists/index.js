import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { artistsData } from '../../data/artists';
import ArtistPage from './artist';
import { paramCase } from 'change-case';

const getArtistPath = (name) => name && `/artists/${paramCase(name)}`

const ArtistsPage = () => {
  return (
    <Router>
      <div>
        <h1>Artists</h1>
        <nav>
          <ul>
            {artistsData.map((dataItem) => (
              <li>
                <Link to={getArtistPath(dataItem.name)}>
                  {dataItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {artistsData.map((dataItem) => (
            <Route path={getArtistPath(dataItem.name)}>
              <ArtistPage
                name={dataItem.name}
                bio={dataItem.bio}
                picture={dataItem.picture}
                releases={dataItem.releases}
              />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default ArtistsPage