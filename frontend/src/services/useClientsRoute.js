import { baseUrl } from '../utils/baseUrl';
import { getCookie } from '../utils/managerCookie';
import requestConfig from '../utils/requestConfig';

export function useClientsRoute() {
  async function clientsRoute() {
    try {
      const token = getCookie();
      const config = requestConfig('GET', null, token);
      const res = await fetch(`${baseUrl}/clientes/rota`, config);
      const resJson = await res.json();

      if (!res.ok) {
        throw { error: true, message: resJson.message, path: resJson.path };
      }

      return resJson;
    } catch (error) {
      return error;
    }
  }
  return { clientsRoute };
}
