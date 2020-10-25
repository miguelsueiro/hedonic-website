import { paramCase } from "param-case";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { artistsContent } from "./content/artists";
import ArtistsPage from "./pages/artists";
import ArtistPage from "./pages/artists/artist";
import ReleasesPage from "./pages/releases";
import ReleasePage from "./pages/releases/release";

const getReleasePath = (title) => title && `/releases/${paramCase(title)}`
const getArtistPath = (name) => name && `/artists/${paramCase(name)}`

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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/artists">Artists</Link>
            </li>
            <li>
              <Link to="/releases">Releases</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {artistsContent.map((dataItem) => (
            <Route path={getArtistPath(dataItem.name)}>
              <ArtistPage
                name={dataItem.name}
                bio={dataItem.bio}
                picture={dataItem.picture}
                releases={dataItem.releases}
              />
            </Route>
          ))}
          {getReleasesContent().map((content) => (
            <Route path={getReleasePath(content.title)}>
              <ReleasePage
                author={content.author}
                title={content.title}
                images={content.images}
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
