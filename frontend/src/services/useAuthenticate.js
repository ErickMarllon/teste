import { useContext } from 'react';
import { AuthContext } from '../providers/store';
import { baseUrl } from '../utils/baseUrl';
import { setCookie } from '../utils/managerCookie';
import requestConfig from '../utils/requestConfig';

export function useAuthenticate(currentType) {
  const { login } = useContext(AuthContext);

  async function handleSubmit(e, formData) {
    e.preventDefault();
    try {
      const config = requestConfig('POST', formData, null);
      const res = await fetch(`${baseUrl}/auth/${currentType}`, config);
      const resJson = await res.json();

      if (!res.ok) {
        throw { error: true, message: resJson.message, path: resJson.path };
      }
      login();
      setCookie(resJson.token);
      return resJson;
    } catch (error) {
      return error;
    }
  }
  return { handleSubmit };
}
