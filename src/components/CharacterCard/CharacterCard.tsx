import { Character } from '../../types/models';
import './CharacterCard.scss';

interface CharacterCardProps {
  character: Character;
}

function CharacterCard(props: CharacterCardProps) {
  const character = props.character;
  return (
    <div className="character" role="listitem">
      <img className="character__image" src={character?.image} alt={character?.name} />
      <div className="character__inner">
        <div className="character__title">{character?.name}</div>
        <div className="character__details">
          <div className="character__gender">
            <span className="character__details-title">Gender: </span>
            {character?.gender}
          </div>
          <div className="character__gender">
            <span className="character__details-title">Species: </span>
            {character?.species}
          </div>
          <div className="character__location">
            <span className="character__details-title">Location: </span>
            {character?.location?.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
