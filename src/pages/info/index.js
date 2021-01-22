import styled from '@emotion/styled';
import React from 'react'
import { Menu } from '../../ui-system/components/header';
import Text from '../../ui-system/components/text';

const PageWrapper = styled.div`
  position: relative;

  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    
    & > * + * {
      margin-left: var(--space-xl);
    }
  }
`

const InfoPage = () => {
  return (
    <>
      <Menu />
      <PageWrapper className="mt-xl">
        <div>
          <Text size="l">
            Contact
          </Text>
          <p>
            General enquiries: hello@hedonicreversal.com
            <br />
            Press: press@hedonicreversal.com
          </p>
        </div>
        <div>
          <Text size="l">
            Listen
          </Text>
          <p>
            <a href="https://www.google.com">Bandcamp</a><br />
            <a href="https://www.google.com">Apple Music</a><br />
            <a href="https://www.google.com">Spotify</a>
          </p>
        </div>
        <div>
          <Text size="l">
            Follow
          </Text>
          <p>
            <a href="https://www.google.com">Instagram</a><br />
            <a href="https://www.google.com">Facebook</a><br />
            <a href="https://www.google.com">Soundcloud</a>
          </p>
        </div>
        <div>
          <Text size="l">
            Demo Submission
          </Text>
          <p>
            We are always open to listen to new music out there. So if you want to submit a demo, please
            send your links (soundcloud, bandcamp, cloud files...) to demos@hedonicreversal.com
            (NEVER attach files, please).
            We cannot guarantee feedback, please do not insist.
          </p>
        </div>
      </PageWrapper>
    </>
  );
}

export default InfoPage