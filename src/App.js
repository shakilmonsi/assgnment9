import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Quizs from "./Components/Quiz/Quizs";
import Statistcs from "./Components/Statistcs/Statistcs";
import Blog from "./Components/Blog/Blog";
import Qquestion from "./Components/QuizQuestion/Qquestion";
import Errorpage from "./Layout/Errorpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/quizes",
          element: <Quizs></Quizs>,
        },
        {
          path: "/statistics",
          element: <Statistcs></Statistcs>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quiz/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Qquestion></Qquestion>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
