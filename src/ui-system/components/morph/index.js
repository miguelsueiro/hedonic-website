import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  display: block;
  max-height: 100vh;
`;

const Morph = ({ imageSrc }) => {
  return <Image src={imageSrc} />;
};

export default Morph;
