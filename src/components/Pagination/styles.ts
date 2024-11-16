import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
`;

export const PageButton = styled.button<{ isActive?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: ${(props) => (props.isActive ? "#007bff" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#333")};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${(props) => (props.isActive ? "#0056b3" : "#f5f5f5")};
  }

  &:disabled {
    background: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

export const PageNumbers = styled.div`
  display: flex;
  gap: 0.5rem;
`;
