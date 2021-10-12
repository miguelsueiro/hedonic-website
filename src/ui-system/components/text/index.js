import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const TextWrapper = styled.div`
  font-size: ${(p) => `var(--text-${p.size})`};
  color: ${(p) => `var(--c-${p.color})`};
  text-align: ${(p) => p.align};
  display: ${(p) => p.display};
  max-width: ${(p) => p.maxWidth};
  ${(p) => p.noWrap && `white-space: nowrap`};

  ${(p) =>
    p.hasCaps &&
    css`
      letter-spacing: 0.7em;
      text-transform: uppercase;
    `};
`;

const Text = ({
  children,
  size,
  hasCaps,
  color,
  align,
  display,
  maxWidth,
  noWrap,
  ...props
}) => {
  return (
    <TextWrapper
      size={size}
      hasCaps={hasCaps}
      color={color}
      align={align}
      display={display}
      maxWidth={maxWidth}
      noWrap={noWrap}
      {...props}
    >
      {children}
    </TextWrapper>
  );
};

export default Text;
