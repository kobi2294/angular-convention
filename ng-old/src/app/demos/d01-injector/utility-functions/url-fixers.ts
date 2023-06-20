import { Protocol } from './../models/protocol.model';
import { Domain } from "../models/domain.model";
import { Endpoint } from "../models/endpoints.model";
import { Site } from '../models/site.model';

export function fixDomain(domain: Domain, httpBase: string, httpsBase: string): Domain {
    const protocol = getProtocol(domain.publicUrl);

    return {
        ...domain, 
        publicUrl: fixBaseUrl(domain.publicUrl), 
        sites: domain
            .sites
            .map(s => fixSite(s, protocol, httpBase, httpsBase))
    }
}

function fixSite(site: Site, protocol: Protocol, httpBase: string, httpsBase: string): Site {
    return {
        ...site, 
        gatewayUrl: fixUrl(site.gatewayUrl, protocol, httpBase, httpsBase), 
        endpoints: site
            .endpoints
            .map(ep => fixEndpoint(ep, httpBase, httpsBase))
    }
}

function fixEndpoint(endpoint: Endpoint, httpBase: string, httpsBase: string): Endpoint {
    return {
        ...endpoint, 
        url: fixUrl(endpoint.url, endpoint.protocol, httpBase, httpsBase)
    }
}

function fixUrl(url: string, protocol: Protocol, httpBase: string, httpsBase: string) {
    if (url == null)
        return url;
    httpBase = fixBaseUrl(httpBase);
    httpsBase = fixBaseUrl(httpsBase);

    if (url.startsWith('/'))
      url = url.substring(1);

    const base = (protocol === 'http')
            ? httpBase
            : httpsBase;

    if (!url.startsWith(`${protocol}://`))
        url = `${base}${url}`
    
    return url;

}

function fixBaseUrl(base: string): string {
    if (base.endsWith('/')) return base;
    return `${base}/`;
}

function getProtocol(fullUrl: string): Protocol {
    const index = fullUrl.indexOf('://');
    return fullUrl.substring(0, index) as Protocol;
}