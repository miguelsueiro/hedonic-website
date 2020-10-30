import styled from '@emotion/styled';
import React from 'react'
import { Link } from "react-router-dom";
import { artistsContent } from '../../content/artists';
import Shape from '../../ui-system/components/shape';
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
`

const ReleasesPage = () => {
  return (
    <PageWrapper>
      <h1>Releases</h1>
      <nav>
        <ul>
          {getReleasesContent().map((content, index) => (
            <li key={index}>
              <Link to={getReleasePath(content.title)}>
                {content.title} — {content.author}
              </Link>
            </li>
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