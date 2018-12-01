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
        $(links).each(function(i, link){
            console.log($(link).text() + ':\n  ' + $(link).attr('href')  ) ;
            if($(link).attr('href'))
            {
               console.log($(link).parent().text());
               if($(link).attr('class')==null)
               {
                console.log($(link).parent().attr('class'));
                addValueToList($(link).parent().attr('class'), "rand-class" + i.toString()) ;
               }
                else
                    addValueToList($(link).attr('class'), "rand-class" + i.toString());  
               
               function addValueToList(key, value) {
                map[key] = map[key] || [];
                map[key].push(value);
                console.log(key, value);
            } 
            }
        });
                var parentclass=$('.accessoriesDetail-header a');
                var parentclasstext =$(parentclass).hasClass('button-called-out button-full');
                if(parentclasstext)
                {
                    console.log("Inside");
                    $(parentclasstext).replaceWith('rand-class');
                }
                parentclasstext =$(parentclass).hasClass('button-called-out button-full');
                if(parentclasstext)
                {
                    console.log("Inside?");
                  //  $(parentclasstext).replaceWith('rand-class');
                }
                console.log(parentclasstext);
               
                $(parentclass).each(function() {
                    var old_src=$(this).attr("class");
                    var new_src = "rand-class";
                 //   console.log(new_src);
                    $(this).attr("class", new_src);  

            });
             parentclasstext =$(parentclass).hasClass('button-called-out button-full');
                if(parentclasstext)
                {
                    console.log("Inside??");
                  //  $(parentclasstext).replaceWith('rand-class');
                }

    } 
    fsc.writeFile("./example.html", $);

});

