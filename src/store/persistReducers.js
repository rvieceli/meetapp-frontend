import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authTransform from './modules/auth/transform';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp',
      storage,
      whitelist: ['auth', 'user'],
      transforms: [authTransform],
    },
    reducers
  );

  return persistedReducer;
};
