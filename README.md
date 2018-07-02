# CanApp-Cards
The code for generating CanApp Cards

## Functions 

There are 2 functions you can call; 
```
   //where thisApp is the name of the current CanApp. You can leave it blank.
   createCards("thisApp"); 
   createCardsRandomly(1, "thisApp"); 
```

createCards() will generate 6 CanApp Cards. However, giving a string value, e.g. createCards("CanStation") will generate all CanApp Cards without the provided CanApp name. Do note that this is Currently case-sensitive.

createCardsRandomly() accepts 2 parameters ; numbers and app name, e.g. createCardsRandomly(4,"CanShare"). This function will generate create four random CanApp cards, except for the provided CanApp's name. It can be left blank. 

the code works by looking for a div called canyaCard, creating the cards, and appending the cards to the canyaCard div.


## Usage (Angular)
 
As the .js & .css files are hosted at canya.io, simply add these codes to your index.html file :
```
  <!-- Put this at the top of the file -->
  <link rel="stylesheet" href="https://canya.io/assets/cancards.css"> 
  
  <!-- Put this at the bottom of the file -->
  <script src="https://canya.io/assets/cancards.js"></script>
``` 
Put this code inside the the component's .html page:
```
  <div class ="canAppDiv">
      <div id="canyaCard"></div> 
  </div>
```
Add this line at the top of the component's .ts file...
```
declare var createCards: any;
```
...And call the function inside the component's  .ts file:
``` 
  ngOnInit() {
       createCards();
  }
```
  
## Usage (Non-Angular Pages)
 
As the .js & .css files are hosted at canya.io, simply add these codes to your website's header :
```
  <script src="https://canya.io/assets/cancards.js"></script>
  <link rel="stylesheet" href="https://canya.io/assets/cancards.css">
```
To avoid any clashes, please put it at the very end of your head section.

Or you can download the .JS and .CSS files and put it inside your project's folder - however this is heavily discouraged.
  
To call the function, put this code inside your .html file:

```
  <div class ="canAppDiv">
    <div id="canyaCard"></div>
    <!-- Call the function you need -->
    <script>createCards()</script>
  </div>
``` 

## Extra Styling(s)

You don't have to follow the exact same structure, you can structure it anyway you want as long as you put the canAppDiv class before the canyaCard id. - however this is heavily discouraged to maintain consistency accrosss CanApps, unless you really need to. Note that you can only change canAppDiv and canyaCard div, not the cards itself.

for example, you can implement the cards this way in bootstrap : 
```
       <div class="row canAppDiv">
                <div class = "col-md-2"></div>
                <div class = "col-md-8">
                    <div id="canyaCard" style="padding:15px"><div>
                </div> 
                <div class = "col-md-2"></div> 
      </div>
``` 
