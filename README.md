# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./design/desktop-design.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [GitHub](https://github.com/sayyedaaman2/article-preview-component-master)
- Live Site URL: [Live](http://sayyedaaman2.github.io/article-preview-component-master)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties



**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="/styles/style.css">
  <title>Frontend Mentor | Article preview component</title>

  <script src="./script/script.js" defer></script>
</head>

<body>
  <div class="wrapper">
    <main class="main">
      <article class="article">
        <div class="article_container">
          <div class="img_section">
            <img src="./images/drawers.jpg" alt="drawers" aria-label="Drawers Image" />
          </div>
          <div class="article_section">
            <div class="article_info">
              <h1 class="article_title">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h1>
              <p class="article_summary">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>
            <div class="article_author">
              <div class="author_img">
                <img class="avatar" src="./images/avatar-michelle.jpg" alt="avatar" aria-label="avatar-michelle" />
              </div>
              <div class="author_info">
                <h2 class="author_name">
                  Michelle Appleton
                </h2>
                <p class="author_published">
                  28 Jun 2020
                </p>
              </div>
              <div class="share_btn">

                <button class="" id="openDialogButton">
                  <i class="fa-solid fa-share"></i>
                </button>
                <div class="share_option" id="dialogOverlay">
                  <p class="share_text">
                    Share
                  </p>
                  <div class="social_links">

                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest"></i>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </article>








    </main>

    <footer>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/sayyedaaman2/article-preview-component-master">Sayyed Aaman</a>.
    </footer>
  </div>
</body>

</html>
```
```css
/* IMPORT */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

/* CSS RESET */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,
h2,
h3,
h3,
h4,
h5,
h6 {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
}

img {
    width: 100%;
    height: 100%;
    display: block;
}

/* CUSTOM PROPERTIES */
:root {
    /* --color-- */
    --clr-neutral-100: 0 0% 100%;
    --clr-neutral-200: 210 46% 95%;
    --clr-neutral-300: 212 23% 69%;
    --clr-neutral-400: 214 19% 35%;
    --clr-neutral-500: 217 19% 35%;

    /* --typography-- */
    --fs-300: .8125rem;
    --fs-400: 1rem;
    --fs-500: 1.25rem;
    --fs-600: 1.5rem;
    --fs-700: 1.75rem;
    --fs-800: 2rem;
    --fs-900: 2.5rem;
    /* --font-families-- */
    --ff-primary: "Manrope", sans-serif;
    /* --font-weight */
    --fw-normal: 500;
    --fw-medium: 700;
}

/* GENERAL CLASSES */
body {
    position: relative;
    height: 100vh;
    font-family: var(--ff-primary);
    font-weight: var(--fw-normal);
    font-size: var(--fs-300);
    line-height: 1.4;
    background-color: hsl(var(--clr-neutral-200));
    color: hsl(var(--clr-neutral-300));
}

/* UTILITY CLASSES */
/* LAYOUT */
.wrapper {
    display: grid;
    grid-template-rows: 1fr 50px;
    height: 100%;
}

/* COMPONENT */
.main {
    padding-block: 4rem;
    padding-inline: 2rem;

}

.article {
    max-width: 450px;
    background-color: hsl(var(--clr-neutral-100));
    border-radius: 12px 12px 12px 12px;
    /* overflow: hidden; */
    box-shadow: 6px 5px 18px -9px hsl(var(--clr-neutral-400));
}

.article_container {
    transition: all 2s ease;

}

.img_section img {
    border-radius: 12px 12px 0px 0px;
}

.article_section {}

.article_info {
    padding-inline: 2rem;

    padding-block: 2rem;

}

.article_info>*:not(:last-child) {
    margin-bottom: var(--mb, 1rem);
}

.article_title {
    font-size: var(--fs-400);
    color: hsl(var(--clr-neutral-500));
    font-weight: var(--fw-medium);
}

.article_author {
    position: relative;
    padding-inline: 2rem;
    padding-block: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
}

.author_info {
    flex: 1;
}

.author_img {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    overflow: hidden;

}

.author_name {
    font-weight: var(--fw-medium);
    color: hsl(var(--clr-neutral-500));
}

.share_btn {}

.share_btn button {
    position: relative;
    border: 0px;
    background-color: hsl(var(--clr-neutral-200));
    border-radius: 100%;
    padding: 0.5rem;

    cursor: pointer;
    z-index: 10;
}

.share_btn button i {
    aspect-ratio: 1 / 1;
    color: hsl(var(--clr-neutral-400));
}

.share_option {
    position: absolute;
    display: flex;
    gap: 0.5rem;
    justify-content: left;
    align-items: center;
    padding-inline: 2rem;
    width: 100%;
    top: 0rem;
    left: 0;
    height: calc(100%);

    background-color: hsl(var(--clr-neutral-400));
    display: none;

}



.share_text {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: var(--fw-normal);
}

.social_links {
    color: hsl(var(--clr-neutral-100));
    font-size: 1rem;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    /* flex: 1; */
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* MEDIA QUEIRS */
@media screen and (min-width :768px) {

    .article {
        max-width: 650px;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .article_container {
        display: grid;
        grid-template-columns: 2fr 3fr;

    }

    .img_section img {
        border-radius: 12px 0px 0px 12px;
    }

    .article_author {}

    .share_btn {
        position: relative;
    }

    .share_option {
        position: absolute;
        width: max-content;
        top: -200%;
        left: -300%;
        border-radius: 8px;
        padding-inline: 2rem;
        padding-block: 1.5rem;
    }

    .share_option::before {
        content: '';
        background: hsl(var(--clr-neutral-400));
        width: 20px;
        height: 20px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -60%) rotate(45deg);

    }

    .social_links {
        width: auto;
    }
}
```
```js

document.getElementById("openDialogButton").addEventListener("click", function(e) {
    const dialogOverlay = document.getElementById("dialogOverlay");
    
    // Toggle the display property between 'flex' and 'none'
    if (dialogOverlay.style.display === "flex") {
        dialogOverlay.style.display = "none";
    } else {
        dialogOverlay.style.display = "flex";
    }
});

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@sayyedaaman2](https://www.frontendmentor.io/profile/sayyedaaman2)
- Twitter - [@sayyedaaman](https://www.twitter.com/sayyedaaman)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
