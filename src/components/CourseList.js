import React from 'react';
import CourseCard from './CourseCard';

const CourseList = ({ courses, enrolledCourses, onEnroll }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          course={course}
          isEnrolled={enrolledCourses.includes(course.title)}
          onEnroll={() => onEnroll(course.title)}
        />
      ))}
    </div>
  );
};

export default CourseList;