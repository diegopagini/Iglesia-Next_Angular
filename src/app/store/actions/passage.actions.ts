import { createAction, props } from '@ngrx/store';

export const setPassage = createAction(
  '[Passage] Set Passage',
  props<{ payload: string }>()
);
