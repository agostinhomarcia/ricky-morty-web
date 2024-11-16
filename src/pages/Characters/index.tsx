import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../services/api";
import {
  CharactersContainer,
  CharactersGrid,
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  PageTitle,
} from "./styles";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Pagination } from "../../components/Pagination";

interface Character {
  id: number;
  name: string;
  image: string;
}

export function Characters() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: () => getCharacters(currentPage),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <LoadingSpinner />;

  if (!data || !data.results) return <div>Nenhum personagem encontrado.</div>;

  return (
    <CharactersContainer>
      <PageTitle>Personagens Rick and Morty</PageTitle>

      <CharactersGrid>
        {data.results.map((character: Character) => (
          <CharacterCard
            key={character.id}
            onClick={() => navigate(`/character/${character.id}`)}
          >
            <CharacterImage
              src={character.image}
              alt={character.name}
              loading="lazy"
            />
            <CharacterInfo>
              <CharacterName>{character.name}</CharacterName>
            </CharacterInfo>
          </CharacterCard>
        ))}
      </CharactersGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={data.info?.pages || 1}
        onPageChange={handlePageChange}
      />
    </CharactersContainer>
  );
}
