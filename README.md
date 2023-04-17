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
