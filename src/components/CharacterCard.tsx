import styled from "styled-components";

interface CharacterCardProps {
  name: string;
  image: string;
  status: string;
  species: string;
  location: string;
}

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background: #fff;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Status = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: ${({ status }) =>
    status === "Alive" ? "#4CAF50" : status === "Dead" ? "#f44336" : "#9e9e9e"};
  color: white;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const CharacterCard = ({
  name,
  image,
  status,
  species,
  location,
}: CharacterCardProps) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Info>
        <Status status={status}>{status}</Status>
        <h3>{name}</h3>
        <p>{species}</p>
        <p>Last seen: {location}</p>
      </Info>
    </Card>
  );
};
