import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import Reducers
import globalSearchedReducer from './reducers/globalSearchedReducer';
import globalSearcedHeroDetailsReducer from './reducers/globalSearcedHeroDetailsReducer';
import campusDetailsReducer from './reducers/campusDetailsReducer';
import campusUnitDetailsReducer from './reducers/campusUnitDetilsReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  globalSearchedReducer,
  globalSearcedHeroDetailsReducer,
  campusDetailsReducer,
  campusUnitDetailsReducer,
});

const persistorReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistorReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
