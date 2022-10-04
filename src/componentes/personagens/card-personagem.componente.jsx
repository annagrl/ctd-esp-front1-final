import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleFavorite, favoritesSelector, ICharacter } from '../../state/characters';
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";


/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = () => {
  return (
    <div className="card-personagem">
      <img
        src={characterData.image}
        alt={characterData.name}
      />
      <div className="card-personagem-body">
        <span>{characterData.name}</span>
        <BotaoFavorito isFavorito={isFavorito}
          onClick={() => dispatch(toggleFavorite(characterData.id))}/>
      </div>
    </div>
  );
};

export default CardPersonagem;
