# 1 Explore all the ways of writing css?
Ans There are various ways of writing css. They are inline, internal, external.

# 2 How do we configure tailwind?
Ans Tailwind documentation provides us the detailed steps of configuring tailwind css. We are using parcel so the steps are
 -> install tailwind css using the command 'npm install -D tailwindcss postcss'
 -> and run init command 'npx tailwindcss ini' to generate tailwind.config.js file
 -> create a '.postcssrc' and enable the tailwind plugin
    {
  "plugins": {
    "tailwindcss": {}
  }
}
-> Add the paths to all of your template files in your tailwind.config.js file.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

-> Add the Tailwind directives to your CSS. We will write it in our index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


# 3 In tailwind.config.js, what does all the keys mean (content, theme, extend,plugins)?
Ans 
->In content section you will configure all your html templates, js components and any other source files which have tailwind class names
->In theme section you will define your projects color pallete, fonts, border radius values, breakpoints, 
->If you want to add new values to the theme you can use extend keyword
->Plugin is used to register new styles for tailwind. SO that tailwind can inject  them to user stylesheet using js instead of css


# 4 Why do we have .postcssrc file?
Ans .postcssrc is used to configure postcss. This is a tool for transforming css with js plugin. Postcss is employed to handle various aspects of css processing such as autoprefixing, minification and integrating with other css preprocessors and frameworks.

