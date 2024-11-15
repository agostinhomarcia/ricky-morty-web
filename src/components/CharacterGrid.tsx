import styled from "styled-components";
import { CharacterCard } from "./CharacterCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/api";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #2196f3;
  color: white;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const CharacterGrid = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getCharacters(page),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Grid>
        {data?.results.map((character: any) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            location={character.location.name}
          />
        ))}
      </Grid>
      <Pagination>
        <Button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
          Previous
        </Button>
        <span>Page {page}</span>
        <Button
          onClick={() => setPage((p) => p + 1)}
          disabled={!data?.info.next}
        >
          Next
        </Button>
      </Pagination>
    </>
  );
};
