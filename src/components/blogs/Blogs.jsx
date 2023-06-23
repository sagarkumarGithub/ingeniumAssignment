import React, { useState, useEffect } from "react";
import "./Blogs.css";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Blogs = () => {
  const [data, setData] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(URL);
      const data = await response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs(URL);
  }, []);

  return (
    <>
      <div className="blogsCont">
        <h1>Latest Blogs</h1>
        <div className="blogs">
          {data.map((item) => {
            const title = item.title;
            const body = item.body;
            return (
              <div className="blog">
                <div className="image">
                  <img
                    src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80"
                    alt="blog"
                  />
                </div>
                <div className="details">
                  <h2>{title}</h2>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
