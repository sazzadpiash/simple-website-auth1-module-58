import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import NoPageAvailable from './components/NoPageAvailable/NoPageAvailable';
import Register from './components/Register/Register';
import Account from './components/Account/Account';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/account',
          element: <PrivateRoute><Account></Account></PrivateRoute> 
        }
      ]
    },
    {
      path: '*',
      element: <NoPageAvailable></NoPageAvailable>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
