import { createSlice } from '@reduxjs/toolkit';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterQueryResponse {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: ICharacter[];
}

const initialCharacters: ICharacterQueryResponse = {};
const initialFavorites: number[] = [];

const slice = createSlice({
  name: 'characters',
  initialState: {
    charactersResponse: initialCharacters,
    page: 1,
    search: '',
    favorites: initialFavorites
  },
  reducers: {
    setCharacters: (state, action) => {
      if (action.payload.info) {
        state.charactersResponse = action.payload;
      } else if (action.payload.id) {
        state.charactersResponse = {
          results: [action.payload]
        };
      } else if (action.payload instanceof Array) {
        state.charactersResponse = {
          results: action.payload
        };
      } else {
        state.charactersResponse = {};
      }
    },
    nextPage: (state) => {
      if (state.charactersResponse.info?.next) state.page += 1;
    },
    previousPage: (state) => {
      if (state.page > 1) state.page -= 1;
    },
    setSearch: (state, action: { type: string; payload: string }) => {
      state.search = action.payload;
    },
    toggleFavorite: (state, action: { type: string; payload: number }) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (fav) => fav !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
    clearFavorites: (state) => {
      state.favorites = [];
    }
  }
});

//#region SELECTORS

export const charactersSelector = (state: any) =>
  state.characters.charactersResponse as ICharacterQueryResponse;
export const pageSelector = (state: any) => state.characters.page as number;
export const searchSelector = (state: any) => state.characters.search as string;
export const favoritesSelector = (state: any) =>
  state.characters.favorites as number[];

//#endregion

export const fetchCharacters = () => ({ type: 'characters/fetchCharacters' });
export const fetchFavorites = () => ({ type: 'characters/fetchFavorites' });

export const {
  setCharacters,
  nextPage,
  previousPage,
  setSearch,
  toggleFavorite,
  clearFavorites
} = slice.actions;

export default slice.reducer;