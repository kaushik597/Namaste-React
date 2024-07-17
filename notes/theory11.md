1. what is prop drilling?
Ans: Prop drilling is a concept in which props are passed not just to its direct child but also to its child's child ....
eg: A is parent of B, B is parent of C. If i want to use some prop of A i can pass that prop to B. B then passes it to C.


2. What is lifting the state up?
Ans: There will be some scenarios where we will need the value of child components in the parent component. In such scenarios we need to lift the state to parent component so that parent can access that value. This is called lifting the state up.

3. What is context provider and context consumer?
Ans: Context provider and consumer are the super powers provided by react. Context consumer is used to use the context value where as context provider is used to set or update the context data.

4. If you don’t pass a value to the provider does it take the default value?
Ans: No it will throw an error. You have to pass a value.

