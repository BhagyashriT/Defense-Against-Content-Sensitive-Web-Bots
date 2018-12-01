// Read input html page as string	
const fs = require('fs');
const request = require('request');
const htmlparser2 = require('htmlparser2');
const _ = require('lodash');
const jsdom = require("jsdom");
var _ = require('lodash');
var cheerio = require('cheerio');

//const { JSDOM } = jsdom;

var html_str = fs.readFileSync('Y40_80.html', 'utf-8');
//const dom = new JSDOM(html_str);
//console.log(dom.window.document.querySelector("button").textContent); // "Hello world"
// Transform input html page to DOM tree, the DOM tree is stored in handler.dom
var handler = new htmlparser2.DomHandler();
var HTMLparser = new htmlparser2.Parser(handler);
HTMLparser.parseComplete(html_str); 
//HTMLparser.end();


//whenever an element is , randomize its class attribute.
function walkDOM(dom) 
{
    for(i=0;i<dom.length;i++)
    {
        var a=dom[i].value;
    function myfunc(a)
    {

        callchildren(value);
        
        function callchildren(node)
        {

            if(node.next.children !=null||node.children!=null)
            {
                called(node.next);
            }
            else
            {
            callchildren(node.next);   
            }
        }
        function called(node)
        {
            //function checkforclass();
            for(i=0;i<node.length;i++)
            {
                if(node[i].value==='class')
                {   
                    console.log('class');
                }
             }

            if(node1.children[2].name==='body')
            for(node1=node1.children; node1!=null; node1= node1.nextSibling)
            {
                if(node.children[i].value.name==='body')
                {

                   if(Object.prototype.toString.call(node)=== 'class')
                    {
                    console.log(Object.prototype.toString.call(node));
                    }
            myfunc(node);
            }
               }       }
    }
    }
}
walkDOM(handler.dom);