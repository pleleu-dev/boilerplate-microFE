import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link, BrowserRouter, Outlet} from 'react-router-dom';

import { Header } from 'ui';

import "./index.scss";

const RemotePing = lazy(()=> import('ping/App'));
const RemoteBoop = lazy(()=> import('boop/App'));



const Web = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header /> 
    <h1>WEB</h1>
    <nav className="mt-10 text-3xl mx-auto max-w-6xl">
      <Link to="boop">Boop</Link> |{" "}
      <Link to="ping">ping</Link>
    </nav>
     <div className="content">
        <Outlet />
     </div>
  </div>
)

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
