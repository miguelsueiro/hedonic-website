import React, { Fragment } from "react";
import Shape from "../../ui-system/components/shape";
import Text from "../../ui-system/components/text";
import shape from "../../shapes/two.mp4";
import styled from "@emotion/styled";
import Button from '../../ui-system/components/button';
import Input from "../../ui-system/components/input";
import Logo from '../../ui-system/components/logo/index';
import Player from '../../ui-system/components/player/index';
import Spacer from "../../ui-system/components/spacer";

const Demo = styled.div`
  border: 2px solid var(--c-border);
  padding: var(--space-m);
  margin-bottom: var(--space-l);
`;

const contents = [
  {
    title: 'Button',
    demo: <Button>Button</Button>
  },
  {
    title: 'Shape',
    demo: <Shape videoSrc={shape} />
  },
  {
    title: 'Input',
    demo: <Input />
  },
  {
    title: 'Logo',
    demo: <Logo />
  },
  {
    title: 'Player',
    demo: <Player album="1635759303" />
  },
  {
    title: 'Text',
    demo: (
      <>
        <Text>Text</Text>
        <Text size="l">Text</Text>
        <Text size="xl">Text</Text>
      </>
    )
  },
]

const UISystemPage = () => {
  return (
    <>
      <Spacer b="l"/>
      <Text as="h1" size="xl">
        hedonic reversal UI system
      </Text>
      <Spacer b="l"/>

      {contents.map((content, index) => (
        <Fragment key={index}>
          <Text as="h2" size="l">
            {content.title}
          </Text>
          <Spacer b="m"/>
          <Demo>
            {content.demo}
          </Demo>
        </Fragment>
      ))}
    </>
  );
};

export default UISystemPage;
