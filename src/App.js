import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header isTablePage={false}/>
      <main className="flexbox">
        <h2>EMPLOYEE MANAGEMENT APP</h2>
        <img src="images/hrGif.gif" alt="HR Management App GIF"/>
      </main>
      <Footer />
    </>
  },
  {
    path: "/table",
    element: <>
      <Header isTablePage={true}/>
      <Main />
      <Footer />
    </>
  },
  {
    path: "/table/view-employee/:empid",
    element: <>
      <Header isTablePage={true}/>
      <Main />
      <Footer />
    </>
  },
  {
    path: "/table/delete-employee/:empid",
    element: <>
      <Header isTablePage={true}/>
      <Main />
      <Footer />
    </>
  },
  {
    path:"*",
    element:<>
    <Header />
    <main className="flexbox">
      <h2>Page does not exist.</h2>
    </main>
    <Footer />
    </>
  }
])
const App = () => {
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
