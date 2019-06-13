import { Visual } from "../../src/visual";
var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];

var myFirstVisualB5DC3C8110C442C5985C64B7A60AEF27_DEBUG = {
    name: 'myFirstVisualB5DC3C8110C442C5985C64B7A60AEF27_DEBUG',
    displayName: 'myFirstVisual',
    class: 'Visual',
    version: '1.0.0',
    apiVersion: '2.6.0',
    create: (options) => {
        if (Visual) {
            return new Visual(options);
        }

        console.error('Visual instance not found');
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["myFirstVisualB5DC3C8110C442C5985C64B7A60AEF27_DEBUG"] = myFirstVisualB5DC3C8110C442C5985C64B7A60AEF27_DEBUG;
}

export default myFirstVisualB5DC3C8110C442C5985C64B7A60AEF27_DEBUG;