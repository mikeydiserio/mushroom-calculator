import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const InputField = styled.input`
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
