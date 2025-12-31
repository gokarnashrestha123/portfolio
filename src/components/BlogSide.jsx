import React from "react";
import "./BlogSide.css";
import blog1 from "../assets/web development1.jpg";
import blog2 from "../assets/web development5.jpg";
import blog3 from "../assets/web development3.jpg";
import blog4 from "../assets/web development4.jpg";
import blog5 from "../assets/web development5.jpg";
import blog6 from "../assets/web development6.jpg";
import { FaComment, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: blog1,
    date: "Jan 18, 2021",
    comments: 3,
    title: "Tips About Creating A New Web Design",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    id: 2,
    image: blog2,
    date: "Feb 10, 2021",
    comments: 2,
    title: "How to Improve Your UI Skills",
    description:
      "Learn the best tips to improve your UI and make your design more engaging.",
  },
  {
    id: 3,
    image: blog3,
    date: "Mar 5, 2021",
    comments: 5,
    title: "Understanding React Components",
    description:
      "A quick guide to understand React components and how to reuse them effectively.",
  },
  {
    id: 4,
    image: blog4,
    date: "Apr 12, 2021",
    comments: 1,
    title: "CSS Grid vs Flexbox",
    description:
      "A simple explanation of when to use CSS Grid and when to use Flexbox in your projects.",
  },
  {
    id: 5,
    image: blog5,
    date: "May 20, 2021",
    comments: 4,
    title: "JavaScript ES6 Features",
    description:
      "An overview of the most useful ES6 features every web developer should know.",
  },
  {
    id: 6,
    image: blog6,
    date: "Jun 18, 2021",
    comments: 6,
    title: "Creating Responsive Web Designs",
    description:
      "Tips and tricks to make your web designs fully responsive across all devices.",
  },
];

const BlogSide = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <h4>Our Blog</h4>
        <h2>Recent From Blog</h2>
      </div>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-info">
              <div className="blog-meta">
                <span className="date">
                  {" "}
                  <FaCalendarAlt />
                  {blog.date}
                </span>
                <span className="comments">
                  {" "}
                  <FaComment />
                  {blog.comments} COMMENTS
                </span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSide;
