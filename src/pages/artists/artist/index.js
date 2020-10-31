import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom';
import Text from '../../../ui-system/components/text';
import { getReleasePath } from '../../../utilities';

const Wrapper = styled.div`
  grid-template-columns: 2fr 1fr;
  gap: var(--space-m);

  @media (min-width: 1001px) {
    display: grid;
  }
`

const ImagesSection = styled.div`
  margin-left: calc(-1 * var(--pagePadding));

  @media (max-width: 1000px) {
    margin-right: calc(-1 * var(--pagePadding));
  }
`

const InfoSection = styled.div`
  
`

const NameSection = styled.div`
  text-align: center;
  margin-bottom: var(--space-xl);
  `

const ReleasesSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-m);
  `

const LinksSection = styled.div`
  display: flex;
  margin-bottom: var(--space-m);
`

const ArtistLink = styled.a`
  text-decoration: underline;
  text-underline-position: under;
  margin-right: var(--space-s);
`

const ArtistPage = ({
  name,
  bio,
  picture,
  releases,
  links,
}) => {
  const pictureSrc = require(`../../../content/images/artists/${picture}`).default
  
  return (
    <div className="mt-l">
      <NameSection>
        <Text hasCaps size="l">{name}</Text>
      </NameSection>
      <Wrapper>
        <ImagesSection>
          <img src={pictureSrc} alt={name}/>
        </ImagesSection>

        <InfoSection>
          {bio.map((bioLine, index) => (
            <p key={index}>{bioLine}</p>  
          ))}
          
          <LinksSection>
            {links && Object.entries(links).map(([key, value], index) => (
              <ArtistLink href={value}>{key}</ArtistLink>
            ))}
          </LinksSection>

          {releases.length > 0 && (
            <div className="mb-s">— Releases</div>
          )}

          <ReleasesSection>
            {releases.map((release, index) => {
              const coverImageSrc = require(`../../../content/images/releases/${release.coverImage}`).default

              return (
                <Link
                  to={getReleasePath(release.title)}
                  key={index}
                >
                  {release.coverImage && (
                    <img src={coverImageSrc} alt={release.title}/>
                  )}
                </Link>
              )
            })}
          </ReleasesSection>
        </InfoSection>
      </Wrapper>
    </div>
  );
}

export default ArtistPage