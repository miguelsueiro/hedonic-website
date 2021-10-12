import React from 'react'
import { Link } from "react-router-dom";
import { artistsContent } from '../../content/artists';
import { getReleasePath } from '../../utilities'
import { Link } from "react-router-dom";
import { Menu } from "../../ui-system/components/header";
import Morph from "../../ui-system/components/morph";
import React from "react";
import Text from "../../ui-system/components/text";
import { artistsContent } from "../../content/artists";
import { getReleasePath } from "../../utilities";
import shape from "../../shapes/three.png";
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
  left: 0px;
  width: 100%;
  display: grid;
  place-items: center;
  pointer-events: none;
  z-index: -1;
  height: 100vh;
  overflow: hidden;
`;

const LinkWrapper = styled.div`
  margin-bottom: var(--space-m);

  a {
    display: block;
    align-items: start;
    text-decoration: none;
    transition: 0.6s;

    &:hover {
      transition: 0s;
      color: var(--c-red);
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      margin-bottom: var(--space-m);
    }
  }
`;

const ReleaseMeta = styled.span`
  display: flex;
  gap: var(--space-s);
`;

const ReleaseCatNum = styled.span`
  opacity: 0.5;
`;

const ReleasesPage = () => {
  return (
    <>
      <Menu />
      <PageWrapper className="mt-xl">
        <nav>
          <ul>
            {releasesList.map((release, index) => {
              return (
                <LinkWrapper key={index}>
                  <Link to={getReleasePath(release.title)}>
                    <ReleaseMeta>
                      <Text as="span" hasCaps>
                        {release.author}
                      </Text>
                      <ReleaseCatNum>{release.catNumber}</ReleaseCatNum>
                    </ReleaseMeta>
                    <Text as="span" size="xl">
                      {release.title}
                    </Text>
                  </Link>
                </LinkWrapper>
              );
            })}
          </ul>
        </nav>
        <ShapeContainer>
          <Morph imageSrc={shape} />
        </ShapeContainer>
      </PageWrapper>
    </>
  );
};

export default ReleasesPage;
