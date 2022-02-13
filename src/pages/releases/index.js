import { Link } from "react-router-dom";
import { Menu } from "../../ui-system/components/header";
import React from "react";
import Shape from "../../ui-system/components/shape";
import Text from "../../ui-system/components/text";
import { artistsContent } from "../../content/artists";
import { getReleasePath } from "../../utilities";
import shape from "../../shapes/three.mp4";
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

const releasesList = getReleasesContent();

releasesList.sort((a, b) => {
  if (a.listPosition > b.listPosition) {
    return 1;
  } else {
    return -1;
  }
});

const PageWrapper = styled.div`
  position: relative;
`;

const ShapeContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  left: 0;
  pointer-events: none;
  z-index: -1;
  display: grid;
  place-items: center;

  @media (min-width: 1000px) {
    --shapeWidth: 80vw;
  }
`;

const LinkWrapper = styled.div`
  @media (min-width: 800px) {
    padding-left: ${(p) => p.index * 5}vw;
  }

  a {
    text-decoration: none;
    transition: 0.6s;
    margin-bottom: 1em;
    display: block;

    &:hover {
      transition: 0s;
      color: var(--c-red);
    }
  }
`;

const ReleasesPage = () => {
  return (
    <>
      <Menu />
      <PageWrapper className="mt-xl">
        <nav>
          <ul>
            {releasesList.map((release, index) => (
              <LinkWrapper key={index} index={index}>
                <Link to={getReleasePath(release.title)}>
                  <Text as="span" hasCaps>
                    {release.author}
                  </Text>
                  <Text isDimmed as="span">
                    {release.catNumber}
                  </Text>
                  <br />
                  <Text as="span" size="xl" display="block" maxWidth="30ch">
                    {release.title}
                  </Text>
                </Link>
              </LinkWrapper>
            ))}
          </ul>
        </nav>
        <ShapeContainer>
          <Shape
            maxWidth="var(--shapeWidth)"
            videoSrc={shape}
            size="calc(60vw + 20rem)"
            blendMode="lighten"
          />
        </ShapeContainer>
      </PageWrapper>
    </>
  );
};

export default ReleasesPage;
