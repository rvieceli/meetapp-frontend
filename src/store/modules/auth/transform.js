import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  // on persist
  inboundState => {
    return { ...inboundState };
  },
  // on rehydrate
  outboundState => {
    return { ...outboundState };
  },
  { whitelist: ['auth'] }
);

export default SetTransform;
