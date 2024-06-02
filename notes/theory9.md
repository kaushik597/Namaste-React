# 1 When and why do we need lazy()?
Ans: when the application grows largely and to increase the performance of the application we use lazy. Lazy is used to load the files on demand so that initially there wont be any burden.

# 2 What is suspense?
Ans: Suspense is the component given by react. It is used to resolve the issues thrown by react in the mean time component is loading lazily. It has an attribute named fallback which will be used to show what should be rendered on the UI, by the component which we are loading lazily.

# 3  Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
Ans: The suspense attribute fallback will load  a component or simple JSX by the time the component is loaded. Once the component is loaded react then renders the lazy loaded component.

# 4 Advantages and disadvantages of using this code splitting pattern?
Ans: Code splitting can have many benefits, including:

Faster initial load time: By only loading the necessary code for the initial view, code splitting can significantly improve the time it takes for the page to load. This can be especially helpful on slower network connections or devices.

Improved user experience: Code splitting can allow users to interact with the application sooner, and non-essential code can be loaded asynchronously in the background to improve the overall responsiveness of the application.

Improved performance: Code splitting can reduce the amount of JavaScript that needs to be parsed and executed.

However, code splitting can also have some drawbacks, including:

Increased complexity in development and testing processes

More network requests that can affect performance

Additional code and dependencies that can increase the bundle size

# 5 When do we and why do we need suspense?
Ans: Suspense is a React feature that allows developers to display a temporary UI while waiting for data to load. It's best used when you want to display a fallback while waiting for something to load, such as when waiting for data to be fetched from an API after the initial page load.

Suspense is often used in conjunction with React's dynamic import mechanism called lazy(). Lazy loading refers to the requirement that a component or portion of code will load only when it's needed. This functionality helps to minimize your application's loading speed and lower the initial bundle size.