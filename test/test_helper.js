import jsdom from 'jsdom';
import jquery from 'jquery';

// set up testing env to run like a browser in the cmd line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defautView;
const $ = jquery(global.window);


// build 'renderComponent' helper that should render a given react class



// build helper for simulating events



// set up chai-jquery
