import { inject } from "@angular/core";
import { ConfigService } from "../services/config-service.service";
import { Protocol } from "../models/protocol.model";

export function getConfigUrl(protocol: Protocol): string {
    const config = inject(ConfigService);
    return config.getUrl(protocol);
}

export function getConfiger(): (v: Protocol) => string {
    const configer = inject(ConfigService);
    return (p: Protocol) => configer.getUrl(p);
}