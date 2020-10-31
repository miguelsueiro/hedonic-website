import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom';
import Text from '../../../ui-system/components/text';
import { getReleasePath } from '../../../utilities';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-m);
`

const ImagesSection = styled.div`
  margin-left: calc(-1 * var(--pagePadding));
`

const InfoSection = styled.div`
  
`

const NameSection = styled.div`
  text-align: center;
  margin-bottom: var(--space-xl);
`

const ArtistPage = ({
  name,
  bio,
  picture,
  releases,
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
          
          {releases.map((release, index) => (
            <div key={index} style={{border: '1px solid grey'}}>
              <Link to={getReleasePath(release.title)}>{release.title}</Link>
              <p>{release.title}</p>
              {release.images.map((image, index) => (
                <p key={index}>
                  {image}
                </p>
              ))}
            </div>
          ))}
        </InfoSection>
      </Wrapper>
    </div>
  );
}

export default ArtistPage