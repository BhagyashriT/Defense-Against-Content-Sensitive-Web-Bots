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
        let titleArr = [];
        let className = []; 
        $(links).each(function(i, link){
            titleArr.push($(link).text());
         });
       console.log(titleArr);
        //titleArr.forEach(function(i, link){
            var chk=$("a:contains('Home')").attr('class');
            console.log("chk: "+chk);    
            if(chk!=undefined)
                {
                className.push(chk);
               
                }
                else if (chk==undefined)
                {
                var chk1 = $("a:contains('Home')").parent().attr('class');
                console.log("chk1: "+chk1);
                
                if(chk1!=undefined)
                {
                    className.push(chk1);
                }
                        if (chk1==undefined)
                            {
                            var chk2 = $("a:contains('Home')").parent().parent().attr('class');
                            console.log("chk2: "+chk2);
                
                            if(chk2!=undefined)
                            className.push(chk2);
                            
                 
                            }
                
         }
         var chk=$("a:contains('Notebooks')").attr('class');
         console.log("chk: "+chk);    
         if(chk!=undefined)
             {
             className.push(chk);
             $(chk).replaceWith('rand-class');

             }
             else if (chk==undefined)
             {
             var chk1 = $("a:contains('Notebooks')").parent().attr('class');
             
             console.log("chk1: "+chk1);
             
             if(chk1!=undefined)
             {
                 className.push(chk1);
             
                 $(chk1).replaceWith('rand-class');

                }
                     if (chk1==undefined)
                         {
                         var chk2 = $("a:contains('Notebooks')").parent().parent().attr('class');
                         console.log("chk2: "+chk2);
             
                         if(chk2!=undefined)
                       {
                         className.push(chk2);
            
                         $(chk2).replaceWith('rand-class');
             
                        }
                         }

             
      }  
      
      var chk=$("a:contains('View Your Results')").attr('class');
      console.log("chk: "+chk);    
      if(chk!=undefined)
          {
          className.push(chk);
          $(chk).replaceWith('rand-class');

          }
          else if (chk==undefined)
          {
          var chk1 = $("a:contains('View Your Results')").parent().attr('class');
          
          console.log("chk1: "+chk1);
          
          if(chk1!=undefined)
          {
              className.push(chk1);
          
              $(chk1).replaceWith('rand-class');

             }
                  if (chk1==undefined)
                      {
                      var chk2 = $("a:contains('View Your Results')").parent().parent().attr('class');
                      console.log("chk2: "+chk2);
          
                      if(chk2!=undefined)
                    {
                      className.push(chk2);
         
                      $(chk2).replaceWith('rand-class');
          
                     }
                      }

          
   }  
   var chk=$("a:contains('Offers')").attr('class');
   console.log("chk: "+chk);    
   if(chk!=undefined)
       {
       className.push(chk);
       $(chk).replaceWith('rand-class');

       }
       else if (chk==undefined)
       {
       var chk1 = $("a:contains('Offers')").parent().attr('class');
       
       console.log("chk1: "+chk1);
       
       if(chk1!=undefined)
       {
           className.push(chk1);
       
           $(chk1).replaceWith('rand-class');

          }
               if (chk1==undefined)
                   {
                   var chk2 = $("a:contains('Offers')").parent().parent().attr('class');
                   console.log("chk2: "+chk2);
       
                   if(chk2!=undefined)
                 {
                   className.push(chk2);
      
                   $(chk2).replaceWith('rand-class');
       
                  }
                   }

       
}  
var ch=$("a:contains('Add to cart')").attr('class');
console.log("ch: "+ch);    
if(ch!=undefined)
    {
    className.push(chk);
    $(ch).replaceWith('rand-class');

    }
    else if (chk==undefined)
    {
    var chk1 = $("a:contains('Add to cart')").parent().attr('class');
    
    console.log("chk1: "+chk1);
    
    if(chk1!=undefined)
    {
        className.push(chk1);
    
        $(chk1).replaceWith('rand-class');

       }
            if (chk1==undefined)
                {
                var chk2 = $("a:contains('Add to cart')").parent().parent().attr('class');
                console.log("chk2: "+chk2);
    
                if(chk2!=undefined)
              {
                className.push(chk2);
   
                $(chk2).replaceWith('rand-class');
    
               }
                }

    
}  
var chk=$("a:contains('Notebooks')").attr('class');
console.log("chk: "+chk);    
if(chk!=undefined)
    {
    className.push(chk);
    $(chk).replaceWith('rand-class');

    }
    else if (chk==undefined)
    {
    var chk1 = $("a:contains('Notebooks')").parent().attr('class');
    
    console.log("chk1: "+chk1);
    
    if(chk1!=undefined)
    {
        className.push(chk1);
    
        $(chk1).replaceWith('rand-class');

       }
            if (chk1==undefined)
                {
                var chk2 = $("a:contains('Notebooks')").parent().parent().attr('class');
                console.log("chk2: "+chk2);
    
                if(chk2!=undefined)
              {
                className.push(chk2);
   
                $(chk2).replaceWith('rand-class');
    
               }
                }

    
}  
var chk=$("a:contains('Notebooks')").attr('class');
console.log("chk: "+chk);    
if(chk!=undefined)
    {
    className.push(chk);
    $(chk).replaceWith('rand-class');

    }
    else if (chk==undefined)
    {
    var chk1 = $("a:contains('Notebooks')").parent().attr('class');
    
    console.log("chk1: "+chk1);
    
    if(chk1!=undefined)
    {
        className.push(chk1);
    
        $(chk1).replaceWith('rand-class');

       }
            if (chk1==undefined)
                {
                var chk2 = $("a:contains('Notebooks')").parent().parent().attr('class');
                console.log("chk2: "+chk2);
    
                if(chk2!=undefined)
              {
                className.push(chk2);
   
                $(chk2).replaceWith('rand-class');
    
               }
                }

    
}  
var chk=$("a:contains('Notebooks')").attr('class');
console.log("chk: "+chk);    
if(chk!=undefined)
    {
    className.push(chk);
    $(chk).replaceWith('rand-class');

    }
    else if (chk==undefined)
    {
    var chk1 = $("a:contains('Notebooks')").parent().attr('class');
    
    console.log("chk1: "+chk1);
    
    if(chk1!=undefined)
    {
        className.push(chk1);
    
        $(chk1).replaceWith('rand-class');

       }
            if (chk1==undefined)
                {
                var chk2 = $("a:contains('Notebooks')").parent().parent().attr('class');
                console.log("chk2: "+chk2);
    
                if(chk2!=undefined)
              {
                className.push(chk2);
   
                $(chk2).replaceWith('rand-class');
    
               }
                }

    
}  
var chk=$("a:contains('Notebooks')").attr('class');
console.log("chk: "+chk);    
if(chk!=undefined)
    {
    className.push(chk);
    $(chk).replaceWith('rand-class');

    }
    else if (chk==undefined)
    {
    var chk1 = $("a:contains('Notebooks')").parent().attr('class');
    
    console.log("chk1: "+chk1);
    
    if(chk1!=undefined)
    {
        className.push(chk1);
    
        $(chk1).replaceWith('rand-class');

       }
            if (chk1==undefined)
                {
                var chk2 = $("a:contains('Notebooks')").parent().parent().attr('class');
                console.log("chk2: "+chk2);
    
                if(chk2!=undefined)
              {
                className.push(chk2);
   
                $(chk2).replaceWith('rand-class');
    
               }
                }

    
}  
var chk=$("a:contains('Notebooks')").attr('class');
console.log("chk: "+chk);    
if(chk!=undefined)
    {
    className.push(chk);
    $(chk).replaceWith('rand-class');

    }
    else if (chk==undefined)
    {
    var chk1 = $("a:contains('Notebooks')").parent().attr('class');
    
    console.log("chk1: "+chk1);
    
    if(chk1!=undefined)
    {
        className.push(chk1);
    
        $(chk1).replaceWith('rand-class');

       }
            if (chk1==undefined)
                {
                var chk2 = $("a:contains('Notebooks')").parent().parent().attr('class');
                console.log("chk2: "+chk2);
    
                if(chk2!=undefined)
              {
                className.push(chk2);
   
                $(chk2).replaceWith('rand-class');
    
               }
                }

    
}  
         //$(className).replaceWith('rand-class');

        fsc.writeFile("./example3.html", $);
        
        console.log("done", className);
        //});  
    }
});

