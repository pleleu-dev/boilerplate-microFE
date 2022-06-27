import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link, BrowserRouter, Outlet} from 'react-router-dom';

import { useStore } from 'store';
import { Header, Button } from 'ui';

import "./index.scss";

const RemotePing = lazy(()=> import('ping/App'));
const RemoteBoop = lazy(()=> import('boop/App'));



const Web = () => {
  const {counter, increment} = useStore()
  return (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header /> 

    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">WEB</h2>
        <p>Likes : {counter}</p>
    </div>

    <Button handleClick={increment} label = "Easy like"/>
    <nav className="mt-10 text-3xl mx-auto max-w-6xl">
      <Link to="boop">Boop</Link> |{" "}
      <Link to="ping">ping</Link>
    </nav>
     <div className="content">
        <Outlet />
     </div>
  </div>
)}

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback='loading web app'><Web/> </Suspense>}>
          <Route path="/boop" element={<Suspense fallback='loading boop app'><RemoteBoop/> </Suspense>} />
          <Route path="/ping" element={<Suspense fallback='loading ping app'><RemotePing/> </Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
);

const container = document.getElementById("app") as Element;
const root = ReactDOM.createRoot(container);
root.render(<App/>);
