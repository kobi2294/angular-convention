import { Protocol } from '../models/protocol.model';
import { Domain } from '../models/domain.model';
import { Endpoint } from '../models/endpoints.model';
import { Site } from '../models/site.model';
import {
  Injector,
  InjectionToken,
  runInInjectionContext,
  inject,
} from '@angular/core';

const BASES = new InjectionToken<Record<Protocol, string>>('BASES');
const PROTOCOL = new InjectionToken<Protocol>('PROTOCOL');

export function fixDomainPro(
  domain: Domain,
  httpBase: string,
  httpsBase: string
): Domain {
  const protocol = getProtocol(domain.publicUrl);

  const injector = Injector.create({
    providers: [
      { provide: BASES, useValue: { http: httpBase, https: httpsBase } },
      { provide: PROTOCOL, useValue: protocol },
    ],
  });

  return runInInjectionContext(injector, () => ({
    ...domain,
    publicUrl: fixBaseUrl(domain.publicUrl),
    sites: domain.sites.map(fixSite),
  }));
}

function fixSite(site: Site): Site {
  return {
    ...site,
    gatewayUrl: fixUrl(site.gatewayUrl),
    endpoints: site.endpoints.map(fixEndpoint),
  };
}

function fixEndpoint(endpoint: Endpoint): Endpoint {
  return {
    ...endpoint,
    url: fixUrl(endpoint.url, endpoint.protocol),
  };
}

function fixUrl(url: string, protocol: Protocol = inject(PROTOCOL)) {
  if (url == null) return url;
  const base = fixBaseUrl(inject(BASES)[protocol]);

  if (url.startsWith('/')) url = url.substring(1);
  if (!url.startsWith(`${protocol}://`)) url = `${base}${url}`;

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
