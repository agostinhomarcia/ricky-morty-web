import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 3rem;
`;

export const CharacterImage = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CharacterName = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;
export const StatusBadge = styled.span<{ status: string }>`
  background: ${(props) => (props.status === "Alive" ? "#27ae60" : "#e74c3c")};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
`;

export const InfoCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;

  h3 {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  p {
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const BackButton = styled.button`
  background: #0084ff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #0066cc;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  gap: 1rem;

  h2 {
    color: #dc3545;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
`;
