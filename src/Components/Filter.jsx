import React from "react";

function Filter({ filterData }) {
  return (
    <div className="flex justify-center gap-4 items-center h-[10vh]">
      {filterData.map((data) => {
       return <button key={data.id} className="font-black text-white border-2 p-2 px-3 rounded-lg bg-[#172642]">
       {data.title}
     </button>;
      })}
    </div>
  );
}

export default Filter;
