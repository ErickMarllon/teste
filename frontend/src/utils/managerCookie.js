export function setCookie(value) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();

  document.cookie =
    'token=' +
    encodeURIComponent(value) +
    '; expires=' +
    expiresAt +
    '; path=/';
}

export function getCookie() {
  const cookie = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('token='));
  return cookie ? cookie.split('=')[1] : null;
}

export function removeCookie() {
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}
