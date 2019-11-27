This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `fetch Data from API`

For fetching data from the jsonplaceholder API i used the axios libary.

### `state management`

For the state managment i choosed redux using:

react-redux
redux
redux-thunk

to have the fetched data in a stable state i can work with.

### `components and usage`

I'm using functional components instead of classbased components with the react-hooks useState and useEffect :

in the Table component UseEffect instead of componentDidMount for the redux action to get the data from the api and store it in the state

and in the same component also useState to store the value of the searchfield in a local state which i send as props to the Tablebody component where i handle the output

Also using stateless components to reduce the amount of code to make it more readable for others.

### `search option`

the output is handled through a filter function which show all users on default and on change only the searched users.

### `prop validation`

Also used Proptypes to validate the props i'm using.

### `styling`

For styling of the components i choosed the bootstrap libary and just for the container a bit CSS.
