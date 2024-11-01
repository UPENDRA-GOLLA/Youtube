import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store  from "./Utils/strore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import WatchPage from "./Utils/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Body />,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
       {
        path:"/watch",
        element:<WatchPage/>
      },
    ]

  }
])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter}/>
      {/*
      
      *
      *Head
      *
      * Body
      * sidebar
      *   MenuItems
      * ButtonList
      * MainContainer
      *   ButtonList
      *    VideoContainer
      *       VideoCard*/}
    </div>
    </Provider>
  );
}

export default App;

