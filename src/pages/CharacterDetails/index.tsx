import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterById } from "../../services/api";
import { Character } from "../../types/character";
import { BackButton } from "../../components/BackButton";
import {
  DetailsContainer,
  CharacterHeader,
  CharacterImage,
  InfoSection,
} from "./styles";

export function CharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: character, isLoading } = useQuery<Character>({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id!),
    enabled: !!id,
  });

  if (!id) return <div>Character not found</div>;
  if (isLoading || !character) return <div>Loading...</div>;

  return (
    <DetailsContainer>
      <BackButton onClick={() => navigate(-1)} />
      <CharacterHeader>
        <CharacterImage src={character.image} alt={character.name} />
        <InfoSection>
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </InfoSection>
      </CharacterHeader>
    </DetailsContainer>
  );
}
