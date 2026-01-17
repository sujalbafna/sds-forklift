import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import GoogleTranslate from './components/shared/GoogleTranslate';
import { routes } from './routes';


function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <GoogleTranslate />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;