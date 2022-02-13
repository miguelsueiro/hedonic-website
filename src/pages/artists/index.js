import { Link } from "react-router-dom";
import { Menu } from "../../ui-system/components/header";
import React from "react";
import Shape from "../../ui-system/components/shape";
import Text from "../../ui-system/components/text";
import { artistsContent } from "../../content/artists";
import { getArtistPath } from "../../utilities";
import shape from "../../shapes/two.mp4";
import styled from "@emotion/styled";

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1001px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ArtistLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameSection = styled.div`
  color: white;
  position: absolute;
  text-align: center;
`;

const ShapeContainer = styled.div`
  position: absolute;
  top: -9rem;

  margin: 0 auto;
  pointer-events: none;
  z-index: -1;

  @media (min-width: 1000px) {
    top: -12rem;
    --shapeWidth: 80vw;
  }
`;

const ArtistsPage = () => {
  return (
    <>
      <Menu />
      <ShapeContainer>
        <Shape videoSrc={shape} maxWidth="var(--shapeWidth)" />
      </ShapeContainer>
      <ArtistsGrid className="mt-xl">
        {artistsContent.map((artist, index) => {
          const pictureSrc =
            require(`../../content/images/artists/${artist.picture}`).default;

          return (
            <ArtistLink key={index} to={getArtistPath(artist.name)}>
              <NameSection>
                <Text hasCaps>{artist.name}</Text>
              </NameSection>
              <img src={pictureSrc} alt={artist.name} />
            </ArtistLink>
          );
        })}
      </ArtistsGrid>
    </>
  );
};

export default ArtistsPage;
