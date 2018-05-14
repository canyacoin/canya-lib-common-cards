# CanApp-Cards
The code for generating CanApp Cards

# Usage (Non-Angular Pages
 
As the .js & .css files are hosted at canya.io, simply add these codes to your website's header :
```
  <script src="https://canya.io/assets/cancards.js"></script>
  <link rel="stylesheet" href="https://canya.io/assets/cancards.css">
```
To avoid any clashes, please put it at the very end of your <head> section.
  
To call the function, put this code inside the part of your .html file:
```
  <div class ="canAppDiv">
    <div id="canyaCard"></div>
    <script>createCards()</script>
  </div>
```
