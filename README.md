# Asia B the Techie Personal Portfolio
This is the portfolio website for Asia/Asia B the Techie.

This README will not offer a step-by-step written guide to creating everything in this project. Instead it should act as a reference guide for myself and other developers who are familiar with the concepts featured in this project but may need access to more detailed explanations and resources during the build process. 

## Making the Project
The goal is to create a personal portfolio website to showcase design and development skills. This project was designed in Figma and the code housed on the asia-b-the-techie-portfolio repository on GitHub.

Construction of this project was made possible with the use of the following:
- [How to build a portfolio website using Next.js, Chakra UI, Framer Motion, and Three.js](https://www.youtube.com/watch?v=bSMZgXzC9AA&t=336s&ab_channel=devaslife)
- [Next.js Documentation](https://nextjs.org/docs/getting-started)
- [Chakra UI Documentation](https://chakra-ui.com/guides/getting-started/nextjs-guide)

<br/>

### 1. Create the Project 🚧
Enter the folder that should house the project through the terminal and then create the project by running the following command: 
```
npx create-next-app@latest  asia-b-the-techie-portfolio
```
This is the easiest way to get started with Next.js and gets a default Next.js template set up quickly. 

<br/>

**BABEL**  
Once the application is set up open it in any code editor and create a `.babelrc` file. [Babel](https://babeljs.io/docs/en/) is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers. Within that file add the following:
```
{
    "presets": ["next/babel"],
    "plugins": []
}
```

<br/>

**RUN THE PROJECT**  
Once that's done to run the application enter the following command into the terminal: 
```
npm run dev 
```
Then open the project in http://localhost:3000.  
To reuse the terminal enter CTRL + C, and when asked if the batch job should be terminated enter Y (for yes).

<br/>

**INSTALL DEPENDENCIES/PACKAGES**  
To install the necessary dependencies for this project run the following command:
```
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion react-icons
```
The command above installs Chakra UI, Emotion, Framer Motion, React Icons
- Chakra UI - A component library that helps build React applications
- Emotion - A library designed for writing CSS styles with JavaScript 
- Framer Motion - A production-ready motion library for React
- React Icons - A collection of popular icons to use within a React project
___

### 2. Edit the Project 🛠️
To start editing the home page within the Next.js project the pages/index.js file should be modified. When running the project the live page will auto-update as the files within are editied. When editing this new project everything within the <div> can be deleted, as this is placeholder content, as well as any unnecessary imports.

<br/>

**PAGES & THE LINK COMPONENT**  
Next.js projects automatically come with a `pages` folder. When a new JavaScript file is added to the pages directory it is automatically associated with a route based on the file name. Additional folders within the page folder will also be associated with the route. 

The Next.js `Link` component from `next/link` is a common file import as this component enables client-side transitions between routes (it's what allows users to go to different pages within app). The `<a>` tag is meant to be wrapped in a `Link` component. 

To learn more about Next.js routing see the following:
- [Next.js Pages](https://nextjs.org/docs/basic-features/pages)
- [Next.js Routing Introduction](https://nextjs.org/docs/routing/introduction)

<br/>

**COMPONENTS**  
Reusable components can be created in React and Next.js to split the UI into more manageable pieces. They are the building blocks of the application. Components are typically contained in a components folder that is created in the root project folder. Components are JavaScript functions that accept input (in the form of "props") and return elements that describe what should appear on screen.

There are two types of components: function and class. The example below is a arrow function component.
```
const ComponentName = ({ children }) => (
    <div>
        {children}
    </div>
)

export default ComponentName;
```

To learn more about components see the following:
- [React Components](https://reactjs.org/docs/components-and-props.html)
- [Next.js Layout Components](https://nextjs.org/docs/basic-features/layouts)

<br/>

**ASSETS - IMAGES, ILLUSTRATIONS, ETC.**
Assets are typically contained in a assets folder that is created in the root project folder. Within this folder there may be additional folders for images, illustrations, etc.

To display these assets the Next.js Image component from next/image is a common solution. This component acts as an extension of the HTML <img> element. Note, when using this component height and width are required passed through as props.

To learn more about the Next.js image component see the following:

Next.js Image Component/Image Optimization
___

### 3. Style the Project 🎨
This project utilizes Chakra UI for styling. Chakra UI is a component library. By importing the necessary components one can create easily styled projects. For example, the Flex, Box, Text, and Button components are common components seen throughout this project. They render elements such as `<div>` and `<button>`. 

From there the components can be given shorthand props such as color, alignItems, justifyContent, etc.

However, one important note is that for Chakra UI to work properly, the `ChakraProvider` needs to be set up at the root of the application. This can be done by going to /pages/_app.js importing the ChakraProvider from '@chakra-ui/react' and including it within the MyApp function.

To learn more about the Chakra UI see the official documentation:

[Chakra UI Website]()
