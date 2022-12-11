import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl bg-indigo-600">
        <div>
          <p>Question number 01: What is the purpose of react router?</p>
          <hr />
        </div>
        <div>
          <h4>Answer:---</h4>
          <p>
            is a standard library for routing in React. It enables the
            navigation among views of various components in a React Application,
            allows changing the browser URL, and keeps the UI in sync with the
            URL. Let us create a simple application to React to understand how
            the React Router works. The application will contain three
            components: home component, about a component, and contact
            component. We will use React Router to navigate between these
            components.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-indigo-600">
        <div>
          <p>Question number 02: What do you know about useRef Hooks ?</p>
          <hr />
        </div>
        <div>
          <h4>Answer:---</h4>
          <p>
            The useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component. Example:
            How to access the DOM using useRef hook.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl bg-indigo-600">
        <div>
          <p>Question number 03: How does context API works?</p>
          <hr />
        </div>
        <div>
          <h4>Answer:--</h4>
          <p>
            Context API is a (kind of) new feature added in version 16.3 of
            React that allows one to share state across the entire app (or part
            of it) lightly and with ease. Let's see how to use it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
