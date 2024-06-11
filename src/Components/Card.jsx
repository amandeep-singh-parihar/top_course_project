import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course ,likedCourses,setLikedCourses}) {

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //already liked
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)))
            toast.warning("Like removed")
        }else{
            //not liked
            //insert in the liked courses
             if(likedCourses.length===0){
                setLikedCourses([course.id]);
             }else{
                setLikedCourses((prev)=>[...prev,course.id]);
             }
             toast.success("Liked Successfully");
        }
    }

  return (
    <div className="w-[300px] bg-[#172642] bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <div>
          <button onClick={clickHandler} className="w-[40px] h-[40px] rounded-full absolute bg-white right-[16px] bottom-[-20px] grid place-items-center">
            {
                likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                
            }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2 leading-5 text-sm tracking-tide">
            {
                course.description.length>100 ? (course.description.substr(0,100)) + "..."  : (course.description) 
            }
        </p>
      </div>
    </div>
  );
}

export default Card;
