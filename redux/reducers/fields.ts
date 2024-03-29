import { Action } from '../actions';

export type Field =
  | {
      type: 'text';
      id: string;
      name: string;
      value: string;
    }
  | {
      type: 'number';
      id: string;
      name: string;
      value: number;
    };

export type State = [Field[]];

export const initialState: State = [
  [
    {
      type: 'text',
      id: `title`,
      name: `Title`,
      value: 'some title'
    },
    {
      type: 'text',
      id: `description`,
      name: `Description`,
      value: 'some description'
    },
    {
      type: 'text',
      id: `notes`,
      name: `Notes`,
      value: 'some notes'
    },
    {
      type: 'number',
      id: `budget`,
      name: `Budget`,
      value: 40
    }
  ]
];

/* istanbul ignore next */
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_NUMBER_FIELD_VALUE':
    case 'SET_TEXT_FIELD_VALUE': {
      return [
        ...state,
        state[state.length - 1].map(field => {
          if (field.id === action.fieldId) {
            return {
              ...field,
              value: action.value
            };
          }

          return field;
        })
      ];
    }
    case 'UNDO_FIELD_VALUE': {
      if (state.length <= 1) {
        return state;
      }
      return state.slice(0, state.length - 1);
    }
    default:
      return state;
  }
};

export default reducer;
