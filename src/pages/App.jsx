import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import TempDetails from "../components/TempDetails";
import TimeAndLocation from "../components/TimeAndLocation";

function App() {
  return (
    <div className="min-h-screen w-screen py-5">
      <div className="mx-auto w-11/12 sm:w-10/12 lg:w-8/12 h-full bg-gradient-to-br from-cyan-300 to-blue-600 rounded-md shadow-md flex flex-col items-center gap-5 p-5">
        <Header />
        <SearchForm />
        <TimeAndLocation />
        <TempDetails />
      </div>
    </div>
  );
}

export default App;
