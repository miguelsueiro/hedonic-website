import React from "react";
import Shape from "../../ui-system/components/shape";
import Text from "../../ui-system/components/text";
import shape from "../../shapes/two.mp4";
import styled from "@emotion/styled";

const Demo = styled.div`
  border: var(--space-s) solid var(--c-border);
  padding: var(--space-l);
`;

const UISystemPage = () => {
  return (
    <>
      <Text as="h1" size="xl">
        hedonic reversal UI system
      </Text>

      <Text as="h2" size="l">
        shape
      </Text>

      <Demo>
        <Shape videoSrc={shape} />
      </Demo>
    </>
  );
};

export default UISystemPage;
