# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

List Products
1.create products array
2.add product images
3.render products
4.style products

add routing
npm i react-router-dom
create roue from home screen
create aroute from product screen

create a NODE js server
run npm init root folder
update package.json set type :module
add.js to imports
npm install express
create server .js
add start command as node backend /server.js
required express
create route for /return backend is ready
move products js
create route for /api products
return products
run npm start

Fetch products from backend

set proxy in package .json
npm install axios
use statte hook
use effect hook
uesereducer hook

Manage state by Reducer Hook
define reducer
update fetch data
get state from usReducer

<!-- add bootstarp ui frame work -->

npm install react-bootstrap bootstrap
linkcontiner: react-router-bootstrap
update APP.js

<!-- Create  product rating component -->

1.create Rating component
2.create product component
3.use rating component in p;roduct component

<!-- create a product details screen -->

1.fetch product from backend 2. create 3 colums for image ,info , and action
3.using helment async

<!-- create loding and message component -->

1.create loading component
2.use spinner component
3.create message component
4.create utils.js to define getError function

<!-- Implement add to cart -->

create React Context

define reducer
create store provider
implement add to card burtton click handler

 <!-- complete add to cart  -->

check exist item in the cart
check count in stock in backend.

 <!-- Create cart screen  -->

1.create 2 colums
2.display items list
3.create actions

<!-- coplete cart screen -->

click handler for inc/dec items
click handler for remove item
click handler fro checkout
cart items saved in local storage
Add to crt handler

<!-- Create Sign screen -->

1.create sign in from
2.add email and password
3.add signin button

<!-- Connect To Mongodb database -->

1.create atlas monogodb data base
2.install local mongodb data base
3.npm install mongoose
4.connect to mongodb data base

<!-- Create sample data -->

1.creaate product model
2.create a user model
3.create seed route
4.use route in server.js
5.seed smaple prosuct

<!-- seed sample users -->

create user model 
seed smaple users 
create user routes
<!-- create sign in backend api -->
1.create sign in api 

2.npm install jsonwebtoken
3.define generation
<!-- complete sign in a screen  -->

1.handle submit action
2.save token in store in local storage
3.shoe user name in header
<!-- create shipping screen -->
1.create form inputs
2.handle save shipping address 
3.add checkout wizard bar
<!-- create sign up screen -->
1.create input forms
2.handle submit
3.create backend api
<!-- implement select Payment method screen -->
1.create input forms
2.handle submit

create place order screen

1.show cart items ,payment and address 
2.handle place order action
3. create order create api
