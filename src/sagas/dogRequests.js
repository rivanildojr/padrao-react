import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_DOG } from '../actions/dogRequests';
import {requestDog, returnDog, dogFailed} from '../actions/dogRequests';

export function* watchDogRequests() {
  yield takeEvery(FETCH_DOG, takeDogRequests); // Fica escutando por ações do tipo FETCH_DOG e executa takeDogRequests
}

function* takeDogRequests () {
  try {
    yield put(requestDog()); // put é utilizado pra mandar a ação e pausar até ela ser enviada
    const dog = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
          .then(res => res.json())
    }); // Essa call pausa a execução até a Promise retornada pela função ser concluída
    yield put(returnDog(dog)); // envia a ação de requisição concluída com sucesso
  } catch(error) {
    yield put(dogFailed());
  }
}
