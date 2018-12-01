// Read input html page as string	
const fs = require('fs');
const request = require('request');
const htmlparser2 = require('htmlparser2');
var document = new Document();
var html_str = fs.readFileSync('Y40_80.html', 'utf-8');
//const dom = new JSDOM(html_str);
//console.log(dom.window.document.querySelector("button").textContent); // "Hello world"
// Transform input html page to DOM tree, the DOM tree is stored in handler.dom
var handler = new htmlparser2.DomHandler();
var HTMLparser = new htmlparser2.Parser(handler);
HTMLparser.parseComplete(html_str); 
//HTMLparser.end();
document.getElementById(handler.dom);
//whenever an element is , randomize its class attribute.
function walkDOM(dom) 
{
    
    
}
walkDOM(handler.dom);