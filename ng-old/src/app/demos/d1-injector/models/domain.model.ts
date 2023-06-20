import { Site } from "./site.model";

export interface Domain {
    readonly publicUrl: string;
    readonly sites: Site[];
}