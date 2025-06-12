import styled from "@emotion/styled";

// Results Section
export const ResultsSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 3rem;
`;

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ResultsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ResetButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

// Results grid and cards
export const ResultsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface ResultCardProps {
  bgColor: string;
}
export const ResultCard = styled.div<ResultCardProps>`
  background: ${({ bgColor }) => bgColor}cc;
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
`;

export const CardIcon = styled.div<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  padding: 0.75rem;
  margin: 0 auto 0.5rem;
  display: inline-flex;
  color: white;
`;

export const ResultLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
`;

export const ResultValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ResultDesc = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 0.5rem;
`;

// Safety Card
export const SafetyCard = styled.div`
  background: rgba(251, 191, 36, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const SafetyHeader = styled.h3`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;
