import React from 'react';
import Learning from '../Learning/Learning.json';

function CourseCard({ course }) {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden mx-4 mt-4">
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="text-gray-700 text-sm mb-2">By: {course.provider}</p>
        <a className="text-blue-500 hover:text-blue-700" href={course.link}>
          Learn More
        </a>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm">Description: {course.description}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-gray-700 text-sm">
          Duration: {course.duration} | Level: {course.level}
        </span>
        <span className="text-gray-700 text-sm">Price: {course.price}</span>
      </div>
    </div>
  );
}

function CourseList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Learning.learning.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
