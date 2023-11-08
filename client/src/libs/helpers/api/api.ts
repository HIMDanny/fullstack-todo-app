import { HTTPMethod } from './libs/types';

const getCorrectRequest = (
  method: HTTPMethod,
  data: unknown = {},
): RequestInit => {
  if (method === 'GET') {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const api = async <T>(
  url: string,
  method: HTTPMethod,
  data: unknown = {},
): Promise<T> => {
  const response = await fetch(
    `http://localhost:3001${url}`,
    getCorrectRequest(method, data),
  );

  if (!response.ok) {
    throw new Error(`An error has occurred: ${response.status}`);
  }

  return (await response.json()) as T;
};

export { api };
