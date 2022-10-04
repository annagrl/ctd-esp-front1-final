import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  fetchCharacters,
  searchSelector,
  setSearch
} from '../../state/characters';
import "./filtros.css";


const Filtros = () => {
  const dispatch = useDispatch();
  const search = useSelector(searchSelector);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(fetchCharacters());
  };

const Filtros = () => {
  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
      />
    </div>
  );
};

export default Filtros;
