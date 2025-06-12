"use client";

import styled from "@emotion/styled";

export const HeaderElement = styled.header`
  background: rgba(8, 7, 7, 0.71);
  backdrop-filter: blur(10px);
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.66);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeaderComponent = () => {
  return (
    <HeaderElement>
      <Title>Psychedelic Dosage Calculator</Title>
      <Subtitle>
        Find your perfect mushroom dosage based on your body and desired
        experience
      </Subtitle>
    </HeaderElement>
  );
};

export default HeaderComponent;
