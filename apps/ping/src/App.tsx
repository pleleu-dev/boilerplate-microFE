import React, {lazy, Suspense} from "react";

const RemoteBoop = lazy(()=> import('boop/BoopBtn'));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: ping</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Suspense fallback='loading boop'>
      <RemoteBoop value={10}/>
    </Suspense>

  </div>
);

export default App
