import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistReducer, persistStore, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

// import migrations, { CurrentVersion } from '../migrations';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
  // version: CurrentVersion,
  // migrate: createMigrate(migrations, { debug: true })
}

const persistedReducer = (navReducer) =>
  persistReducer(persistConfig, rootReducer(navReducer))

export let store;
export default function getStore(navReducer) {
  store = createStore(
    persistedReducer(navReducer),
    undefined,
    applyMiddleware(thunk, logger),
  );
  const persistor = persistStore(store);
  return { store, persistor };
}