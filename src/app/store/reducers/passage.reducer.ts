import { Action, createReducer, on } from '@ngrx/store';
import { setPassage } from '../actions/passage.actions';

export const initialState = {
  text: '',
};

const _passageReducer = createReducer(
  initialState,
  on(setPassage, (state, { payload }) => ({
    ...state,
    text: payload,
  }))
);

export function passageReducer(
  state: { text: string } | undefined,
  action: Action
) {
  return _passageReducer(state, action);
}
