import Link from "../../ui-system/components/link";
import { Menu } from "../../ui-system/components/header";
import { NavLink } from "react-router-dom";
import NewsletterForm from "../../newsletter-form";
import React from "react";
import Shape from "../../ui-system/components/shape";
import Spacer from "../../ui-system/components/spacer";
import Text from "../../ui-system/components/text";
import { artistsContent } from "../../content/artists";
import { getReleasePath } from "../../utilities";
import { latestNewsContent } from "../../content/latest-news";
import { latestReleaseContent } from "../../content/latest-release";
import shape from "../../shapes/one.mp4";
import styled from "@emotion/styled";

const IntroSection = styled.div`
  background-color: var(--c-darkBlue);
  color: var(--releasesContent);
  margin: calc(-1 * var(--pagePadding)) calc(-1 * var(--pagePadding)) 0
    calc(-1 * var(--pagePadding));
  height: 50vh;
  position: relative;
  overflow: hidden;

  @media (min-width: 1000px) {
    height: 90vh;
  }
`;

const MenuSection = styled.div`
  position: absolute;
  left: var(--pagePadding);
  bottom: var(--pagePadding);
  z-index: 100;
`;

const ShapeContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 5vh;
  transform: translate(-50%);
  margin: 0 auto;
  pointer-events: none;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  width: 100vw;
`;

const DistributionSection = styled.div`
  padding: var(--space-l) 0;
  display: grid;
  place-content: center;

  @media (min-width: 1000px) {
    padding: var(--space-xl) 0;
  }
`;

const LatestReleaseSection = styled.div`
  border-bottom: 1px solid var(--c-border);
  padding: var(--space-l) 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-m);

  @media (min-width: 1000px) {
    padding: var(--space-xl) 0;
    gap: var(--space-xl);
    grid-template-columns: 1fr 1fr 2fr;
  }
`;

const NewsSection = styled.div`
  border-bottom: 1px solid var(--c-border);
  padding: var(--space-l) 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-m);

  @media (min-width: 1000px) {
    padding: var(--space-xl) 0;
    gap: var(--space-xl);
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const ReleaseImageLink = styled(NavLink)`
  display: block;
`;

const HomePage = () => {
  const getLatestRelease = (id) => {
    let result;
    artistsContent.forEach((artist) => {
      artist.releases.forEach((release) => {
        if (release.id === id) {
          result = release;
        }
      });
    });
    return result;
  };

  const latestRelease = getLatestRelease(latestReleaseContent.id);

  const getLatestReleaseImage = () => {
    return latestReleaseContent.image;
  };

  const latestReleaseImageSrc =
    require(`../../content/images/releases/${getLatestReleaseImage()}`).default;

  return (
    <>
      <IntroSection>
        <MenuSection>
          <Menu />
        </MenuSection>

        <ShapeContainer>
          <Shape
            videoSrc={shape}
            blendMode="lighten"
            blendBg="var(--c-darkBlue)"
          />
        </ShapeContainer>
      </IntroSection>

      <LatestReleaseSection>
        <Text size="l" color="red">
          latest release
        </Text>
        <div>
          <Text hasCaps>{latestRelease.author}</Text>
          <Text size="l">{latestRelease.title}</Text>
          {latestReleaseContent.description &&
            latestReleaseContent.description.map((content, index) => (
              <Text as="p" maxWidth="60ch" key={index}>
                {content}
              </Text>
            ))}
          <Link hasUnderline to={getReleasePath(latestRelease.title)}>
            See release
          </Link>
        </div>
        <ReleaseImageLink to={getReleasePath(latestRelease.title)}>
          <img alt="release cover" src={latestReleaseImageSrc} />
        </ReleaseImageLink>
      </LatestReleaseSection>

      {latestNewsContent && (
        <NewsSection>
          <Text size="l" color="red">
            latest news
          </Text>
          <div>
            <Text size="l" maxWidth="40ch">
              {latestNewsContent}
            </Text>
            <Spacer t="m">
              <Text>subscribe to Hedonic Reversal newsletter</Text>
              <NewsletterForm />
            </Spacer>
          </div>
        </NewsSection>
      )}
      <DistributionSection>
        <Text align="center">
          Hedonic Reversal is distributed worldwide <br />
          exclusively by{" "}
          <Text display="inline" color="red">
            Envelope Estructure
          </Text>
        </Text>
      </DistributionSection>
    </>
  );
};

export default HomePage;
