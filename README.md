# cupboardapp

Follow intructions listed here until you reach create new application, you need to choose what OS you have but then follow instructions for Android:
https://facebook.github.io/react-native/docs/getting-started

Once you've cloned the repo into a local repo you need to install the node modules,
cd into the directory in terminal and run "npm install".

When following the intructions for react-native, it asks if you want to use a virtual device or physical.
Following the instructions on the one you want, it doesn't matter.

App.js brings in Navstack which is the main import for the entire application, Navstack is wrapped in a provider, which allows to create a redux store that encompases all of our application and allows use to access the state throughout the application.

Node_Modules installed so far:

//Navigation//

Recommended navigation extension for react-native

npm install react-navigation
npm install react-native-reanimated
npm install react-native-gesture-handler
npm install react-native-screens

//Icons//

Feather icon pack, has to be used in conjunction with vector icons module.

npm install --save react-native-vector-icons
npm install --save feather-icons-react

//Design//

Currently only snap carousel is included but not displayed will update soon.

npm install --save react-native-snap-carousel

//Firebase//

npm install firebase --save

It's a lot. For windows use nodejs ver 10.16.3
Also might have to clear npm cache (npm cache clear --force)

npm install redux
npm install react-redux
npm install redux-thunk
npm install react-redux-firebase
npm install redux-firestore --save
npm install redux-logger
