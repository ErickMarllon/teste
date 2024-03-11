import { baseUrl } from '../utils/baseUrl';
import { getCookie } from '../utils/managerCookie';
import requestConfig from '../utils/requestConfig';

export function useNewClient() {
  async function handleSubmit(e, formData) {
    e.preventDefault();
    const token = getCookie();
    try {
      const config = requestConfig('POST', formData, token);
      const res = await fetch(`${baseUrl}/clientes/cadastrar`, config);
      const resJson = await res.json();

      if (!res.ok) {
        throw { error: true, message: resJson.message, path: resJson.path };
      }
      return resJson;
    } catch (error) {
      return error;
    }
  }
  return { handleSubmit };
}
