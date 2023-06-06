1.What is Emmet?
Ans: Emmet is a toolkit or plugin for writing html/ css. We can write a large amount of code in few seconds using emmet syntax. It helps in saving the time of a developer.
Eg: 
I will write a sample html code and write how can I use emmet to produce it.
<div>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
</div> 
We can generate the above code using emmet as below:
div>ul>li*5

2.Difference between a library and a framework?
Ans: Library:
These are written to solve common problems of developers. These can be used any time and any no of times. It is simply like for eg: we want to do some addition and instead of writing a sum function and call it we can simply get that function from a library if it already defined in it. It is like we can use the functions of it is already written. Libraries contains most of the reusable functions where the developers can use them instead of again writing them from scratch.

Framework:
Framework is  a set of rules and components that helps in building an application.

3. What is CDN? Why do we use it?
Ans: CDN is a Content Delivery Network. It is a distributed system where the server functionalities is distributed to various end points. Users can access this endpoint instead of accessing the server directly. This helps in reducing the time taken to fetch and send requests also as the users are connecting with the end points instead of  the server directly the server wont be busy or it will not have high loads on it. We use CDN links to get the libraries and embed all those features in our project so that we can get access to all the functionalities and features of that server.
4. why is react known as react?
Ans: The idea behind react is to update only the part of dom which ever is needed. React is designed in such a way that whatever should be updated that part will be only be updated not the entire part. As it reacts to whatever is required and reacts on data manipulation on ui it got the name react.

5.What is cross-origin in script tag?
Ans: cross-origin is an attribute in script tag which tells browser how to handle resources from cross-origin. Browser may block several resources from various servers but by using cross-origin we can specify that these resources are safe to use and are coming from the server only.

6. What is the difference between react and react dom?
Ans: React is a javascript library used to create user interfaces. It uses reusable components to create ui. Where as React DOM is used to render updated html on the ui. It is used for dom updation.

7. what is the difference between react.development.js and react.production.js via cdn?
Ans: react.development.js is the development version of react library where as react.production.js is the production version which is optimized for performance compared to development version. Development version has warnings and debug information where as in production version it is removed.

8.what are async and defer?
Ans: async and defer are the attributes of a script tag to load external scripts efficiently into our web page. When we use async in  the script tag scripts are fetched parallely while html parsing is going on once the scripts are fetched it starts executing then and there and then it completes the html parsing. When we use defer scripts are fetched parallelly with html parsing but the execution is done only after html parsing. When we use async there is no guarantee that the scripts are executed in order. This is a problem if the scripts are dependent on other. Hence using defer would be a better option in such scenario.


