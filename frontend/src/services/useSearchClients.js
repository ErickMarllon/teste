import { baseUrl } from '../utils/baseUrl';
import { getCookie } from '../utils/managerCookie';
import requestConfig from '../utils/requestConfig';

export function useSearchClients() {
  async function searchClients({ query }) {
    try {
      const token = getCookie();
      const config = requestConfig('GET', null, token);
      const res = await fetch(`${baseUrl}/clientes/q?filtro=${query}`, config);
      const resJson = await res.json();

      if (!res.ok) {
        throw { error: true, message: resJson.message, path: resJson.path };
      }

      return resJson;
    } catch (error) {
      return error;
    }
  }
  return { searchClients };
}
