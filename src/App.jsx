import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

function App() {

  const [courses,setCourses]=useState(null);
  //is we don't add the spinner part then the for each loop run on the null give error can be handled using with useState([])
  const [loading,setLoading]=useState(true);

  const [category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      //output
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  //rendring for the first time only
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="min-h-screen flex flex-col bg-[#2c4868]">
      <div>
        <Navbar />
      </div>
      <div>
      <Filter category={category} setCategory={setCategory} filterData={filterData} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
}

export default App;
