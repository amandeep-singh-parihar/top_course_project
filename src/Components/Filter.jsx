import React from "react";

function Filter({ filterData, category, setCategory }) {
    function filterHandler(title) {
        setCategory(title);
        // now this function take the title which is clicked in the filterbar , now I set the category with
        // the clicked title
        // here the setCategory is a function which make the value of category to this title
    }

    return (
        <div className="w-11/12 mx-auto flex justify-center gap-4 items-center h-[10vh]">
            {filterData.map((data) => (
                <button
                    onClick={() => filterHandler(data.title)}
                    // here when I click the button in the filter bar a title asociated with it pass to
                    // the filterHanlder function
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
