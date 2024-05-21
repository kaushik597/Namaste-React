# 1. How do you create nested routes reacter-router-dom configuration?
Ans: We can create nested routes insider react router configuration. First call createBrowserRouter for routing different pages.
const router = createBrowserRouter([
    {
        path:'/',
        element: <Parent />
        errorElement:  <Error />
        children: [
            {
                path: '/path',
                element: <Child>
            }
        ]
    }
])


const router = createBrowserRouter([
    {
        path:'/',
        element: <Parent />
        errorElement: <Error />
        children: [
            {
                path: /path',
                element: <ChildElement />
                errorElement:<Error />
                children: [
                    {
                        path: '/child',
                        element: <SubChild />
                    }
                ]
                }
        ]
    }
])

# 2. Read about createHashRouter, createMemoryRouter from React Router docs?
Ans: CreateHashRouter is useful if you are unable to configure your web server to direct all traffic to your react router application. 

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

