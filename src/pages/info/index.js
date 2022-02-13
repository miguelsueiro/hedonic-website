import Link from "../../ui-system/components/link";
import { Menu } from "../../ui-system/components/header";
import React from "react";
import Shape from "../../ui-system/components/shape";
import Text from "../../ui-system/components/text";
import shape from "../../shapes/four.mp4";
import styled from "@emotion/styled";

const ShapeContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  left: 0;
  pointer-events: none;
  z-index: -1;
  display: grid;
  place-items: center;

  @media (min-width: 1000px) {
    --shapeWidth: 80vw;
  }
`;

const PageWrapper = styled.div`
  position: relative;
  padding-top: 30vh;

  @media (min-width: 1100px) {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    gap: var(--space-l);
  }
`;

const InfoPage = () => {
  return (
    <>
      <Menu />
      <PageWrapper className="mt-xl">
        <div>
          <Text size="l">Contact</Text>
          <p>
            General enquiries: hello@hedonicreversal.com
            <br />
            Press: press@hedonicreversal.com
          </p>
        </div>
        <div>
          <Text size="l">Listen</Text>
          <p>
            <Link href="https://www.google.com">Bandcamp</Link>
            <br />
            <Link href="https://www.google.com">Apple Music</Link>
            <br />
            <Link href="https://www.google.com">Spotify</Link>
          </p>
        </div>
        <div>
          <Text size="l">Follow</Text>
          <p>
            <Link href="https://www.google.com">Instagram</Link>
            <br />
            <Link href="https://www.google.com">Facebook</Link>
            <br />
            <Link href="https://www.google.com">Soundcloud</Link>
          </p>
        </div>
        <div>
          <Text size="l">Demo Submission</Text>
          <Text as="p" maxWidth="50ch">
            We are always open to listen to new music out there. So if you want
            to submit a demo, please send your links (soundcloud, bandcamp,
            cloud files...) to demos@hedonicreversal.com (NEVER attach files,
            please). We cannot guarantee feedback, please do not insist.
          </Text>
        </div>
      </PageWrapper>
      <ShapeContainer>
        <Shape videoSrc={shape} maxWidth="var(--shapeWidth)" />
      </ShapeContainer>
    </>
  );
};

export default InfoPage;
