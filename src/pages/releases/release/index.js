import styled from '@emotion/styled';
import React from 'react'
import { Link } from "react-router-dom";
import Button from '../../../ui-system/components/button';
import { Menu } from '../../../ui-system/components/header';
import Player from '../../../ui-system/components/player';
import Text from '../../../ui-system/components/text';
import { getArtistPath } from '../../../utilities';

const breakpoint = 1000

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr auto 1fr;
`

const ImagesSection = styled.div`
  margin-left: calc(-1 * var(--pagePadding));
  
  @media (max-width: ${breakpoint}px) {
    margin-bottom: var(--space-m);
    margin-right: calc(-1 * var(--pagePadding));
    grid-column: 1/3;
    display: flex;
    overflow: auto;
    align-items: flex-end;
  }
`

const ImageWrapper = styled.div`  
  @media (max-width: ${breakpoint}px) {
    ${props => props.hasMultipleImages && `
      width: 90vw;
      margin-right: var(--space-s);
      flex-shrink: 0;
    `};
  }
`

const DetailsSection = styled.div`
  writing-mode: vertical-rl;
  padding: 0 var(--space-m);
  color: var(--bodyContentDimmed);
  letter-spacing: 0.2em;

  @media (max-width: ${breakpoint}px) {
    grid-column: 1/2;
    padding: 0 var(--space-m) 0 0;
  }
`

const CreditsSection = styled.div`
  color: var(--bodyContentDimmed);
`

const InfoSection = styled.div`
  @media (min-width: ${breakpoint + 1}px) {
    max-width: 34rem;
  }
`

const ArtistLink = styled(Link)`
  transition: color 0.6s;

  &:hover {
    color: var(--c-red);
    transition: color 0s;
  }
`

const ReleasePage = ({
  author,
  title,
  images,
  catNumber,
  credits,
  description,
  releaseDate,
  format,
  albumId,
  buyUrl,
}) => {
  const hasMultipleImages = images.length > 1
  console.log(hasMultipleImages)
  return (
    <>
      <Menu />
      <div className="mt-l mb-l">
        <Text hasCaps className="mb-s">
          <ArtistLink to={getArtistPath(author)}>{author}</ArtistLink>
        </Text>
        <Text as="h1" size="2xl">{title}</Text>
      </div>
      <Wrapper>
        <ImagesSection>
          {images && images.map((image, index) => {
            const imageSrc = require(`../../../content/images/releases/${image}`).default

            return(
              <ImageWrapper key={index} hasMultipleImages={hasMultipleImages}>
                <img src={imageSrc} alt={title}/>
              </ImageWrapper>
            )
          })}
        </ImagesSection>

        <DetailsSection>
          {catNumber && <span>{catNumber} — </span>}
          {releaseDate && <span>{releaseDate} — </span>}
          {format && <span>{format}</span>}
        </DetailsSection>

        <InfoSection>
          {albumId && (
            <div className="mb-m">
              <Player album={albumId}/>
            </div>
          )}

          {buyUrl && (
            <div className="mb-m">
              <Button as="a" href={buyUrl} target="_blank" hasFullWidth variant="fill">
                Buy release
              </Button>
            </div>
          )}

          {description && description.map((descriptionLine, index) => (
            <p key={index}>{descriptionLine}</p>
          ))}

          {credits && credits.map((creditLine) => (
            <CreditsSection>
              {creditLine}
              <br/>
            </CreditsSection>
          ))}

        </InfoSection>
        
      </Wrapper>
    </>
  );
}

export default ReleasePage