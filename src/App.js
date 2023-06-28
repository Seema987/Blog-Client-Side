
import './App.css';
import { createBrowserRouter, RouterProvider, Route, Outlet, useNavigate } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Article from './Pages/Article';
import Mypage from './Pages/Mypage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss';
import EditArticle from './Pages/EditArticle';
import { useEffect, useState } from 'react';

const Layout = () => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/sessions')
      .then(res => res.json())
      .then(data => {
        if (data.result === 'successful') {
          setUser(data.user);
        } else {
          navigate('/')
        }
      })
  }, [])

  const handleBackgroundChange = (e) => {
    setUser({...user, backgroundColor: e.target.value});
  }

  if (isLoading) <></>
  if (!user) <></>

  return (
    <div className="App" style={{ backgroundColor: user.backgroundColor }}>
      <div className='container'>
        <label for="colors">Choose a Color:</label>
        <select name="colors" id="colors" onChange={handleBackgroundChange}>
         <option value="">None</option>
          <option value="beige" >Beige</option>
          <option value="aliceblue">Alice blue</option>
          <option value="bisque">Bisque</option>
          <option value="burlywood">Burlywood</option>
          <option value="lightcyan">Light cyan</option>
          <option value="lightpink">Light pink</option>
          <option value="lightgrey">Light grey</option>
          <option value="ivory">Ivory</option>
          <option value="lavender">Lavender</option>
        </select>
        <Navbar user={user} />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
};





const router = createBrowserRouter([
  {
    path: '/blog',
    element: <Layout />,
    children: [
      {
        path: '/blog/post/:id',
        element: <Mypage />,
      },
      {
        path: '/blog/article',
        element: <Article />,
      },
      {
        path: '/blog/home',
        element: <Home />,
      },
      {
        path: '/blog/editarticle/:id',
        element: <EditArticle />
      }
    ]
  },

  {
    path: 'blog/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <Login />,
  },
])

function App() {


  return (
    <RouterProvider router={router} />
  );
}




export default App;
