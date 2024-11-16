import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getCharacterById } from "../../services/api";
import { Character } from "../../types/character";
import { BackButton } from "../../components/BackButton";
import { FavoriteButton } from "./styles";
import {
  Container,
  CharacterImage,
  InfoContainer,
  CharacterName,
  StatusBadge,
  InfoCard,
  ContentWrapper,
  ButtonsContainer,
} from "./styles";
import { useCharacters } from "../../contexts/CharactersContext";

export function CharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, addToFavorites, removeFromFavorites } = useCharacters();

  const handleFavorite = () => {
    if (isFavorite(character!.id)) {
      removeFromFavorites(character!.id);
    } else {
      addToFavorites(character!);
    }
  };

  const { data: character, isLoading } = useQuery<Character>({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id!),
    enabled: !!id,
  });

  if (!id) return <div>Personagem não encontrado</div>;
  if (isLoading || !character) return <div>Carregando...</div>;

  return (
    <Container>
      <ButtonsContainer>
        <BackButton onClick={() => navigate(-1)}>← Voltar</BackButton>

        <FavoriteButton onClick={() => handleFavorite()}>
          {isFavorite(character.id) ? "❤️" : "🤍"} Favorito
        </FavoriteButton>
      </ButtonsContainer>

      <ContentWrapper>
        <CharacterImage src={character.image} alt={character.name} />

        <InfoContainer>
          <div>
            <CharacterName>{character.name}</CharacterName>
            <StatusBadge status={character.status}>
              {character.status}
            </StatusBadge>
          </div>

          <div>
            <InfoCard>
              <h3>Status</h3>
              <p>{character.status}</p>
            </InfoCard>

            <InfoCard>
              <h3>Espécie</h3>
              <p>{character.species}</p>
            </InfoCard>

            <InfoCard>
              <h3>Origem</h3>
              <p>{character.origin.name}</p>
            </InfoCard>

            <InfoCard>
              <h3>Localização</h3>
              <p>{character.location.name}</p>
            </InfoCard>
          </div>
        </InfoContainer>
      </ContentWrapper>
    </Container>
  );
}
