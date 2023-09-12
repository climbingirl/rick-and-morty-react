import { useSearchParams } from 'react-router-dom';
import { Character } from '../../types/models';
import './CharacterCard.scss';

interface CharacterCardProps {
  character: Character;
}

function CharacterCard(props: CharacterCardProps) {
  const character = props.character;
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    searchParams.set('popup', `${character.id}`);
    setSearchParams(searchParams);
  }

  return (
    <div className="character" role="listitem" onClick={handleClick}>
      <img className="character__image" src={character?.image} alt={character?.name} />
      <div className="character__inner">
        <div className="character__title">{character?.name}</div>
        <div className="character__details">
          <div className="character__details-item">
            <span className="character__details-title">Gender: </span>
            {character?.gender}
          </div>
          <div className="character__details-item">
            <span className="character__details-title">Species: </span>
            {character?.species}
          </div>
          <div className="character__details-location">
            <span className="character__details-title">Location: </span>
            {character?.location?.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
