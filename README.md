# Tweet-img web-app
An application that allows you to upload an image and tweet it with your twitter account.

## user story:
- As a user I can register to the website.
- As a user I can either login with twitter account or use normal `email, password` login.
- As a user I can upload an image , write a status for the image then tweet them on twitter.
- As a user after I tweet using the website I can go to the tweet on my twitter page account.

## use the website:
 - live:
   - visit this [link](https://web-app-development.herokuapp.com/).
 - locally:
   - the project was built with `node.js v10.15.0` and `npm v6.4.1`, so make sure you have them installed on your machine.
   - download the project folder on your local machine.
   - create a `.env` file inside the `server` folder.
    - Then add inside it the following:

    ```
      MONGO_URI=link-to-mongodb-database
      NODE_ENV=development
      SECRET=project_secret
      TWITTER_CONSUMER_KEY=your-twitter-consumer_key
      TWITTER_CONSUMER_SECRET=your-twitter-consumer_secret
    ```
   - First run the Node server:
      1 - open a command line window (CMD).
      2 - `cd` inside the project folder ex. `cd image-tweet`.
      3 - Install the server packages, run `npm install`.
      4 - run the node.js server, `npm run dev` to use nodemon.

   - Second run the Angular server (client):
      1 - open another command line.
      2 - `cd` inside the `client` folder (inside the project).
      3 - Install the angular packages, run `npm install`.
      4 - run the angular(client) server `npm start`.

   - now you can visit the website on `http://localhost:4200/`


