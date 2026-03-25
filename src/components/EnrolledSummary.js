import React from 'react';

const EnrolledSummary = ({ enrolledCourses, courses }) => {
  const enrolledDetails = courses.filter(course => enrolledCourses.includes(course.title));
  const totalPrice = enrolledDetails.reduce((sum, course) => sum + course.price, 0);

  if (enrolledCourses.length === 0) return null;

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      margin: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>Your Enrolled Courses</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {enrolledDetails.map((course, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {course.title} - ${course.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default EnrolledSummary;