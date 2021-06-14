import styled from '@emotion/styled';
import React from 'react'
import { Link } from "react-router-dom";
import { artistsContent } from '../../content/artists';
import { Menu } from '../../ui-system/components/header';
import Shape from '../../ui-system/components/shape';
import Text from '../../ui-system/components/text';
import { getReleasePath } from '../../utilities'
import shape from '../../shapes/three.png'

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

const releasesList = getReleasesContent()

releasesList.sort((a, b) => {
  if(a.listPosition > b.listPosition) {
    return 1
  } else {
    return -1
  }
})

const PageWrapper = styled.div`
  position: relative;
`

const ShapeContainer = styled.div`
  position: absolute;
  top: calc(-1 * var(--space-xl));
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  pointer-events: none;
  z-index: -1;
  height: calc(12rem + 35vw);
  overflow: hidden;
`

const LinkWrapper = styled.div`
  a {
    display: flex;
    align-items: baseline;
    text-decoration: none;
    transition: 0.6s;
    
    &:hover {
      transition: 0s;
      color: var(--c-red);
    }

    @media(max-width: 1000px) {
      flex-direction: column;
      margin-bottom: var(--space-m);
    }
  }
`

const ReleasesPage = () => {
  return (
    <>
      <Menu />
      <PageWrapper className="mt-xl">
        <nav>
          <ul>
            {releasesList.map((release, index) => (
              <LinkWrapper key={index}>
                <Link to={getReleasePath(release.title)}>
                  <Text as="span" hasCaps>{release.author}</Text>
                  <Text as="span" size="xl">{release.title}</Text>
                </Link>
              </LinkWrapper>
            ))}
          </ul>
        </nav>
        <ShapeContainer>
          <Shape imageSrc={shape} size="calc(30vw + 20rem)" />
        </ShapeContainer>
      </PageWrapper>
    </>
  );
}

export default ReleasesPage