var request = require('request');
var cheerio = require('cheerio');
const fsc = require("fs-cheerio");
const fs=require('fs');
const htmlparser2 = require('htmlparser2');
var path = require('path');

request('https://weihang-wang.github.io/cse705/project/lenovo/Y40_80.html', function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        links = $('a'); //jquery get all hyperlinks
        var map={};
      
        if(links.find("a:contains('Add to cart')"))
        {

            var className = $("a:contains('Add to cart')").attr('class');
            $('.className').replaceWith("rand-class");

            // var category = $('class').filter(function() {
            //     //$(this).text().indexOf('Add to cart')
                
            //     //return $(this).clas;
                
            //   });
              fsc.writeFile("./example1.html", $);
      
            console.log("done", className);
        }
      }
});

