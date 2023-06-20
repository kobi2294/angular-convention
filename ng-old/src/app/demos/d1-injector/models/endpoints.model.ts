import { Protocol } from "./protocol.model";

export interface Endpoint {
    readonly title: string;
    readonly protocol: Protocol;
    readonly url: string;
}