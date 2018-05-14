# CanApp-Cards
The code for generating CanApp Cards

# Usage (Non-Angular Pages)
 
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
    <!-- Call the function you need -->
    <script>createCards()</script>
  </div>
```
note that you MUST put the code in this structure. However, you may add extra classes to the divs.

## Functions 

There are 2 functions you can call; 

```
   createCards("thisApp"); //where thisApp is the name of the current CanApp. You can leave it blank.
   createCardsRandomly(1, "thisApp"); //where thisApp is the name of the current CanApp. You can leave it blank.
```

createCards() will generate ALL CanApp Cards. However, giving a string value, e.g. createCards("CanStation") will generate all CanApp Cards without the provided CanApp name. Do note that this is Currently case-sensitive.

createCardsRandomly() accepts 2 parameters ; numbers and app name, e.g. createCardsRandomly(4,"CanShare"). This function will generate create random CanApp cards, except for the provided CanApp's name. It can be left blank. 
