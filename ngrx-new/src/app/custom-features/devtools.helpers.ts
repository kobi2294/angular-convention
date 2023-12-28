import { StateSignal } from '@ngrx/signals/src/state-signal';
import {
    ReduxAction,
  ReduxActionType,
  ReduxDevtoolsConnection,
  ReduxState,
} from '../../types/redux-messages';
import { getState } from '@ngrx/signals';

type Store = StateSignal<ReduxState>;

export function reduxDevtoolsInit(
  instanceName: string,
  store: Store
): ReduxDevtoolsConnection | null {
  if (!window.__REDUX_DEVTOOLS_EXTENSION__) return null;
  const connection = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
    name: instanceName,
  });
  const state = getState(store);
  connection.init(state);
  return connection;
}

export function reduxDevtoolsSend(
  connection: ReduxDevtoolsConnection | null,
  action: ReduxAction,
  store: Store
) {
  if (!connection) return;
  const state = getState(store);
  connection.send(action, state);
}

export function reduxDevtoolsDestroy(store: Store): void {}
