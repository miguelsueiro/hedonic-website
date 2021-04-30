import styled from '@emotion/styled';
import React from 'react'
import Text from '../../ui-system/components/text'
import Shape from '../../ui-system/components/shape';
import { Menu } from '../../ui-system/components/header';
import shape from '../../shapes/one.png'
import NewsletterForm from '../../newsletter-form';
import Spacer from '../../ui-system/components/spacer';

const IntroSection = styled.div`
  background-color: var(--c-darkBlue);
  color: var(--releasesContent);
  margin:
    calc(-1 * var(--pagePadding))
    calc(-1 * var(--pagePadding))
    0
    calc(-1 * var(--pagePadding))
  ;
  height: 30vh;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 1000px) {
    height: 80vh;
  }
`

const MenuSection = styled.div`
  position: absolute;
  left: var(--pagePadding);
  bottom: var(--pagePadding);
  z-index: 100;
`

const ShapeContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 5vh;
  transform: translate(-50%);
  margin: 0 auto;
  pointer-events: none;
  z-index: 1;
  display: flex;
  align-items: flex-end;
`

const DistributionSection = styled.div`
  padding: var(--space-l) 0;
  display: grid;
  place-content: center;

  @media (min-width: 1000px) {
    padding: var(--space-xl) 0;
  }
`

const LatestReleaseSection = styled.div`
  border-bottom: 1px solid var(--c-border);
  padding: var(--space-l) 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-m);

  @media (min-width: 1000px) {
    padding: var(--space-xl) 0;
    gap: var(--space-xl);
    grid-template-columns: 1fr 1fr 2fr;
  }
`

const NewsSection = styled.div`
  border-bottom: 1px solid var(--c-border);
  padding: var(--space-l) 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-m);

  @media (min-width: 1000px) {
    padding: var(--space-xl) 0;
    gap: var(--space-xl);
    grid-template-columns: 1fr 2fr 1fr;
  }
`

const HomePage = () => {
  return (
    <>
      <IntroSection>
        <MenuSection>
          <Menu />
        </MenuSection>

        <ShapeContainer>
          <Shape imageSrc={shape} size="calc(90vw + 5rem)" />
        </ShapeContainer>
      </IntroSection>
      <LatestReleaseSection>
        <Text size="l" color="red">latest release</Text>
        <div>
          <Text hasCaps>Refectori</Text>
          <Text size="l">Tundra</Text>
          <Spacer t="m">
            <Text maxWidth="60ch">
              Refectori is the project of the young catalan Xavier Longàs. Based on the experimental sound, that highlight physical and voluminous forms that roam glacial landscapes. Diving through dense and icy seas, it slowly emerges into light, encountering the earthly world between reverberated voices and nostalgic melodies.
            </Text>
          </Spacer>
        </div>
        <img alt="release cover" src="https://f4.bcbits.com/img/0022784123_10.jpg"/>
      </LatestReleaseSection>
        
      <div>
        <NewsSection>
          <Text size="l" color="red">latest news</Text>
          <div>
            <Text size="l" maxWidth="40ch">
              Dublab Hedonic Reversal 030 New Hedonic Reversal radio show in Dublab BCN. On air next wednesday 21st december at 4:00 PM. Tune in from here.
            </Text>
            <Spacer t="m">
              <Text>
                subscribe to Hedonic Reversal newsletter
              </Text>
              <NewsletterForm />
            </Spacer>
          </div>
        </NewsSection>
      </div>
      <DistributionSection>
        <Text align="center">
          Hedonic Reversal is distributed worldwide <br />exclusively by <Text display="inline" color="red">Envelope Estructure</Text>
        </Text>
      </DistributionSection>
    </>
  );
}

export default HomePage