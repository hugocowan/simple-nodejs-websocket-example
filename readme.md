# How to setup

1. Clone or download/extract this repository to a folder of your choice.
2. Ensure [Node.js and NPM](https://nodejs.dev/how-to-install-nodejs) are installed on your system
3. Open a terminal window and navigate to the root project folder.
4. Type `npm install` and hit enter, then `npm run start` once it's finished installing packages.
5. Open a browser and type `localhost:3000`. Open up your browser's console once it loads.

# What's happening?

Once you've got the server and client set up and running, you should see in your browser console an object containing the message `s'up bruh`. That is the server's response to you making a connection to it. 

In your terminal, you'll also notice a message logged in the server - `received: {"message":"Hello from the client!"}`. This is the server receiving a message from the client: two-way communication!

# Next Steps

* Add your own html/css to index.html/style.css
* Add your own data that you'd like to send/receive, either from the client or from the server - or both.
* Have your very own super fast website using bi-directional websocket messaging!
