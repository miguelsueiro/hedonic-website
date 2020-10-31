import styled from '@emotion/styled';
import React from 'react'
import { Link } from "react-router-dom";
import Player from '../../../ui-system/components/player';
import { getArtistPath } from '../../../utilities';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr auto 1fr;
`

const ImagesSection = styled.div`
  margin-left: calc(-1 * var(--pagePadding));
`

const DetailsSection = styled.div`
  writing-mode: vertical-rl;
  padding: 0 var(--space-m);
  opacity: 0.5;
  letter-spacing: 0.1em;
`

const CreditsSection = styled.div`
  opacity: 0.5;
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
}) => {
  return (
    <>
      <h1>{title}</h1>
      <Link to={getArtistPath(author)}>{author}</Link>
      <Wrapper>
        <ImagesSection>
          {images && images.map((image, index) => {
            const imageSrc = require(`../../../content/images/releases/${image}`).default

            return(
              <div key={index}>
                <img src={imageSrc} alt={title}/>
              </div>
            )
          })}
        </ImagesSection>

        <DetailsSection>
          {catNumber && <span>{catNumber} - </span>}
          {releaseDate && <span>{releaseDate} - </span>}
          {format && <span>{format}</span>}
        </DetailsSection>

        <div>
          {albumId && (
            <div className="mb-m">
              <Player album={albumId}/>
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

        </div>
        
      </Wrapper>
    </>
  );
}

export default ReleasePage