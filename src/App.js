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
import Header from "./ui-system/components/header";
import HomePage from "./pages/home";
import InfoPage from "./pages/info";
import styled from "@emotion/styled";

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

const PageWrapper = styled.div`
  min-height: 80vh;
  padding: var(--pagePadding);
`

const FooterWrapper = styled.div`
  border-top: 1px solid hsla(0,0%,0%,0.2);
  padding: var(--space-l) var(--pagePadding);
  opacity: 0.4;
  font-size: 0.8rem;
  letter-spacing: 0.05em;

  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
  }
`

const FooterLinksSection = styled.div`
  display: flex;
  
  & > * + * {
    @media (min-width: 1100px) {
      margin-left: var(--space-l);
    }
    margin-left: var(--space-m);
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterLinksSection>
      <NavLink to="/releases">releases</NavLink>
      <NavLink to="/artists">artists</NavLink>
      <NavLink to="/info">info</NavLink>
    </FooterLinksSection>
    <div>© Copyright Hedonic Reversal 2020.</div>
    <div>
      Art direction by Miguel Sueiro.
    </div>
    <div>Website by <a href="https://hayk.design">Hayk</a></div>
  </FooterWrapper>
)

const App = () => {
  return (
    <Router>
      <BaseStyles />
      <PageWrapper>
        <Header menuTop='70vh'/>
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
          <Route path="/info">
            <InfoPage />
          </Route>
          <Route path="/artists">
            <ArtistsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </PageWrapper>
      <Footer />
    </Router>
  );
}

export default App;
