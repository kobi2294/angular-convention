import { Injectable } from "@angular/core";
import { Protocol } from "../models/protocol.model";

@Injectable({providedIn: 'root'})
export class ConfigService {
    getUrl(protocol: Protocol) {
        return protocol === 'http'
            ? 'http://inject-is-cool.com'
            : 'https://inject-is-awesome.net'
    }
}