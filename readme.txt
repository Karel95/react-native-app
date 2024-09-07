
create-expo-app

A command-line tool to create a new Expo and React Native project.
create-expo-app is a command-line tool to create and set up a new Expo and React Native project. This tool simplifies the initialization process by providing various templates to get started quickly without the need for manual configuration.


Create a new project
To create a new project, run the following command:

npx create-expo-app@latest
Running the above command will prompt you to enter the app name of your project. This app name is also used in the app config's name property.


What is your app named? my-app


Options
Uses the following options to customize the command behavior.


--yes
Uses the default options to create a new project.


--no-install
Skips installing npm dependencies or CocoaPods.


--template
Running create-expo-app with a Node Package Manager initializes and sets up a new Expo project using the default template.

You can use the --template option to select one of the following templates or pass it as an argument to the option. For example, --template default.

Template
	Description

default
	Default template. Designed to build multi-screen apps. Includes recommended tools such as Expo CLI, Expo Router library and TypeScript configuration enabled. Suitable for most apps.
blank
	Installs minimum required npm dependencies without configuring navigation.
blank-typescript
	A Blank template with TypeScript enabled.
tabs
	Installs and configures file-based routing with Expo Router and TypeScript enabled.
bare-minimum
	A Blank template with native directories (android and ios) generated. Runs npx expo prebuild during the setup.


--example
Use this option to initialize a project using an example from expo/examples.

For example, running npx create-expo-app --example with-router will set up a project with Expo Router library.


--version
Prints the version number and exits.


--help
Prints the list of available options and exits.


I used:

npx create-expo-app@latest react-native-app --template blank
npx expo install react-native-web react-dom @expo/metro-runtime
npx expo lint
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier

.eslintrc.js:

module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};

.eslintignore:

/.expo
node_modules
