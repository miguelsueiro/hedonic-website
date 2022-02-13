import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  background: ${(props) => props.blendBg};
  overflow: hidden;
  animation: ${fadeIn} 1s;
  pointer-events: none;
`;

const Video = styled.video`
  mix-blend-mode: ${(props) => props.blendMode};
  width: calc(100% + 20px);
  left: -10px;
  position: relative;
  outline: none;
  border: none;
  pointer-events: none;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

const Shape = ({
  videoSrc,
  blendMode,
  blendBg = "var(--bodyBg)",
  maxWidth,
}) => (
  <Wrapper maxWidth={maxWidth} blendBg={blendBg}>
    <Video
      src={videoSrc}
      playsInline
      autoPlay
      loop
      muted
      blendMode={blendMode}
    />
  </Wrapper>
);

export default Shape;
