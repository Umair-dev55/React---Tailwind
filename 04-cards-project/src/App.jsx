import React from "react";
import { Card } from "./assets/components/cards";
import Navbar from "./assets/components/navbar";
import Hero from "./assets/components/hero";

const App = () => {
  const user = "Sarthak";
  const age = 89;
  return (
    <div>
      <Navbar/>
      <Hero/>
      {Card()};
      <h1 className="bg-amber-600 text-white size-50 inline-block mr-2">
        Hello Guyz i AM {user}
      </h1>
      <p className="bg-slate-600 text-white size-50 inline-block">
        My age is {age}
      </p>
    </div>
  );
};

export default App;
