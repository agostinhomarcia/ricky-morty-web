import { styled } from "styled-components";

export const DetailsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CharacterHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const CharacterImage = styled.img`
  width: 350px;
  height: 525px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const InfoItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;

  h3 {
    font-size: 1rem;
    color: #6c757d;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1.1rem;
    color: #212529;
    margin: 0;
    font-weight: 500;
  }
`;

export const BackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-bottom: 1rem;

  &:hover {
    background: #0056b3;
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
