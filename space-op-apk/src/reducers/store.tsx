import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import userReducer from './player';
import gameReducer from './game';

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
