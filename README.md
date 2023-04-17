# Module-60-React-Auth-Integration-and-Private-Route

## 60-1 Module Introduction and Basic Project Setup

- Basic require setup has done

## 60-2 Create Login and Registration Form using Daisy UI

- Create required forms

## 60-3 Create User Context for shared authentication

### context API

- Create Context and export it
- Create Provider
- Set context value
- To access the value : useContext hook

### share context API

- set authProvider in main.jsx to share the value from context API to all other components, because everyone is inside the route provider. Context API is the parent of route provider
- Inside the context provider, access children as props and then use

## 60-4 Access Context Value from anywhere inside the app

- We can send object through context API

## 60-5 Add Create user and Sign in user using context API

- As we are using context API and our common functionality in different component so we would break down it

## 60-6 (advanced) Use onAuthStateChanged to manage user auth state

### Get the currently signed-in user

#### onAuthStateChanged(...)

- This method works like observer and firebase can hold the value, with normal state it is not possible
- Here it is holding the value wether user logged in or not

### cleanup function

- It should return a cleanup function with cleanup code that disconnects from external system

## 60-7 Introduction to Private Route and navigate after login

### Private Route

- It is use for browsing privately
  - Like we are in an e-commerce website. We set a condition if user already logged in then can go to the order page otherwise we would force the user to logged in
- To prevent bouncing the user to the login page we can declare a state, and when data loaded we can change the state value
