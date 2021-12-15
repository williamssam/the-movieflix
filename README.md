# the/MovieFlix - A movie reviw site

As a big fan of movies and tv series, my goal was to create a movie site like netflix but with another design but without the movies 😉😂.

## Getting Started

-  In the project directory, run <code>yarn</code> to install all dependencies
-  After installation, run <code>yarn start</code>. To view the site on 'localhost:3000/' in your browser

Nte: Get your api key from [TheMovieDB](https://www.themoviedb.org/documentation/api)

## Links

-  Live Site URL: [the/MovieFlix]()

## How to navigate this project

-  The application fetches data from TheMovieDB using 'useSWR' hook
-  Each inidividual components can be found in the components folder, the "shared" folder contains components shared by both the moive and tvshow.
-  All reusable functions are located in the "utils" folder

## Why I built the project this way

-  I used `ternary operator` to conditionally render some element instead of `&&` to avoid mistakenly rendering **0**. In Javascript, `0 && anything` evaluates to `0` because `0` is a falsy value, so it dosen't evaluates the right side of the `&&`. To read more: [Use ternaries rather than && in JSX](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)
-  I decided to use 'useSWR' hook for data fetching. It handles the loading and error state and also offers caching the data
-  firebase for easy and simple setup for authentication (signin and signup)

## Challenges

One of the challenges I encouter was converting something like "132min to 2h 12min". I solved this with this function

```js
let formatTime = (min) =>
	`${Math.trunc(min / 60)}h ${`0${min % 60}`.slice(-2)}min`;
```

## If I had more time I would change this

-  Add end to end testing
-  Add searchbar in the header

## About

-  Website: [Williams Samuel](https://williamssam.netlify.app/)
-  Twitter: [@williams_codes](https://twitter.com/williams_codes)
