import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
  const componentRef = useRef();
  const pdfRef = useRef();

  const handleDownloadPdf = () => {
    pdfRef.current.save();
  };

  return (
    <div className="my-container my-8 bg-gray-100 p-6 rounded-md shadow-lg">
      <div className="flex justify-end text-white">
        <ReactToPdf targetRef={componentRef} filename="blog.pdf" ref={pdfRef}>
          {({ toPdf }) => (
            <button className="bg-rose-600 hover:bg-rose-700 px-3 py-2 my-4" onClick={toPdf}>
              Download PDF
            </button>
          )}
        </ReactToPdf>
      </div>
      <div ref={componentRef}>
        <p className="text-gray-700 mb-4">1. Differences between uncontrolled and controlled components.</p>
        <p className="text-gray-700 my-4">Uncontrolled is handled by the DOM. A controlled component is handled by the react state. Uncontrolled is inefficient for react app, on the other hand, a controlled component is managed and updated by react state so, react can make any change effectively in UI.</p>

        <p className="text-gray-700 mb-4">2. How to validate React props using PropTypes .</p>
        <p className="text-gray-700 my-4">In React, PropTypes is a package used to validate the props passed to a component. It provides a way to check the type. To use PropTypes, first, we need to install. Then, import PropTypes from the 'prop-types' package and define the propTypes object inside the component. </p>
        <p className="text-gray-700 mb-4">3. Difference between nodejs and express js.</p>
        <p className="text-gray-700 my-4">Node.js is a JavaScript runtime built on V8 JavaScript engine. It allows developers to run JavaScript code on the server side, and is used for building web applications. On the other hand, Express.js is a web application framework built for Node.js. It provides many features and tools for building web applications.</p>
        <p className="text-gray-700 mb-4">4. What is a custom hook, and why will you create a custom hook?</p>
        <p className="text-gray-700 my-4">In React, a custom hook is a function that allows us to reuse our code as a hook. It reduces code repetition and first our development experience. It can be used by multiple components.</p>
      </div>
    </div>
  );
};

export default Blog;
