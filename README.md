# the/MovieFlix - A movie webapp built with React js

## To get Started

-  First run <code>yarn</code> in the project directory to install all dependencies
-  After installation, run <code>yarn start</code> to view the site on "localhost/3000" in your browser

## Libraries/Hooks Used

-  useSwr: hook used for easy data fetching. handles error and loading state, caches and dedouple, i.e fetches data once and uses it everywhere you need it, data. If you can api request, useSWR first shows the cached data before trying to fetching the updated data. So there's always data for you to show to the user.
-  react-router-dom
-  react-spring: for animation
-  Firebase: for authentication (signin/signout), authorization, and firestore for databse management

What i learnt

-  using "NavLink" in react-router-dom to add a special class to the current active link
