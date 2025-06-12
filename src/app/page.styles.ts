import { css } from "@emotion/react";
import styled from "@emotion/styled";

// Page wrapper with gradient background and light text
export const PageWrapper = styled.div`
  min-height: 100vh;
  color: #f3f4f6;
`;

// Container to center content
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

// Calculator Card
export const CalculatorCard = styled.div<{ animate: boolean }>`
  background: rgba(8, 7, 7, 0.71);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.66);
  padding: 1.5rem;
  margin-bottom: 3rem;
  animation-play-state: ${(props) => (props.animate ? "running" : "paused")};

  &:hover {
    animation-play-state: "running";
    cursor: pointer;
  }
`;

// Grid for two columns in the calculator card
export const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// Column styling
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// Section header with icon
export const SectionHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

// Input group and wrapper
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Unit = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: #9ca3af;
`;

// Button row for experience level
export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`;

interface ExperienceButtonProps {
  selected: boolean;
}
export const ExperienceButton = styled.button<ExperienceButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.3s;
  ${({ selected }) =>
    selected &&
    css`
      background: #a777e3;
      border-color: #a777e3;
      color: white;
    `}
`;

// Select field styling
export const SelectField = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  color: #111827;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(167, 119, 227, 0.3);
  }
`;

// Grid row for intensity options
export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

interface IntensityOptionProps {
  selected: boolean;
}
export const IntensityOption = styled.div<IntensityOptionProps>`
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  ${({ selected }) =>
    selected &&
    css`
      border-color: #a777e3;
      background-color: rgba(167, 119, 227, 0.1);
    `}
`;

export const OptionLabel = styled.div`
  font-weight: 500;
  margin-top: 0.5rem;
`;

// Button container and calculate button
export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

export const CalculateButton = styled.button`
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:hover {
    background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );
    animation: slidebg 5s linear infinite;
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    :before {
      opacity: 1;
    }
  }
`;

// Info Cards for mushroom information
export const InfoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoHeader = styled.div<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: inline-flex;
  color: white;
  margin-bottom: 0.75rem;
`;

export const InfoTitle = styled.h4`
  font-weight: bold;
  font-size: 1.125rem;
  margin: 0.5rem 0;
`;

export const InfoText = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

export const InfoStats = styled.div`
  font-size: 0.875rem;
  color: #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
