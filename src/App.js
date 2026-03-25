import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CourseList from './components/CourseList';
import EnrolledSummary from './components/EnrolledSummary';
import Footer from './components/Footer';

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courses = [
    {
      title: 'AWS Fundamentals',
      description: 'Learn the basics of AWS cloud computing.',
      price: 99
    },
    {
      title: 'EC2 Mastery',
      description: 'Master Amazon EC2 instances and virtual servers.',
      price: 149
    },
    {
      title: 'S3 Storage Solutions',
      description: 'Deep dive into Amazon S3 for storage needs.',
      price: 129
    },
    {
      title: 'Lambda Serverless',
      description: 'Build serverless applications with AWS Lambda.',
      price: 199
    },
    {
      title: 'RDS Databases',
      description: 'Manage relational databases with Amazon RDS.',
      price: 159
    },
    {
      title: 'CloudFormation IaC',
      description: 'Infrastructure as Code with AWS CloudFormation.',
      price: 179
    }
  ];

  const handleEnroll = (courseTitle) => {
    if (!enrolledCourses.includes(courseTitle)) {
      setEnrolledCourses([...enrolledCourses, courseTitle]);
    }
  };

  return (
    <div className="App">
      <Header />
      <CourseList courses={courses} enrolledCourses={enrolledCourses} onEnroll={handleEnroll} />
      <EnrolledSummary enrolledCourses={enrolledCourses} courses={courses} />
      <Footer />
    </div>
  );
}

export default App;
