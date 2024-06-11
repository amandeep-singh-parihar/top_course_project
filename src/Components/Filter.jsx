import React from "react";

function Filter({ filterData, category, setCategory }) {

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className="w-11/12 mx-auto flex justify-center gap-4 items-center h-[10vh]">
      {filterData.map((data) => (
        <button onClick={()=>filterHandler(data.title)}
          key={data.id}
          className="font-black text-white border-2 border-transparent hover:border-white p-2 px-3 rounded-lg bg-[#172642]"
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
