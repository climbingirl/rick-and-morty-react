import { Character } from '../../types/models';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.scss';

interface CharacterListProps {
  characters: Character[];
}

function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="characters__list" role="list" aria-label="Characters list">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
}

export default CharacterList;
