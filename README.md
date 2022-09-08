# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
  **Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Links

- Solution URL: [https://github.com/jayrnoel/ping](https://github.com/jayrnoel/ping)
- Live Site URL: [Add live site URL here](https://ornate-bublanina-b15a66.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Javascript
- Flexbox
- Mobile-first workflow
- SASS
- Git
- BEM
- Browsersync

### What I learned

I have started to use SASS and Git in this project. I have been using GitHub Desktop app in order to keep track of my repository because I'm not so used to using the command line and it's easier to understand the desktop app for now. I tried a few things like publishing the repo to my github account.

I also have started to use SASS to write CSS. At first, I started to use an extension and now I am using the command line interface. I find using the command line interface easier in this case since the command I am using is just to watch the SCSS files and compile them to the CSS file. At first, it was confusing since I have forgotten to use partials in my initial setup. I did not have an underscore in my filename to it just created every file but I learned that I needed to use underscore in the filename in order to import the files and not create a new file. Writing in different files has been beneficial for me to know where my code is. It has been easier to find the differences in my mobile and desktop layouts. Where my components are and the layouts are.

I also learned that `:focus` pseudo selector has an outline and not adds border to the focused element. One my the things that stuck to me is that whenever I the error message was displayed even when I changed the border to light red, it doesn't change when the input was focused on. I have also learned that you can use the pseudo selector `:placeholder` in order to change the properties of just the placeholder text.

```css
#email,
#email:active,
#email:focus {
  border-radius: 42px;
  padding: 16px 1.8rem;
  border: 1px solid $gray-a;
  height: 50px;
  font-family: inherit;
  width: 100%;
  &::placeholder {
    color: $gray-a;
  }
  &.error,
  &.error:focus {
    outline: 1px solid $light-red;
  }
}
```

I used JavaScript to validate the email address and to display error messages. I have read a lot of resources in terms of regex but they are hard to write for me so I took a regex from the blog [herewecode.io](https://herewecode.io/blog/email-validation-javascript/) and implemented it on my code.

### Continued development

In this project, I practiced on writing using SASS, Git and writing JavaScript.

### Useful resources

- [Email Validation](https://herewecode.io/blog/email-validation-javascript/) - This helped for validation of email.

## Author

- Frontend Mentor - [@jayrnoel](https://www.frontendmentor.io/profile/jayrnoel)
