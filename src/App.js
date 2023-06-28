
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
    path:'/blog',
    element: <Layout/>,
    children:[
      {
        path:'/blog/post/:id',
        element: <Mypage/>,
      },
      {
        path:'/blog/article',
        element: <Article/>,
      },
      {
        path:'/blog/home',
        element: <Home/>,
      }
    ]
  },
  
  {
    path:'blog/signup',
    element: <Signup />,
  },
  {
    path:'/',
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
