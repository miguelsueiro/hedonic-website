import styled from '@emotion/styled';
import React from 'react'
import { Link } from "react-router-dom";
import Text from '../../ui-system/components/text'
import Shape from '../../ui-system/components/shape';
import { Menu } from '../../ui-system/components/header';
import shape from '../../shapes/one.png'
import threeSmall from '../../shapes/three-small.svg'
import twoSmall from '../../shapes/two-small.png'
import bg from './bg.svg'
import IconArrow from './icon-arrow';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsletterForm from '../../newsletter-form';

const IntroSection = styled.div`
  background-color: var(--c-darkBlue);
  color: var(--releasesContent);
  margin:
    calc(-1 * var(--pagePadding))
    calc(-1 * var(--pagePadding))
    0
    calc(-1 * var(--pagePadding))
  ;
  height: 50vh;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 1000px) {
    height: 90vh;
  }
`

const MenuSection = styled.div`
  position: absolute;
  left: var(--pagePadding);
  bottom: var(--pagePadding);
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

const AboutSection = styled.div`
  background-color: var(--c-red);
  color: white;
  margin: 0 calc(-1 * var(--pagePadding));
  padding: var(--space-xl) var(--pagePadding) 0 var(--pagePadding);
`

const Divider = styled.div`
  background-image: url('${bg}');
  background-size: 1440px;
  background-position: top center;
  margin: 0 calc(-1 * var(--pagePadding));
  height: 19rem;
  background-repeat: repeat-x;
`

const ExploreSection = styled.div`
  display: grid;
  align-items: center;

  @media (min-width: 1000px) {
    grid-template-columns: 50% 50%;
  }
`

const LinksSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  max-width: max-content;
  gap: var(--space-m);

  @media (min-width: 1000px) {
    padding-right: var(--space-m);
  }
`

const SectionLink = styled(Link)`
  display: grid;
  grid-template-columns: auto auto;
  max-width: max-content;
  align-items: center;
  gap: var(--space-s);
`

const EndSection = styled.div`
  border-left: 1px solid var(--c-border);
  padding: var(--pagePadding);
`

const NewsSection = styled.div`
  padding-bottom: var(--pagePadding);
`

const NewsletterSection = styled.div`
  border-top: 1px solid var(--c-border);
  padding-top: var(--pagePadding);
`

const DistributionSection = styled.div`
  border-top: 1px solid var(--c-border);
  padding: var(--space-2xl) 0;
  display: grid;
  place-content: center;
`

const HomePage = () => {
  return (
    <>
      <IntroSection>
        <MenuSection>
          <Menu />
        </MenuSection>

        <ShapeContainer>
          <Shape imageSrc={shape} size="calc(70vw + 5rem)" />
        </ShapeContainer>
      </IntroSection>
      <AboutSection>
        <Text size="l">
          Hedonic Reversal is a record label based in Barcelona. Founded by Miguel Sueiro & Andrés Satué in 2016, the label intends to build a platform for emerging and consolidated musicians and sound projects from our environment. Intentionally stylistically wide, every edition has the sound experimentation, the direct contact with the artist and a carefully in-house designed artwork that dig deep in the main concept as a common denominator. Every artist is unique and every edition must reflect this idea. Hedonic Reversal also run a radio show under the nonprofit, community online radio Dublab BCN
        </Text>
      </AboutSection>
      <Divider />
      <ExploreSection>
        <LinksSection>
          <SectionLink to="/artists">
            <IconArrow color="var(--c-red)"/>
            <img src={twoSmall} alt="releases"/>
          </SectionLink>
          <SectionLink to="/releases">
            <IconArrow color="currentColor"/>
            <img src={threeSmall} alt="releases"/>
          </SectionLink>
        </LinksSection>
        <EndSection>
          <NewsSection>
            <Text size="l" color="red">latest news</Text>
            <Text size="l">
              Dublab Hedonic Reversal 030 New Hedonic Reversal radio show in Dublab BCN. On air next wednesday 21st december at 4:00 PM. Tune in from here.
            </Text>
          </NewsSection>
          <NewsletterSection>
            <Text size="l" color="red">
              subscribe to Hedonic <br />
              Reversal newsletter
            </Text>

            <NewsletterForm />

          </NewsletterSection>
        </EndSection>
      </ExploreSection>
      <DistributionSection>
        <Text align="center">
          Hedonic Reversal is distributed worldwide <br />exclusively by <Text display="inline" color="red">Envelope Estructure</Text>
        </Text>
      </DistributionSection>
    </>
  );
}

export default HomePage