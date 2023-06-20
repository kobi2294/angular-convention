import { Endpoint } from "./endpoints.model";

export interface Site {
    readonly gatewayUrl: string;
    readonly endpoints: Endpoint[];
}