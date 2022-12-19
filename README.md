
# Disclaimer

This project was prepared in conjunction with a [BackEnd API](https://github.com/KRodVal/CarListApi) built in Ruby on Rails. 
To access the directory where said backend is stored, please click [here](https://github.com/KRodVal/CarListApi).

Before starting the Instalation Guide, you must have installed [Node.JS](https://nodejs.org/es/), as it comes with npm (Node.JS' package manager).

# Instalation Guide an Quick Guide

In this section, you'll find everything needed to set this project running.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify



This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## After running the app

Right after you start the frontend, you'll be redirected to the page, in which the first thing that will appear it's the `Log In` page.

### Log In

The Log In is a must if you want to make good use of the clean and sleek design of the body.

To Log yourself in, you just need to write down an existing username and it's password, the page will manage the token by itself.

### Main Page

Once logged, you will be redirected to the `/brands`, showing you all of the brands listed on the API. 
You can click on each brand to modify it's name or country of origin for example.

If you think there's not enough brands or maybe you want to see one in particular, the last option listed is your choice.

The `Create Brand` card leads to a new section, in which you can add a new brand to the API, the `/brands/create`.
But we'll talk about create in a second.

### OffCanvas

On the top left corner you might notice the typical hamburger menu, well, in this case it will open up the offcanvas, which it's used as a basic navigation bar.

Once the navbar is deployed, you may see some options inside it, like the user image up on the right side, or the navigation buttons right in the middle.

Here, we can travel right into the `/models` section, in which we'll see every model just as we saw the brands, but in this case, we will be displayed the model name along its brand and logo.

### Create

We can send a new brand onto our API by just going back to the `/brands/create` section, but if for any reason we haven't logged in because we don't have our own user, we can create it in `/signup`.

The process is simple, we just need to fill the form with our username, password and age.

### Delete

In case you find a new entry that doesn't match with any existing brand, there's a red button just at the right side of the card.

There's no need to further explain what it does.

## Comparison

Why React? Why not Angular? Here, we'll take a look at all the differences that make React and Angular unique in its own ways.

And remember, both are amazing options when it comes to making an stunning frontend, but when it comes to an specific project, one of them might take the lead due to having a more compensated benefit-to-defect ratio on one exact use.

### React

#### The good

- React is a JS library focused on the UI development, with a flexible and component-based structure that allows every developer with JavaScript knowledge to understand every inch of code that React provides.

#### The not so good

- The only counterpart that you may encounter is related to it's lack of internal UI components and dependency injection, as it's not a framework "per se".


### Angular

#### Good

- Angular, a framework managed by Google, a quite complete solution when it comes to front-end design. with a built-in toolset that allows the developer to work out the entire project with close to no external components.

#### Not so good

- But, as good as it may sound, it's not that easy to achieve. And that's the main issue, because of it's complexity and TypeScrips based functionality, if offers great potential at the cost of a steeper learning curve.

### Why React?

When getting into this project, React presented itself as a balanced option, by offering simplicity and many other advantages while not compromising any important aspect of the project.

With this section I want to recapitulate, I'm not saying Angular isn't a good option, it just happened that React was the go-to in my case.

Perhaps if the project was focused in a different direction, the decision might have been different.

## Native, Hybrid, Web or PWA?

### Which one to use?

For every case, there's a specific type that fits the project.
In my case, I decided to start with a web project, the main differences between the different types is:

- Native: The app needs to be developed on each OS that may be running, but thanks to this quirk, it can make good use of all the resources.

- Hybrid: As the word says hybrid it means that hybrid app development can work on various platforms and still behave similarly to native apps.

- Web: On a web app, accessing via browser is the way to go. But with that approach comes a disadvantage, a continuous need for connection.

- PWA: Web apps that simulate the behavior of native mobile apps. They are typically accessed via a web browser of your choice but can be installed and accessed on a device.

### In my case

For my project, a Web App was the way to go, because making a native app implied that I needed to create separate apps for every OS, and a web app covered the main purpose of the project, providing an online page for car brands listing. 


## Usability

- In my project, I took a simple approach, to make a clean page that doesn't overload the user with information.

- Some details to take into account is the color palette used, I decided to use a color list that reminded a garage, with a combination of different tones of blue, and some red to remark the delete icons.


[palette](Screenshots/Palette.png)

- Also, in order to facilitate the ease of use for the user, I prepared the forms to display in the absolute center of the page, facilitating the use of the web in mobile versions.

- Apart from that, the offcanvas slides from the side, optimizing the space used and making the offcanvas appear and disappear when used.

- When using rounded and clean lines, we create a relaxed page that doesn't give the user any headache.

- When hovering over an item like a card or a route on the offcanvas, the app underlines the actual card or text to show the user the actual selection.

- By ordering the data on the brands and models card, we obtain an easy to understand list of data.


## User Requirements

Must be a web app, based on the mobile-first approach.

The app must have a main page, in which it will display the brands.



 ### Pages

 - Must have mandatory Log In page
 - After loging in, will show the main page (a list of brands)
 - Must have a sidebar as a routing method
 - User can change between brands and models on the sidebar

 ### Edit

 - User can click on a brand to change the information about it
 - User can edit his user data, like name or age

### Create

- When creating a brand, user must give a logo
- Sign Up must request an age higher than 18

## API Reference

#### Brands

```http
 GET  /brands
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Token`   | `string` | **Required**. Your Token   |

#### Brand

```http
  GET /brands/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of brand to fetch|
| `Token`   | `string` | **Required**. Your Token          |

#### Brands

```http
 GET  /models
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Token`   | `string` | **Required**. Your Token   |

#### Brand

```http
  GET /models/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of model to fetch|
| `Token`   | `string` | **Required**. Your Token          |

## Diagrams

### E-R

![E-R](Screenshots/E-R.png)

### Relational

![Relational](Screenshots/Relational.png)

### UML

![UML](Screenshots/UML.png)

## Screenshots

### Login

![Login](Screenshots/LoginScreen.png)

### Brands

![Brands](Screenshots/BrandsScreen.png)

### Models

![Models](Screenshots/ModelsScreen.png)

### Edit

![Edit](Screenshots/EditScreen.png)

### New 

![New](Screenshots/NewScreen.png)
## Related

#### Rails' API repository

[Rails Backend API](https://github.com/KRodVal/CarListApi)

#### Figma

[Figma design](https://www.figma.com/file/wr86lIUpl2QLAS792IQKu7/Proyecto-2710?node-id=2%3A9&t=Yh0ljJOImVyrpx0a-1)
## Author

- [@KRodVal](https://www.github.com/KRodVal)


## Conclussion

- With this experience, I made a quite good first contact with Ruby on Rails and experienced a severe lack of time and energy.

- But thanks to that experience, I learned to manage in a greater manner my time and how to spend it.

- Ruby on Rails found a place in my heart, I would completely recommend an application using RoR. 