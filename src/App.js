
import './App.css';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Article from './Pages/Article';
import Mypage from './Pages/Mypage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss';

const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
};


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/post/:id',
        element: <Mypage/>,
      },
      {
        path:'/article',
        element: <Article/>,
      },
      {
        path:'/home',
        element: <Home/>,
      }
    ]
  },
  
  {
    path:'/signup',
    element: <Signup />,
  },
  {
    path:'/login',
    element: <Login />,
  },
])

function App() {
  return (
    <div className="App">
      <div className='container'>
      <RouterProvider router = {router} />
       </div>
    </div>
  );
}




export default App;
