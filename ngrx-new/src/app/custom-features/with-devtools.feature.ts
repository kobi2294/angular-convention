import { PartialStateUpdater, patchState, signalStoreFeature, withMethods } from "@ngrx/signals";
import { StateSignal } from '@ngrx/signals/src/state-signal';
import { EmptyFeatureResult, SignalStoreFeature, SignalStoreFeatureResult } from '@ngrx/signals/src/signal-store-models';
import { reduxDevtoolsInit, reduxDevtoolsSend } from './devtools.helpers';
import { ReduxAction } from "../../types/redux-messages";

type Updater<Input extends SignalStoreFeatureResult> = Partial<Input['state'] & {}> | PartialStateUpdater<Input['state'] & {}>;

export function withDevtools<Input extends SignalStoreFeatureResult>(instanceName: string): 
    SignalStoreFeature<Input, EmptyFeatureResult & {methods: { update: <T extends ReduxAction>(action: T, updaters: Updater<Input>) => void}}> {

    return store => {
        const connection = reduxDevtoolsInit(instanceName, store);

        const feature = signalStoreFeature(
            withMethods((store: StateSignal<Input['state']>) => ({
                update<T extends ReduxAction>(action: T, updaters: Updater<Input>) {
                    patchState(store, updaters);
                    reduxDevtoolsSend(connection, action, store);
                }
            }))
        );

        return feature(store);    
    }

}


patchState