import { useEffect, useState } from 'react';
import CardClients from '../../components/CardClients/CardClients';
import Input from '../../components/Input/Input';
import ModalClientsRoute from '../../components/ModalClientsRoute/ModalClientsRoute';
import ModalNewClient from '../../components/ModalNewClient/ModalNewClient';
import { listAllClients } from '../../services/listAllClients';
import { useSearchClients } from '../../services/useSearchClients';
import * as S from './Styles';
function Management() {
  const [clients, setClients] = useState([]);
  console.log('clients: ', clients);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalNewClient, setModalNewClient] = useState(false);
  const { searchClients } = useSearchClients();

  const handleModalNewClient = () => {
    setModalNewClient(!modalNewClient);
  };

  useEffect(() => {
    async function fetchClients() {
      try {
        const clients = await listAllClients();
        setClients(clients);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchClients();
  }, []);

  const handleSearchClients = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await searchClients({ query });
      !res.error && setSearch(res);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>Lista de Clientes</S.Title>
        <S.ContentForm onSubmit={handleSearchClients}>
          <Input
            id={'search'}
            type={'text'}
            maxLength={50}
            placeholder={'Search'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <S.ButtonSearch type={query ? 'submit' : 'button'}>
            &#128269; Buscar
          </S.ButtonSearch>
        </S.ContentForm>

        <S.ContentModals>
          <ModalNewClient
            modalNewClient={modalNewClient}
            handleModalNewClient={handleModalNewClient}
          />
          <ModalClientsRoute />
        </S.ContentModals>

        <S.ContentClients>
          {!search &&
            clients.length > 0 &&
            clients.map((client) => (
              <li key={client.id}>
                <CardClients client={client} />
              </li>
            ))}
          {search &&
            search.map((client) => (
              <li key={client.id}>
                <CardClients client={client} />
              </li>
            ))}
        </S.ContentClients>

        {!error && clients.length === 0 && (
          <S.ContentEmpyt>
            <S.Title>Ainda não existem clientes cadastrados</S.Title>
            <S.NewClient onClick={handleModalNewClient} type={'button'}>
              Para castrar um cliente clique aqui
            </S.NewClient>
          </S.ContentEmpyt>
        )}
        {!error && search && search.length === 0 && (
          <S.ContentEmpyt>
            <S.Title>
              não foram encontrados resultados para a busca {query}
            </S.Title>
          </S.ContentEmpyt>
        )}
        {error && (
          <S.ContentEmpyt>
            <S.Title>{error.message}</S.Title>
          </S.ContentEmpyt>
        )}
      </S.Content>
    </S.Container>
  );
}
export default Management;
