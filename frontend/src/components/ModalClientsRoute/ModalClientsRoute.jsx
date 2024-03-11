import { useState } from 'react';
import { useClientsRoute } from '../../services/useClientsRoute';
import * as S from './Styles';

const ModalClientsRoute = () => {
  const [modal, setModal] = useState(false);
  const [viewType, setViewType] = useState('rota');
  const [clients, setClients] = useState([]);

  const { clientsRoute } = useClientsRoute();
  const handleModal = () => {
    setModal(!modal);
    setViewType('rota');
  };
  const handleRoute = () => {
    setViewType(viewType === 'rota' ? 'clientes' : 'rota');
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    handleModal();
    const res = await clientsRoute();
    !res.error && setClients(res);
  };

  return (
    <>
      <S.NewClient onClick={onSubmit} type="button">
        Visualizar Rota
      </S.NewClient>
      {modal && (
        <S.Container $open={modal}>
          <S.Content>
            <S.ButtonCloseModal onClick={handleModal} type="button" />
            <S.ContentTitle>
              <S.Title>Rota para os Clientes</S.Title>
            </S.ContentTitle>
            <S.ButtonHandleView onClick={handleRoute} type="button">
              visualizar {viewType === 'rota' ? 'clientes' : 'rota'}
            </S.ButtonHandleView>
            <S.ContentClients>
              {clients &&
                clients.clientes &&
                clients[viewType].map((client, index) => (
                  <ul key={client.id || index}>
                    {viewType === 'clientes' ? (
                      <>
                        <S.Client>
                          <strong>Nome:</strong> {client.nome}
                        </S.Client>
                        <S.Client>
                          <strong>Email:</strong> {client.email}
                        </S.Client>
                        <S.Client>
                          <strong>Telefone:</strong> {client.telefone}
                        </S.Client>
                        <S.Client>
                          <strong>Coordenada X:</strong> {client.coordenada_x}
                        </S.Client>
                        <S.Client>
                          <strong>Coordenada Y:</strong> {client.coordenada_y}
                        </S.Client>
                      </>
                    ) : (
                      <>
                        <S.Client>
                          <strong>Coordenada X:</strong> {client.x}
                        </S.Client>
                        <S.Client>
                          <strong>Coordenada Y:</strong> {client.y}
                        </S.Client>
                      </>
                    )}
                  </ul>
                ))}
            </S.ContentClients>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};

export default ModalClientsRoute;
