# 1. What are the various ways to add images into our App? Explain with code examples?
Ans: You can add images using img tag in react but the image you get that can be brought from either internet or you can save it in your project folder and fetch it from there
Below is the coding examples for both ways:
internet:
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
Local folder:
Store your image with any name eg: test in assets folder
import test from "./assets/test.png"
use this test in your component

<img src={tes} alt= "test img" />

# 2. What would happen if you do console.log(useState())?
Ans: You can see an array with 2 elements in it. First element is undefined and second is a function through which you can set the state. You see undefined in the first element because you havent given any initial value to it if you give any initial value you can see it.

# 3. How will useEffect behave if we dont have a dependency array?
Ans: UseEffect behaves differently based on the dependency array.

When there is no dependency array it will be executed everytime it renders.
when there is an empty array it is executed only for the first time i.e, after component is rendered.
when there is a condition or a value in the dependency array it is executed for the first time and every time the condition becomes true.

# 4. What is SPA?
Ans: Single Page application is a web application (SPA) is a web application that updates the webpage  dynamically with data from the webserver without reloading it.  All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a single-page interface (SPI).

# 5. What is the difference between server side routing and client side routing?
Ans: client side routing: IN this routing during the initial loading the web app is loaded from the server to the client. Whenever there is any change in the url or something like that it doesnt make request to server and bring that html page it just uses the routers to update that ui instead of fetching the new page from the server. Alll single page applications use client side routing.
Server side routing:
Whenever there is a change in the url a new page is requested from the server and once it is fetched it will be replaced with the old page.

