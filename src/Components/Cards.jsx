import React from "react";
import Card from "./Card";

function Cards({ courses }) {
  let allCourses = [];

  //returns you a list of all courses received from the api response
  const getCourses = () => {
    //Object.values to get all the values as we don't need keys
    Object.values(courses).forEach((coursesCategory) => {
      coursesCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div>
      {!courses ? (
        <div>
          <p>NO Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return <Card key={course.id} course={course} />;
        })
      )}
    </div>
  );
}

export default Cards;
