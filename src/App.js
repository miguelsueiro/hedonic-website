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
import { getArtistPath, getReleasePath } from "./utilities";

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

const Noise = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://media4.giphy.com/media/xWlgutH3ZZF6w/giphy.gif?cid=ecf05e47in6pfwkljzhnub9zd5i95siqcdlny4x6p85g16cu&rid=giphy.gif&ct=g)`,
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: "1",
        '--baseFrequency': 3.33,
        mixBlendMode: 'soft-light',
        opacity: 0.1,
      }}
    />
  )
}

const App = () => {
  return (
    <Router>
<<<<<<< Updated upstream
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
=======
      <BaseStyles />
      <Noise />
      <PageWrapper>
        <MainWrapper>
          <Header menuTop="70vh" />
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
                  buyUrl={content.buyUrl}
                />
              </Route>
            ))}
            <Route path="/releases">
              <ReleasesPage />
            </Route>
            <Route path="/info">
              <InfoPage />
            </Route>
            <Route path="/artists">
              <ArtistsPage />
            </Route>
            <Route path="/ui-system">
              <UISystemPage />
>>>>>>> Stashed changes
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
