import { useSelector } from 'react-redux';
import { GlobalState } from './reducers';
import { State } from './reducers/fields';

/* istanbul ignore next */
export const useFields = (): State => {
  return useSelector((state: GlobalState) => state.fields);
};
