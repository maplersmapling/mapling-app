import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import WebFont from 'webfontloader';
import './App.module.css';

function App() {

    {/*fonts added and loaded to React from google's font api*/}
    React.useEffect(() => {
      WebFont.load({
        google: { 
          families: ['Alkatra','Single Day', 'Amita', 'Courier Prime', 
                     'Kalam', 'Lemonada', 'Lobster Two', 
                     'Nanum Pen Script', 'Oleo Script', 'Playpen Sans', 
                     'Silkscreen', 'Single Day', 'Ubuntu Mono']
        }
      });
    }, []); 

  return (
    <Router>
      <NavBar />
      <div className="container mt-2">
        <Routes>
          {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} /> 
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
