# the/MovieFlix - A movie webapp built with React js

## To get Started

-  First run <code>yarn</code> in the project directory to install all dependencies
-  After installation, run <code>yarn start</code> to view the site on "localhost/3000" in your browser

## Libraries/Hooks Used

-  useSwr: hook used for easy data fetching. handles error and loading state, caches and dedouple, i.e fetches data once and uses it everywhere you need it, data. If you can api request, useSWR first shows the cached data before trying to fetching the updated data. So there's always data for you to show to the user.
-  react-router-dom
-  Context API - for state management
-  react-spring: for animation
-  Firebase: for authentication (signin/signout), authorization, and firestore for databse management

What i learnt

-  using "NavLink" in react-router-dom to add a special class to the current active link

notes:

-  decided to use ternary operator for conditional rendering instead of && in JSX. Cos with && if the first part returns 'undefined' it throws an error. The problem here is that undefined && anything will always evaluate to undefined. likewise if the first side evaluates to [] it returns 0. So i used ternary operator to avoid this fall

for more info: https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx

used

-  optional chaining (?.)
-  Nullish coalescing operator (??)
