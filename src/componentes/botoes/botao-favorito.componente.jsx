import "./botao-favorito.css";
import React from "react";
import starFilled from '../imagenes/starFilled.png';
import star from '../imagenes/star.png';


/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, onClick }) => {
  const src = isFavorito ? "starFilled" : "star";

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
