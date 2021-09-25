# Frontend Mentor - Tip calculator app solution
This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

### The challenge
Users should be able to:
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot
![Tip Calculator App](<images/ScreenshotTipCalculatorApp(HAA).png>)

### Links
- Live Site URL: [live site URL here](https://hamed3958.github.io/tip-calculator-app/)

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Web Design
- JavaScript interactive behavior

### What I learned
I used this condition to declare need to filling inputs, which disappears after 2 seconds :

```js
if (bill.value <= 0) {
    document.querySelector('.error1').style.visibility = 'visible';
    document.querySelector("#bill-input").classList.add("error-border");
    setTimeout(() => {
      document.querySelector('.error1').style.visibility = 'hidden';
      document.querySelector("#bill-input").classList.remove("error-border");
    }, 2000);
```

And function to control font size for when characters become too large :

```js
function length(x, y) {
  if (x.length > 6) {
    document.getElementById(y).style.fontSize = "36px";
  } else {
    document.getElementById(y).style.fontSize = "48px";
  }
}

length(amount.innerHTML, "amount");
```

## Author
- Website - [hamedasadiasl.ir](http://hamedasadiasl.ir/)
- Github - [@hamed3958](https://github.com/hamed3958)
- Frontend Mentor - [@hamed3958](https://www.frontendmentor.io/profile/hamed3958)
