# Asia B the Techie Personal Portfolio
This is the portfolio website for Asia/Asia B the Techie.

This README will not offer a step-by-step written guide to creating everything in this project. Instead it should act as a reference guide for myself and other developers who are familiar with the concepts featured in this project but may need access to more detailed explanations and resources during the build process. 

## Making the Project
The goal is to create a personal portfolio website to showcase design and development skills. This project was designed in Figma and the code housed on the asia-b-the-techie-portfolio repository on GitHub.

Construction of this project was made possible with the use of the following:
- [How to build a portfolio website using Next.js, Chakra UI, Framer Motion, and Three.js](https://www.youtube.com/watch?v=bSMZgXzC9AA&t=336s&ab_channel=devaslife)
- [Next.js Documentation](https://nextjs.org/docs/getting-started)
- [Chakra UI Documentation](https://chakra-ui.com/guides/getting-started/nextjs-guide)

1. Create the Project 🚧
Enter the folder that should house the project through the terminal and then create the project by running the following command: 
```
npx create-next-app@latest  asia-b-the-techie-portfolio
```
This is the easiest way to get started with Next.js and gets a default Next.js template set up quickly. 

**BABEL**  
Once the application is set up open it in any code editor and create a `.babelrc` file. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers. Within that file add the following:
```
{
    "presets": ["next/babel"],
    "plugins": []
}
```

**RUN THE PROJECT**  
Once that's done to run the application enter the following command into the terminal: 
```
npm run dev 
```
Then open the project in http://localhost:3000.  
To reuse the terminal enter CTRL + C, and when asked if the batch job should be terminated enter Y (for yes).

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

2. Edit the Project 🛠️

