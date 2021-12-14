# the/MovieFlix - A movie reviw site

## Getting Started

-  First run <code>yarn</code> in the project directory to install all dependencies
-  After installation, run <code>yarn start</code> to view the site on "localhost/3000" in your browser
-  Get your apikey from theMovieDb website.

## Libraries/Hooks Used

-  useSwr: hook used for easy data fetching. handles error and loading state, caches and dedouple, i.e fetches data once and uses it everywhere you need it, data.
-  react-router-dom
-  Context API: for state management
-  react-hook-form
-  Firebase: for authentication (signin/signout), authorization, and for database management
-  Framer motion: for animation

## How to navigate this project

-  Every part that make of this website is divided into folders
-  Each inidividual components can be found in the components folder, the "shared" folder contains components shared by both the moive and tvshow.
-  The pages folder contains the website pages
-  The services folder contains the authentication logic for signup, login and logout
-  All reusable functions are located in the "utils" folder

## Why I built the project this way

-  Used `ternary operator` to conditionally render some element instead of `&&` to avoid mistakenly rendering **0**. In Javascript, `0 && anything` evaluates to `0` because `0` is a falsy value, so it dosen't evaluates the right side of the `&&`. To read more: [Use ternaries rather than && in JSX](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)

## Challenges

One of the challenges I encouter was converting something like 132min to 2h 12min. I solved this with this function

```js
let formatTime = (min) =>
	`${Math.trunc(min / 60)}h ${`0${min % 60}`.slice(-2)}min`;
```

## About

-  Author: [Williams Samuel](https://williamssam.netlify.app/)
-  [Twitter](https://twitter.com/williamssam)
