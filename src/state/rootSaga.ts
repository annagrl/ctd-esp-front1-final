import { call, debounce, put, select, takeLatest } from 'redux-saga/effects';
import { favoritesSelector, pageSelector, searchSelector, setCharacters } from './characters';

function* fetchCharacters(): any {
  const page = yield select(pageSelector);

  const search = yield select(searchSelector);

  let url = `https://rickandmortyapi.com/api/character/?page=${page}${
    search ? '&name=' + search : ''
  }`;

  const res = yield call(fetch, url, {
    headers: { 'Content-Type': 'application/json' }
  });

  const data = yield res.json();

  yield put(setCharacters(data));
}

function* fetchFavorites(): any {

  const favorites = yield select(favoritesSelector);
  
  if (favorites.length > 0) {
    const favoritesId = favorites.join(',');
    let url = `https://rickandmortyapi.com/api/character/${favoritesId}`;
  
    const res = yield call(fetch, url, {
      headers: { 'Content-Type': 'application/json' }
    });
  
    const data = yield res.json();
  
    yield put(setCharacters(data));
  } else {
    yield put(setCharacters({}));
  }

}

export default function* rootSagas() {
  yield debounce(300, 'characters/fetchCharacters', fetchCharacters);
  yield takeLatest('characters/fetchFavorites', fetchFavorites);
}
