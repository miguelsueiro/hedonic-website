import Button from "../../ui-system/components/button";
import Morph from "../../ui-system/components/morph";
import React from "react";
import Shape from "../../ui-system/components/shape";
import Spacer from "../../ui-system/components/spacer";
import shapeOne from "../../shapes/one.png";
import shapeThree from "../../shapes/three.png";
import shapeTwo from "../../shapes/two.png";

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    <Spacer t="l" />
    {children}
  </section>
);

const BrainPage = () => {
  return (
    <div>
      <h1>Brain</h1>

      <Spacer t="l" />

      <Section title="Shape">
        <Shape imageSrc={shapeOne} />
        <Shape imageSrc={shapeTwo} />
        <Shape imageSrc={shapeThree} />
      </Section>

      <Section title="Morph">
        <Morph imageSrc={shapeOne} />
        <Morph imageSrc={shapeTwo} />
        <Morph imageSrc={shapeThree} />
      </Section>

      <Section title="Button">
        <Button>Button</Button>
      </Section>
    </div>
  );
};

export default BrainPage;
