## 1.is jsx mandatory for react?
Ans: JSX is not mandatory for react. You can create elements using createElement. JSX makes our life easy. So most of the developers use JSX.

## 2.Is ES6 mandatory for react?
Ans:JS6 is not mandatory but it is a best practice to use ES6 as the code is more readable and everyone uses it

## 3.{TitleComponent} VS {<TitleComponent />} vs {<TitleComponent><TitleComponent/>} in JSX
Ans: {TitleComponent} is a javascript variable passed inside jsx where as {<TitleComponent />} is a react component and {<TitleComponent><TitleComponent/>} is also a react component with no children.

## 4.How can i write comments in JSX?
Ans: /**/

## 5.What is <React.Fragment></React.Fragment>and <></>?
Ans: They are higher order components. React renders only one component so when you have multiple dom elements those are wrapped inside React.Fragment or empty tags.

## 6.what is virtual DOM?
Ans: Virtual DOM is a programming concept where an ideal or virtual representaion of a UI is kept in memory and synced with REAL DOM by a library called ReactDOM. This process is called reconciliation.

## 7.What is Reconciliation in React?
Ans: Reconciliation is a process in which react updates the browser DOM. When we make some changes in the UI, React creates a new virtual DOM and compares it the original DOM and it updates only that part where it sees the change not the entire DOM.

## 8.What is react fiber?
Ans: React Fiber is a concept of reactjs that is used to render a system faster or smoother.Introduced from React 16, Fiber Reconciler is the new reconciliation algorithm in React. The term Fiber refers to React's data structure (or) architecture, and originates from 'fiber' - a representation of a node of the DOM tree.


## 9. Why we need keys in React?When do we need keys in React?
Ans: Keys are used at time of reconciliation. When we have so many children and a new children has been inserted if we doesnt provide keys react doesnt understand which child has been added and it renders the entire DOM. Where as if you provide keys it sees which child has been newly added and it only renders that part.

## 10. Can we use index as keys in React?
Ans: It is not recommended to use index as keys in react but when you dont have id you can use index as keys.

## 11. What is props in react?
Ans: Props are shorthand for properties. Those are just the arguments to  components. Those are some values which you can pass to your components.

## 12. What is config driven UI?
Ans: Controlling UI, how the UI looks like using data, using a config. 