import React, { useEffect } from 'react'; // Removed useState import
import "../assets/global.css";
import "../Pages/Blog.css";
import blogData from "../data/blog.json";

const itemsPerPage = 8;

const BlogContent = () => {
    const [blogs, setBlogs] = React.useState([]); // Using useState here
    const [currentPage, setCurrentPage] = React.useState(1); // Using useState here

    useEffect(() => {
        setBlogs(blogData);
    }, []);

    const totalItems = blogs.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const paginatedBlogs = blogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className='blogs'>
            <div className='blogs-cont container'>
                {paginatedBlogs.map((blog) => (
                    <div key={blog.id} className="blogs-item">
                        <img className='blogs-img' src={blog.image} alt="info blog" />
                        <div>
                            <span className='blogs-subtitle'>{blog.date}</span>
                            <span className='blogs-admin'>{blog.admin}</span>
                        </div>
                        <p className='blogs-text'>{blog.text}</p>
                        <div className='blogs-icon'>
                            <p className='blogs-more'>{blog.more}</p>
                            <img src={blog.icon} className='blogs-icon1' alt="icon info my name" />
                            <p className='blogs-number'>{blog.number}</p>
                        </div>
                    </div>
                ))}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogContent;


// import React, { useState, useEffect } from 'react';
// import "../assets/global.css";
// import "../Pages/Blog.css";
// import blogData from "../data/blog.json";

// const itemsPerPage = 8;

// const BlogContent = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         setBlogs(blogData);
//     }, []);

//     const totalItems = blogs.length;
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     const handlePageChange = (newPage) => {
//         setCurrentPage(newPage);
//     };

//     const paginatedBlogs = blogs.slice(
//         (currentPage - 1) * itemsPerPage,
//         currentPage * itemsPerPage
//     );

//     return (
//         <section className='blogs'>
//             <div className='blogs-cont container'>
//                 {paginatedBlogs.map((blog) => (
//                     <div key={blog.id} className="blogs-item">
//                         <img className='blogs-img' src={blog.image} alt="info blog" />
//                         <div>
//                             <span className='blogs-subtitle'>{blog.date}</span>
//                             <span className='blogs-admin'>{blog.admin}</span>
//                         </div>
//                         <p className='blogs-text'>{blog.text}</p>
//                         <div className='blogs-icon'>
//                             <p className='blogs-more'>{blog.more}</p>
//                             <img src={blog.icon} className='blogs-icon1' alt="icon info my name" />
//                             <p className='blogs-number'>{blog.number}</p>
//                         </div>
//                     </div>
//                 ))}
//                 <div className="pagination">
//                     {Array.from({ length: totalPages }, (_, index) => (
//                         <button
//                             key={index + 1}
//                             onClick={() => handlePageChange(index + 1)}
//                             className={currentPage === index + 1 ? 'active' : ''}
//                         >
//                             {index + 1}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BlogContent;








