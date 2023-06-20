import { Component, inject } from '@angular/core';
import { SomeService } from '../services/some-service.service';
import { getConfigUrl, getConfiger } from '../utility-functions/get-config';
import { fixDomain } from '../utility-functions/url-fixers';
import { SAMPLE_DOMAIN } from '../sample-data/data';
import { fixDomainPro } from '../utility-functions/url-fixers-2';

@Component({
  selector: 'app-inject-demo',
  templateUrl: './inject-demo.component.html',
  styleUrls: ['./inject-demo.component.scss']
})
export class InjectDemoComponent {
  someService = inject(SomeService);  
  url = getConfigUrl('http');
  urlGetter = getConfiger();
  domain = SAMPLE_DOMAIN;

  onClick() {
    this.url = getConfigUrl('https');
  }

  onBetterClick() {
    this.url = this.urlGetter('https');
  }

  onFixDomain() {
    const httpsBase = this.urlGetter('https');
    const httpBase = this.urlGetter('http');

    this.domain = fixDomain(this.domain, httpBase, httpsBase);
  }

  onFixDomainPro() {
    const httpsBase = this.urlGetter('https');
    const httpBase = this.urlGetter('http');

    this.domain = fixDomainPro(this.domain, httpBase, httpsBase);
  }





}
