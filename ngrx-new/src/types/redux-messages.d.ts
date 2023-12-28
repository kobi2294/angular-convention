export interface ReduxStartMessage {
  readonly type: 'START';
  readonly state: undefined;
  readonly id: undefined;
  readonly source: typeof source;
}

export interface ReduxStopMessage {
  readonly type: 'STOP';
  readonly state: undefined;
  readonly id: undefined;
  readonly source: typeof source;
  readonly failed?: boolean;
}

export interface ReduxJumpToActionPayload {
  type: 'JUMP_TO_ACTION';
  actionId: number;
}

export interface ReduxDispatchMessage {
  readonly type: 'DISPATCH';
  readonly payload: ReduxJumpToStatePayload | ReduxJumpToActionPayload;
  readonly state: string;
  readonly id: string;
  readonly source: string;
}

interface ReduxActionMessage {
  readonly type: 'ACTION';
  readonly payload: string | CustomAction;
  readonly state: string | undefined;
  readonly id: string;
  readonly source: string;
}

export type ReduxMessage =
  | ReduxDispatchMessage
  | ReduxStartMessage
  | ReduxStopMessage
  | ReduxSerializedActionMessage
  ;

export type ReduxState = Object;

export type ReduxActionType = string;

export interface ReduxAction {
  readonly type: ReduxActionType;
}

export type ReduxListener = (msg: ReduxMessage) => void;
export type ReduxUnsubscriber = () => void;

export interface ReduxDevtoolsConnection {
  send: (action: ReduxAction, state: ReduxState) => void;
  init: (state: ReduxState) => void;
  subscribe: (listener: ReduxListener) => ReduxUnsubscriber;
}

