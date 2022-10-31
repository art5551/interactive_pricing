@import url('https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap');

:root {
  --font-family-prime: 'Alata', sans-serif;
  --font-family-secondary: 'Josefin Sans', sans-serif;
}

/* Beginning of reset CSS with minor changes recommended by Kevin Powell */
/* see youtube https://www.youtube.com/watch?v=h3bTwCqX4ns */

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/******************************************/
/*--Header and navigation CSS begin here--*/
/******************************************/
.header{
  /* Changing margin top to 0 and adding padding instead */
  /* margin-top: 2em; */
  padding: 2em;
  text-align: center;
  position: fixed;
  width: 100%;
}

.nav-toggle{
  display: none;
}

.nav-header{
  width: 100%;
  /*--added 100vh so the screen will drop and cover the entire moile screen*/
  /*--can remove and just the menu items will drop down--*/
  height: 100vh;
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  transform: scale(1,0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
  /*--added background color and 100vh so the screen will drop and cover the entire moile screen*/
  background-color: black;
}

.nav-header ul{
  margin: 0;
  margin-top: 5em;
  /*--changed padding from 0 to 5--*/
  padding: 5em;
  list-style: none;
}

.nav-header li{
  margin-bottom: 1em;
  margin-bottom: 1em;
}

.nav-header a{
  font-family: var(--font-family-prime);
  color: white;
  text-decoration: none;
  font-size: 2rem;
  text-transform: capitalize;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}

.nav-header a:hover{
  color: gray;
}

.nav-toggle:checked ~ nav{
  transform: scale(1,1);
}

.nav-toggle-label{
  position: absolute;
  top: 0;
  /*-- change left and margin to right to show hamburger on right side --*/
  /* left: 0; */
  /* margin-left: 1em; */
  right: 0;
  margin-right: 1em;
  /* *********************************************************************** */
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after{
  display: block;
  background: white;
  height: 2px;
  width: 2em;
  border-radius: 2px;
  position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after{
  content: " ";
  position: absolute;
}

.nav-toggle-label span::before{
  bottom: 7px;
}

.nav-toggle-label span::after{
  top: 7px;
}

.nav-toggle:checked ~ .nav-header a{
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px) {
  
  .nav-toggle-label{
    display: none;
  }

  .header{
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;

  }

  .logo{
    grid-column: 2 / span 1;
  }

  .nav-header{
    all: unset;
    grid-column: 3 / span 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-header ul{

    display: flex;
    justify-content: flex-end;
    /*--changed above in mobile first--*/
    margin: 0;
    padding: 0;

  }

  .nav-header li{
    margin-left: 3em;
    margin-bottom: 0;
  }

  .nav-header a {
    opacity: 1;
    position: relative;
    /*--changed to larger size in mobile first--*/
    font-size: .75rem;
  }

  .nav-header a:hover {
    color: white;
  }

  .nav-header a::before{
    content: '';
    display: block;
    height: 5px;
    background: white;
    position: absolute;
    /* shows line below text or change to top to show above text */
    bottom: -.75em;
    left: 0;
    right: 0;
    transform: scale(0,1);

    transition: transform ease-in-out 250ms;
  }

  .nav-header a:hover::before{
    transform: scale(1,1);
  }
}
/******************************************/
/*---Header and navigation CSS end here---*/
/******************************************/

 /* setting the initial content attributes here */
 /* start initial design with mobile design first */
 body {
  background-color: white;
  /* height: 100vh; */
  /* setting max-width to width of image provided */
}



.section-one {
  display: grid;
  max-width: 1440px;
  height: 650px;
  background: url(../images/mobile/image-hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.section-one-heading {
  grid-row-start: 4;
  color: white;
  font-family: var(--font-family-secondary);
  font-size: 2.75rem;
  text-transform: uppercase;
  line-height: 1;
  border: 1px solid white;
  padding: 2rem;
  margin: 1rem;

  
}


.section-two {
  max-width: 1440px;
  margin: auto;
}

.section-two-picture {
  padding: 1rem;
  padding-top: 4rem;
}

.section-two-heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: var(--font-family-secondary);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1;
  color: black;
  text-align: center;
}

.section-two-paragraph {
  font-family: var(--font-family-prime);
  font-weight: 400;
  font-size: .75rem;
  line-height: 2;
  color: hsl(0, 0%, 55%);
  padding-left: 4rem;
  padding-right: 4rem;
  text-align: center;
}

.section-three-header {
  margin-top: 4rem;
  padding: 3rem;

}

.section-three-header .title {
  font-family: var(--font-family-secondary);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2rem;
  font-weight: 400;
  color: black;
  text-align: center;
}

.btn-outlined-secondary {
  display: none;
}


.section-three-images {
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 1rem;
}

.section-three-picture {
  position: relative;
}

.section-three-picture img:hover {
  filter: blur(5px);

}


.picture-description {
  position: absolute;
  top: 55%;
  left: 5%;
  font-family: var(--font-family-secondary);
  font-size: 2rem;
  color: white;
  line-height: 1;
  width: 150px;
}

.btn-outlined-secondary-two {
  margin-top: 2rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  padding: .5rem 3.5rem;
  background-color: #fff;
  border: 1px solid black;
  color: black;
  font-family: var(--font-family-prime);
}

.btn-outlined-secondary-two:hover {
  background-color: black;
  color: white;
}

.section-three-mobile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  background-color: black;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  color: white;
}
/* Attribution is for the fem footer */
.attribution {
  font-size: 11px; 
  text-align: center; 
}

.attribution a { 
  color: hsl(228, 45%, 44%); 
}




/* FEM Standard footer for projects*/
footer {
  display: flex;

}



@media (min-width: 75em) {
  .section-one {
    display: grid;
    max-width: 1440px;
    height: 650px;
    background: url(../images/desktop/image-hero.jpg);
    background-repeat: no-repeat;
    margin: auto;
    grid-template-columns: 200px 650px;
    grid-template-rows: 210px 300px;
  }

  .section-one-heading {
    grid-row: 2;
    grid-column: 2;
    font-size: 4.75rem;
    margin: 0;
  }

  .section-two {
    display: flex;
    align-items: flex-end;
    max-width: 1100px;
  }

  .section-two-text {
    background-color: white;
    width: 700px;
    height: 350px;
    margin-left: -150px;
  }

  .section-two-picture {
    padding: 0;
  }
  
  .section-two-heading {
    font-family: var(--font-family-secondary);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1;
    color: black;
    text-align: left;
    margin-left: 7rem;
    padding-top: 2rem;
  }

  .section-two-paragraph {
    padding: 0;
    margin-left: 7rem;
    margin-right: 2rem;
    text-align: left;
    font-size: 1rem;
  }

  .section-three {
    max-width: 1100px;
    margin: auto;
  }

  .section-three-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .picture-description {
    top: 75%;

  }
  

  .btn-outlined-secondary {
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    border: 0;
    padding: .5rem 1.5rem;
    background-color: #fff;
    border: 1px solid black;
    color: black;
    font-family:var(--font-family-prime);
  }

  .btn-outlined-secondary:hover {
    background-color: black;
    color: white;
  }

  .btn-outlined-secondary-two {
    display: none;
  }

  .section-three-header .title {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 3rem;
  
  }
  
  .section-three-images .title {
    font-family: var(--font-family-secondary);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2rem;
    color: black;
  }

  .section-three-images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: repeat(2, 1fr);
  }




}

/******************************************/
/*--Footer and navigation CSS begin here--*/
/******************************************/
.footer{
  border: 2px solid black;
  background: black;
  /* Changing margin top to 0 and adding padding instead */
  /* margin-top: 2em; */
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 4rem;
}

.footer-logo {
  margin-left: 7rem;
  margin-right: 7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.nav-footer{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
 
}

.nav-footer ul{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  list-style: none;
}

.nav-footer li{
  margin-left: 0;
  margin-top: 2rem;
}

.nav-footer a{
  font-family: var(--font-family-prime);
  color: white;
  text-decoration: none;
  font-size: .75rem;
  text-transform: capitalize;

}

.nav-footer a:hover{
  color: gray;
}

.social-network ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-top: 1rem;
}

.social-network a {
  font-family: var(--font-family-prime);
  color: white;
  text-decoration: none;
  font-size: .75rem;
  text-transform: uppercase;
  margin-left: 3rem;
}

.footer-copyright {
  font-family: var(--font-family-prime);
  color: white;
  font-size: .75rem;
  margin-top: 1rem;
}


@media screen and (min-width: 800px) {
  
  .footer {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
 
  }


  .footer-logo{
    grid-column: 2;
    margin: 0;
    margin-top: 1.5rem;
  }

  .nav-footer{
    all: unset;
    grid-row: 2;
    grid-column: 2 / span 3;
  }

  .nav-footer ul{

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /*--changed above in mobile first--*/
    margin: 0;
    padding: 0;

  }

  .nav-footer li{
    margin-top: 0;
    margin-right: 3em;
    margin-bottom: 15px;
  }

  .nav-footer a{
    opacity: 1;
    position: relative;
    /*--changed to larger size in mobile first--*/
    font-size: .75rem;
  }

  .nav-footer a::before{
    content: '';
    display: block;
    height: 5px;
    background: white;
    position: absolute;
    /* shows line below text or change to top to show above text */
    bottom: -.75em;
    left: 0;
    right: 0;
    transform: scale(0,1);

    transition: transform ease-in-out 250ms;
  }

  .nav-footer a:hover::before{
    transform: scale(1,1);
  }

  .social-network img:hover {
    background: grey;
  }

  .social-network {
    grid-column: 7 / span 2;
  }

  .footer-copyright {
    grid-row: 2;
    grid-column: 7 / span 2 ;
  }
}
/******************************************/
/*---Footer and navigation CSS end here---*/
/******************************************/

