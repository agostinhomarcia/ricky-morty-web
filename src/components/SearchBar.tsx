import styled from "styled-components";

const SearchContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  min-width: 200px;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 150px;
`;

interface SearchBarProps {
  search: string;
  status: string;
  species: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSpeciesChange: (value: string) => void;
}

export const SearchBar = ({
  search,
  status,
  species,
  onSearchChange,
  onStatusChange,
  onSpeciesChange,
}: SearchBarProps) => {
  return (
    <SearchContainer>
      <Input
        placeholder="Search characters..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select value={species} onChange={(e) => onSpeciesChange(e.target.value)}>
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
      </Select>
    </SearchContainer>
  );
};
