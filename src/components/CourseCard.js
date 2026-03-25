import React, { useState } from 'react';

const CourseCard = ({ course, isEnrolled, onEnroll }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      width: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: 'white',
      transition: 'transform 0.2s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p><strong>Price: ${course.price}</strong></p>
      {showDetails && (
        <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#666' }}>
          <p>Duration: 4 weeks</p>
          <p>Level: {course.title.includes('Fundamentals') ? 'Beginner' : 'Intermediate'}</p>
          <p>Instructor: AWS Expert</p>
        </div>
      )}
      <div style={{ marginTop: '1rem' }}>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#007bff',
            border: '1px solid #007bff',
            padding: '0.3rem 0.6rem',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '0.5rem'
          }}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        <button
          style={{
            backgroundColor: isEnrolled ? '#28a745' : '#ff9900',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: isEnrolled ? 'default' : 'pointer',
            opacity: isEnrolled ? 0.7 : 1
          }}
          onClick={onEnroll}
          disabled={isEnrolled}
        >
          {isEnrolled ? 'Enrolled' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;