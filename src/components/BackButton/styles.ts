import styled from "styled-components";

export const StyledBackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #0056b3;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;
