import { Reducer, useReducer } from "react";

export interface ILowLowState {
  value: string;
  isUpper: boolean;
  converted: string;
}

export enum LowLowActions {
  SET_CONVERTED,
  SET_UPPER,
  SET_VALUE,
  GET_VALUE_FROM_STORAGE,
}

export type Action =
  | { type: LowLowActions.GET_VALUE_FROM_STORAGE; payload: string }
  | { type: LowLowActions.SET_UPPER }
  | { type: LowLowActions.SET_CONVERTED; payload: string }
  | { type: LowLowActions.SET_VALUE; payload: string };

export const reducer: Reducer<ILowLowState, Action> = (state, action) => {
  switch (action.type) {
    case LowLowActions.SET_UPPER:
      return { ...state, isUpper: !state.isUpper };
    case LowLowActions.SET_VALUE:
    case LowLowActions.GET_VALUE_FROM_STORAGE:
      return { ...state, value: action.payload };
    case LowLowActions.SET_CONVERTED:
      return { ...state, converted: action.payload };
  }
};

export const useLowLowReducer = () =>
  useReducer<Reducer<ILowLowState, Action>>(reducer, {
    isUpper: false,
    converted: "",
    value: "",
  });
