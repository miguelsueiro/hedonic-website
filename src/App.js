import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { artistsContent } from "./content/artists";
import ArtistsPage from "./pages/artists";
import ArtistPage from "./pages/artists/artist";
import ReleasesPage from "./pages/releases";
import ReleasePage from "./pages/releases/release";
import { getArtistPath, getReleasePath } from "./utilities";
import BaseStyles from './ui-system/components/base-styles'

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

const App = () => {
  return (
    <Router>
      <BaseStyles />
      <div>
        <nav>
          <ul>
            <li>
              <NavLink className="menuNav" activeClassName="activeMenuNav" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="menuNav" activeClassName="activeMenuNav" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="menuNav" activeClassName="activeMenuNav" to="/artists">Artists</NavLink>
            </li>
            <li>
              <NavLink className="menuNav" activeClassName="activeMenuNav" to="/releases">Releases</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          {artistsContent.map((dataItem, index) => (
            <Route path={getArtistPath(dataItem.name)} key={index}>
              <ArtistPage
                name={dataItem.name}
                bio={dataItem.bio}
                picture={dataItem.picture}
                releases={dataItem.releases}
              />
            </Route>
          ))}
          {getReleasesContent().map((content, index) => (
            <Route path={getReleasePath(content.title)} key={index}>
              <ReleasePage
                author={content.author}
                title={content.title}
                images={content.images}
                catNumber={content.catNumber}
                credits={content.credits}
                description={content.description}
                releaseDate={content.releaseDate}
                format={content.format}
              />
            </Route>
          ))}
          <Route path="/releases">
            <ReleasesPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/artists">
            <ArtistsPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
