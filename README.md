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
- CSS Grid
- Mobile-first workflow
- JavaScript interactive behavior

### What I learned
I used this condition to declare need to filling inputs, which disappears after 1.5 seconds :

```js
if (people.value <= 0) {
    document.querySelector('.error2').style.visibility = 'visible';
    document.querySelector("#people-input").focus();
    setTimeout(() => {
      document.querySelector('.error2').style.visibility = 'hidden';
    }, 1500);
```

## Author
- Website - [hamedasadiasl.ir](http://hamedasadiasl.ir/)
- Github - [@hamed3958](https://github.com/hamed3958)
- Frontend Mentor - [@hamed3958](https://www.frontendmentor.io/profile/hamed3958)
