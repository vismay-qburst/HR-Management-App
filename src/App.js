import './App.css';
import routeMap from './Config/routerConfig';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(routeMap)
const App = () => {
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
