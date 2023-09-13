import { Character } from '../../types/models';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.scss';

interface CharacterListProps {
  characters: Character[];
}

function CharacterList(props: CharacterListProps) {
  return (
    <div className="characters__list">
      {!props.characters.length ? (
        <div className="characters__list_empty" role="list" aria-label="Characters not found">
          Nothing found
        </div>
      ) : (
        <div className="characters__list_result" role="list" aria-label="Characters list">
          {props.characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
