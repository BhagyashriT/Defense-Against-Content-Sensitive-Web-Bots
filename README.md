# Defense-Against-Content-Sensitive-Web-Bots
Defense Against Content-Sensitive Web Bots

====================================================================
## (1) Configuration:

In "config.py":<br/>
* variable "useOriginal":<br/>
-- Set value to 1: original version of the web page<br/>
-- Otherwise: randomized version of the web page<br/>
<br/>
* variable "baseURL":<br/>
-- The baseURL to the original and randomized versions<br/>
Once set, page baseURL + "/lenovo/ori/Y40_80.html" should be accessiable<br/>

====================================================================
## (2) How to run:

(a) Set "baseURL" in "config.py" and make it point to the server<br/>
(b) Set "useOriginal = 1" in "config.py" to use the original web page<br/>
(c) run "python ./lenovo_mod.py" (please see the sample output below)<br/>
(d) Set "useOriginal = 0" in "config.py" to use the randomized web page<br/>
(e) run "python ./lenovo_mod.py" again (please see the sample output below)<br/>

====================================================================
## (3) Sample output:



### (3.1) Original version
1.lenovo$ python ./lenovo_mod.py<br/>
URL adding the laptop to the cart:<br/>
http://outlet.lenovo.com/outlet_us/builder/?sb=:000001BD:0002DA7A:<br/>
URL extraction done<br/>

### (3.2) Randomized version
1.lenovo$ python ./lenovo_mod.py<br/>
The deal was found but lost before adding to shopping cart...
