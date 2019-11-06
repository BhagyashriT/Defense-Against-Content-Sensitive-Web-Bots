# Defense-Against-Content-Sensitive-Web-Bots
Defense Against Content-Sensitive Web Bots

====================================================================
## (1) Configuration:
====================================================================
In "config.py":
* variable "useOriginal":
-- Set value to 1: original version of the web page
-- Otherwise: randomized version of the web page

* variable "baseURL":
-- The baseURL to the original and randomized versions
Once set, page baseURL + "/lenovo/ori/Y40_80.html" should be accessiable

====================================================================
## (2) How to run:
====================================================================
(a) Set "baseURL" in "config.py" and make it point to the server
(b) Set "useOriginal = 1" in "config.py" to use the original web page
(c) run "python ./lenovo_mod.py" (please see the sample output below)
(d) Set "useOriginal = 0" in "config.py" to use the randomized web page
(e) run "python ./lenovo_mod.py" again (please see the sample output below)

====================================================================
## (3) Sample output:
====================================================================

************************
### (3.1) Original version
************************
1.lenovo$ python ./lenovo_mod.py
URL adding the laptop to the cart:
http://outlet.lenovo.com/outlet_us/builder/?sb=:000001BD:0002DA7A:
URL extraction done

************************
### (3.2) Randomized version
************************
1.lenovo$ python ./lenovo_mod.py
The deal was found but lost before adding to shopping cart...
