import styled from "@emotion/styled";

export const InfoCard = styled.div`
  background: rgba(8, 7, 7, 0.71);
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
