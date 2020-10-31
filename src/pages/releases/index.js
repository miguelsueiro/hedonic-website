import styled from '@emotion/styled';
import React from 'react'
import { Link } from "react-router-dom";
import { artistsContent } from '../../content/artists';
import Shape from '../../ui-system/components/shape';
import Text from '../../ui-system/components/text';
import { getReleasePath } from '../../utilities'
import shape from './sh.png'

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
  position: relative;
`

const ShapeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  pointer-events: none;
  z-index: -1;
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
  }
`

const ReleasesPage = () => {
  return (
    <PageWrapper>
      <nav>
        <ul>
          {getReleasesContent().map((release, index) => (
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
  );
}

export default ReleasesPage