# 1. What is microservice?
Ans: microservice is a small service. In this there will be a different service for different tasks/jobs. For frontend tasks there will be UI service, for backend services there will be backend service. All these services combine together form a big app.

# 2. What is monolith architecture?
Ans: This is the architecture which was used in the early days. In this architecture all the tasks are done in one project like UI, backend, sms services, authentication. Everyone in the team can see other tasks code. If we make any small update to our code we have to build the whole project and compile it.

# 3. What is the difference between monolith and microservice architecture?
Ans: In monolith architecture all the tasks are in one project where as in microservicem architecture every task has a seperate project like for ui we have a ui service where only ui related code is present. we can connect other services using different ports like we can deploy ui on / backend on /backend(anything you want)

# 4. Why do we need useEffect hook?
Ans: useEffect is executed once the component is rendered. We generally use to make api calls because initially we render something on the ui then make an api call to show the actual data.

# 5. what is optional chaining?
Ans: Optional chaining operator (?.) access objects property or calls a function. If the object accessed or the function we called is undefined or null it evaluates to undefined without throwing an error.

# 6. What is shimmer UI?
Ans: It is a new way of showing something on the ui while the page loads. We generally show the skeleton of our app by the time the data is loaded. You can see this in youtube application once you reload it.

# 7. what is the differenece between js expression and js statement?
Ans:  expressions are those which produces some values like 1,"hello" where are statements are instructions to the computer like let a=10; 
A JavaScript program consists of a sequence of statements. Each statement is an instruction to do something, like create a variable, run an if/else condition, or start a loop.
Expressions produce a value, and these values are slotted into statements.

# 8. What is conditional rendering, explain with a code example?
Ans: Conditional rendering means rendering the component according to the condition. we generally use ternary operator to do conditional rendering.
ex:
{isLoggedIn?<Userlogin />:<Guestlogin />}
here we are using ternary operator. If is loggedin returns true we will render userlogin component else guestlogin will be rendered on the ui.

# 9. what is CORS?
Ans: A Cross Origin Resource Sharing is a http based header mechanism that allows a server to indicate any origins aparts from it own from which a browser should permit loading resources. Browser and server interact to see whether it is safe to allow cross origin request.

# 10. What is async and await?
Ans: Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value. Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result.

# 11. What is the use of const json = await data.json(); in getRestaurants()?
Ans: we are converting the response to json so that we can use it in our cards and we have used await because we have to wait until we get the response then we can use it.