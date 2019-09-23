export const DOG_FETCHED_SUCCESSFULLY = 'DOG_FETCHED_SUCCESSFULLY';
export const DOG_REQUESTED = 'DOG_REQUESTED';
export const FETCH_DOG = 'FETCH_DOG';
export const DOG_FETCH_FAILED = 'DOG_FETCH_FAILED';

export function fetchDog() {
  //Action usada pelo sagas pra escutar pedidos de requisição de fotos de dogos
  return {type: FETCH_DOG};
}

export function requestDog() {
  return {type: DOG_REQUESTED};
}

export function returnDog(data) {
  return {type: DOG_FETCHED_SUCCESSFULLY, url: data.message};
}

export function dogFailed() {
  return {type: DOG_FETCH_FAILED};
}
