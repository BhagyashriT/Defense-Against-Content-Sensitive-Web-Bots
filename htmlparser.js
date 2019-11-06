// Read input html page as string	
const fs = require('fs');
const request = require('request');
const htmlparser2 = require('htmlparser2');
var path = require('path');
var HashMap = require('hashmap');
var map = new HashMap();
var Class2 = "";
var classes = [];
            var html_str = fs.readFileSync('Y40_80.html', 'utf-8');
            var handler = new htmlparser2.DomHandler();
            var HTMLparser = new htmlparser2.Parser(handler);
            HTMLparser.parseComplete(html_str); 
            var keysarr=[];
            var valuesarr=[];
            //HTMLparser.end();
           // console.log(handler.dom);
            function walkDOM(dom)
            {
                for(var index=0;index<dom.length;index++)
                {
                    if(dom[index].type==="tag")
                    {
                        walkDOM2(dom[index]);
                    }
                }
            }
            function walkDOM2(object)
            {
                        try
                        {
                          if(object.attribs.class)
                          {
                              classes = object.attribs.class.split(" ");
                              
                              for(var i=0;i<classes.length;i++)
                              {
                                  keysarr[i]=classes;
                                  if(classes[i].length>0)
                                  {
                                    if(map.has(classes[i])==false)
                                    {
                                        var id = Math.floor((Math.random() * 10000) + 10);
                                     //   console.log("Randomizing class now.");
                                        map.set(classes[i],"rand-class-"+id);
                                        valuesarr[i]="rand-class-"+id;
                                        }
                                    if(i>0)
                                        Class2 = Class2 + " ";
                                        Class2 = Class2 + map.get(classes[i]);
         
                                  }
                              }
                              object.attribs.class = Class2;
                          }
                          for(var i=0;i<object.children.length;i++)
                          {
                              if(object.children[i].type==="tag")
                              {
                                  walkDOM2(object.children[i]);
                              }
                          }
                       
                        }
                        catch(e)
                        {
                            console.log("Error occured while running");
                        }
                    }


            walkDOM(handler.dom);
            console.log("Length is : "+keysarr.length);
                       
            var html = require('htmlparser-to-html');

            // Transform DOM tree back to HTML
            var randomized = html(handler.dom);
            try 
            {
            fs.writeFileSync("./example.html", randomized);
            console.log("This is done");
            }
            catch (err) 
            {
                console.log("Error occured while running");
                
            }



//For css
var css = require('css');

fs.readdir('./Y40_80_files', 'utf8', findCssFiles);
            function findCssFiles(err, files) 
            {
                if (files.length) 
                {
                    files.forEach(function (files) 
                    {
                         // only process '.css'
                        if (path.extname(files) == '.css' )
                        {
                            fs.readFile('./Y40_80_files/' + files, 'utf8', function (err, data) 
                            {
                                if (err)
                                    throw err;
                                else 
                                {
                                   try 
                                   {
                                       console.log(files);
                                        var obj=css.parse('body { font-size: 12px; }', files);  
                                        css.stringify(obj, files);  
                                        //walkDOMforcss(obj);        
                                    } 
                                    catch(e) 
                                    {
                                        console.log('Failed to parse', files);
                                        throw e;
                                    }
                                }
                           });
                        }
                    });
                }
            }
