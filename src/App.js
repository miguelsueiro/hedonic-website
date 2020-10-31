import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { artistsContent } from "./content/artists";
import ArtistsPage from "./pages/artists";
import ArtistPage from "./pages/artists/artist";
import ReleasesPage from "./pages/releases";
import ReleasePage from "./pages/releases/release";
import { getArtistPath, getReleasePath } from "./utilities";
import BaseStyles from './ui-system/components/base-styles'
import Header from "./ui-system/components/header";

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
        <Header />
        <Switch>
          {artistsContent.map((dataItem, index) => (
            <Route path={getArtistPath(dataItem.name)} key={index}>
              <ArtistPage
                name={dataItem.name}
                bio={dataItem.bio}
                picture={dataItem.picture}
                releases={dataItem.releases}
                links={dataItem.links}
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
                albumId={content.albumId}
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
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default App;
