import { combineReducers } from 'redux';
import fields, { State as FieldsState } from './fields';

const rootReducer = combineReducers({
  fields
});

export default rootReducer;

export type GlobalState = ReturnType<typeof rootReducer>;
