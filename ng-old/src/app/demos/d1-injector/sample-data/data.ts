import { Domain } from "../models/domain.model";

export const SAMPLE_DOMAIN: Domain = {
    publicUrl: 'http://www.public-url.com/our-domain', 
    sites: [
        {
            gatewayUrl: 'common', 
            endpoints: [
                {
                    title: 'Get Photos', 
                    protocol: 'http', 
                    url: 'photos'
                }, 
                {
                    title: 'Get Songs', 
                    protocol: 'https', 
                    url: 'songs'
                }
            ]        
        }, 
        {
            gatewayUrl: 'master', 
            endpoints: [
                {
                    title: 'Get Customers', 
                    protocol: 'https', 
                    url: 'customers'
                }, 
                {
                    title: 'Get Products', 
                    protocol: 'http', 
                    url: 'products'
                }
            ]
        }
    ]
}