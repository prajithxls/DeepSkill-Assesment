import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("book"); // book, blog, course
  const [showCourses, setShowCourses] = useState(true);

  // 1. if/else rendering
  let componentToRender;
  if (view === "book") {
    componentToRender = <BookDetails />;
  } else if (view === "blog") {
    componentToRender = <BlogDetails />;
  } else {
    componentToRender = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📖 Blogger App</h1>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setView("book")}>Show Book</button>{" "}
        <button onClick={() => setView("blog")}>Show Blog</button>{" "}
        <button onClick={() => setView("course")}>Show Course</button>
      </div>

      {/* 1. if/else method */}
      {componentToRender}

      {/* 2. Ternary operator */}
      <h2>Ternary Example:</h2>
      {view === "book" ? <BookDetails /> : <BlogDetails />}

      {/* 3. Short-circuit rendering */}
      <h2>Short-Circuit Example:</h2>
      {showCourses && <CourseDetails />}
      <button onClick={() => setShowCourses(!showCourses)}>
        {showCourses ? "Hide Courses" : "Show Courses"}
      </button>
    </div>
  );
}

export default App;
