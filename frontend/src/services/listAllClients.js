import { baseUrl } from '../utils/baseUrl';
import { getCookie } from '../utils/managerCookie';
import requestConfig from '../utils/requestConfig';

export async function listAllClients() {
  try {
    const token = getCookie();
    const config = requestConfig('GET', null, token);
    const res = await fetch(`${baseUrl}/clientes`, config);
    const resJson = await res.json();

    if (!res.ok) {
      throw new Error(`Erro ao listar clientes: ${resJson.message}`);
    }

    return resJson;
  } catch (error) {
    throw new Error(`Erro ao se comunicar com a API: ${error.message}`);
  }
}
