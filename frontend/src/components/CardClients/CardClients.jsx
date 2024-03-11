import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from './Styles';

const CardClients = ({ client }) => {
  const [viewCoordinate, setViewCoordinate] = useState(false);
  const handleViewCoordinate = () => {
    setViewCoordinate(!viewCoordinate);
  };
  return (
    <S.Container>
      <S.ContentClient>
        <S.Client>
          <strong>Nome:</strong> {client.nome}
        </S.Client>
        <S.Client>
          <strong>Email:</strong> {client.email}
        </S.Client>
        <S.Client>
          <strong>Telefone:</strong> {client.telefone}
        </S.Client>
        {viewCoordinate && (
          <>
            <S.Client>
              <strong>Coordenada X:</strong> {client.coordenada_x}
            </S.Client>
            <S.Client>
              <strong>Coordenada Y:</strong> {client.coordenada_y}
            </S.Client>
          </>
        )}
      </S.ContentClient>
      <S.ButtonViewCoordinate onClick={handleViewCoordinate}>
        exibir Coordenada
      </S.ButtonViewCoordinate>
    </S.Container>
  );
};
CardClients.propTypes = {
  client: PropTypes.shape({
    nome: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
    coordenada_x: PropTypes.number,
    coordenada_y: PropTypes.number,
  }),
};

export default CardClients;
