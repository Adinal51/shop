// const { useEffect } = require("react");

// const AvailableMeals = () => {
//   useEffect(() => {
//     const fetchmeals = async () => {
//       await fetch("url").then();
//     };
//     fetchmeals();
//   }, []);
// };

// const redux = require("redux");
//const initialState = { counter: 0,showCounter:true}
// const counterReducer = (state = { initialState }, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//     };
//   } else if (action.type === "DECREMENT") {
//     return {
//      counter: state.counter - 1,
//      showCounter:state.showCounter };
//   }
// };

// const store = redux.createStore(counterReducer);

// const counterSubscriber = () => {
//   const latestState = store.getState();
// };

// store.subscribe(counterSubscriber);
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMNET" });

// const store = configureStore({ reducer: counterSlice, reducer });

//firebase

//React-Router

/*
npm install react-router-dom

import {createBrowserRouter,createRoutesFromElements,route} from 'react-router-dom'

const routeDefinitions = createRoutesFromElements(
<Route>
<Route path="/" element={HomePAge/>}/>
</Route>
)
lub
const router = createBrowserRouter([
{path:'/',element <JSX Component/>},
{path:'/products',element:<ProductsPage/>}
])

return <RouterPRovider router={router}/>
//!
<a href="/link"/> \\
<Link to="/link"/> && <Link> </Link/>


const router = createBrowserRouter([
{
path:'/root',
element:<RootLayout/>,
errorElement:<ErrorPAge/>,
children:[
{path:'',element:<HomePAge/>},
{path:'/products',element:<ProductPAge/>},
{path:'/products:productId',element:<ProductDetailPAge/>},
]
}])

data fetch and react


 if(!response.ok){
 throw new Response(JSON.stringify({message:"cold not fetch events"}),{status:500})else{return response}
}
const ProductsContext = React.createContex({products:[


]})


listeners = listeners.filter(li=> li!== setState)
const configurateStore() => {
const actions = { TOGGLE_FAV: curState => {
const prodIndex=curState.products.findIndex(p => p.id == productId)}}}

const ingredientReducer = (currentIngredients,action) => {
switch(Action.type) {
case'SET' :
return action.ingredients;
case'ADD':
return [...currentIngredients,action,ingredient];
case 'DELETE':
return currentIngredients.filter(ing=> ing.id !== actiond.id)'
default:
throw new Error('Should not get there!')

}}


const httpReducer = (httpState,action) => {
switch(action.type){
case 'SEND':
case 'RESPONSE':
case 'ERROR':
default:
throw new Error('should not be reached!')

}

}

export const AuthContext = React.createContext({

isAuth:false,
login: () => {

}})


*/
