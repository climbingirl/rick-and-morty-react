import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacter } from '../../pages/Characters/service';
import { Character } from '../../types/models';
import Loader from '../Loader/Loader';
import './CharacterPopup.scss';

function CharacterPopup() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const popup = searchParams.get('popup') || '';
  const [isLoading, setIsLoading] = useState(true);

  function handleClose(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('popup') || target.classList.contains('popup__close-btn')) {
      searchParams.delete('popup');
      setSearchParams(searchParams);
      setCharacter(null);
    }
  }

  useEffect(() => {
    const loadCharacter = async (id: string) => {
      setIsLoading(true);
      const data = await getCharacter(id);
      setIsLoading(false);
      setCharacter(data);
    };

    if (popup) {
      loadCharacter(popup);
    }
  }, [popup]);

  return (
    <div className={`popup ${popup && 'active'}`} onClick={handleClose}>
      <div className="popup__container">
        <div className="popup__close-btn">&times;</div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="popup__character">
            {!character ? (
              <div className="popup__character_empty">Nothing found</div>
            ) : (
              <>
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
                    <div className="character__details-item">
                      <span className="character__details-title">Status: </span>
                      {character?.status}
                    </div>
                    <div className="character__details-item">
                      <span className="character__details-title">Type: </span>
                      {character?.type || 'unknown'}
                    </div>
                    <div className="character__details-location">
                      <span className="character__details-title">Location: </span>
                      {character?.location?.name}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterPopup;
