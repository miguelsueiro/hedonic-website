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
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { getArtistPath, getReleasePath } from "./utilities";

import ArtistPage from "./pages/artists/artist";
import ArtistsPage from "./pages/artists";
import BaseStyles from "./ui-system/components/base-styles";
import BrainPage from "./pages/brain";
import Header from "./ui-system/components/header";
import HomePage from "./pages/home";
import InfoPage from "./pages/info";
import Link from "./ui-system/components/link";
import React from "react";
import ReleasePage from "./pages/releases/release";
import ReleasesPage from "./pages/releases";
import { artistsContent } from "./content/artists";
import styled from "@emotion/styled";

const getReleasesContent = () => {
  let result = [];

  artistsContent.forEach((content, index) => {
    content.releases.forEach((obj) => {
      result.push(Object.assign(obj, { author: artistsContent[index].name }));
    });
  });

  return result;
};

const PageWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const FooterWrapper = styled.div`
  border-top: 1px solid var(--c-border);
  padding: var(--space-l) var(--pagePadding);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  transition: 0.2s;

  &:not(:hover) {
    color: var(--bodyContentDimmed);
  }

  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterLinksSection = styled.div`
  display: flex;

  & > * + * {
    @media (min-width: 1100px) {
      margin-left: var(--space-l);
    }
    margin-left: var(--space-m);
  }
`;

const MainWrapper = styled.div`
  padding: var(--pagePadding);
`;

const Footer = () => (
  <FooterWrapper>
    <FooterLinksSection>
      <Link to="/releases">releases</Link>
      <Link to="/artists">artists</Link>
      <Link to="/info">info</Link>
    </FooterLinksSection>
    <div>© Copyright Hedonic Reversal 2020.</div>
    <div>Art direction by Miguel Sueiro.</div>
    <div>
      Website by <Link href="https://hayk.design">Hayk</Link>
    </div>
  </FooterWrapper>
);

const App = () => {
  return (
    <Router>
      <BaseStyles />
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
            <Route path="/brain">
              <BrainPage />
            </Route>
            <Route path="/releases">
              <ReleasesPage />
            </Route>
            <Route path="/info">
              <InfoPage />
            </Route>
            <Route path="/artists">
              <ArtistsPage />
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
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
