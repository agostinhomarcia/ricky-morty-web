import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getCharacters } from "../../services/api";
import { GridContainer, CharacterCard, CharacterImage } from "./styles";
import { CharacterResponse } from "../../types/character";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";

export function Characters() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery<CharacterResponse>({
    queryKey: ["characters", page],
    queryFn: () => getCharacters({ page }),
  });

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <>
      <GridContainer>
        {data.results.map((character) => (
          <CharacterCard
            key={character.id}
            onClick={() => navigate(`/character/${character.id}`)}
          >
            <CharacterImage src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </CharacterCard>
        ))}
      </GridContainer>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        hasNext={!!data.info.next}
        hasPrevious={!!data.info.prev}
      />
    </>
  );
}
