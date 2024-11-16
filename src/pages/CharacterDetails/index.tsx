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
  Title,
  Description,
  InfoGrid,
  InfoItem,
} from "./styles";

export function CharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: character, isLoading } = useQuery<Character>({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id!),
    enabled: !!id,
  });

  if (!id) return <div>Personagem não encontrado</div>;
  if (isLoading || !character) return <div>Carregando...</div>;

  return (
    <DetailsContainer>
      <BackButton onClick={() => navigate(-1)}>← Voltar</BackButton>

      <CharacterHeader>
        <CharacterImage src={character.image} alt={character.name} />

        <InfoSection>
          <Title>{character.name}</Title>
          <Description>{character?.status}</Description>

          <InfoGrid>
            <InfoItem>
              <h3>Status</h3>
              <p>{character.status}</p>
            </InfoItem>
            <InfoItem>
              <h3>Espécie</h3>
              <p>{character.species}</p>
            </InfoItem>
            <InfoItem>
              <h3>Origem</h3>
              <p>{character.origin.name}</p>
            </InfoItem>
            <InfoItem>
              <h3>Localização</h3>
              <p>{character.location.name}</p>
            </InfoItem>
          </InfoGrid>
        </InfoSection>
      </CharacterHeader>
    </DetailsContainer>
  );
}
