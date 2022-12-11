import React from "react";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = ({ quizCategory }) => {
  const { name, logo, total, id } = quizCategory;
  return (
    <div className="md:w-full  mx-auto p-2">
      <div className="flex text-white relative flex-col items-center  flex-1 p-4 bg-primary rounded-lg shadow-lg shadow-slate-300">
        <div>
          <img className="w-80 md:w-72" src={logo} alt="" />
        </div>
        <p className="absolute top-4  right-4 bg-success px-2 rounded-md ">
          Total Quiz {total}
        </p>
        <div className="lg:flex justify-between   items-center  mt-3 pt-3">
          <p className=" font-mono text-2xl mb-3 lg:m-0">{name} Quiz...</p>
          <Link to={`../quiz/${id}`}>
            <button className="btn font-bold btn-wide  btn-success rounded-md">
              Start Practice{" "}
              <FontAwesomeIcon
                className="ml-3"
                size="lg"
                icon={faArrowRight}
              ></FontAwesomeIcon>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
