import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Sscbanking from "./component/courses/sscbanking/Sscbanking";
import Tnpsc from "./component/courses/tnpsc/Tnpsc";
import Upsc from "./component/courses/upsc/Upsc";
import ExploerCoursePage from "./component/ExploerCoursePage";
import Testseries from "./component/Testseries";
import TestSeriesPage from "./component/TestSeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/home",
    element: (<Home/>),
  },
  {
    path: "/tnpsc",
    element: (<Tnpsc/>),
  },
  {
    path: "/upsc",
    element: (<Upsc/>),
  },
  {
    path: "/sscandbanking",
    element: (<Sscbanking/>),
  },,
  {
    path: "/explorecourse",
    element: (<ExploerCoursePage/>),
  },
  {
    path: "/testseries",
    element: (<TestSeriesPage/>),
  }
]); 

export default router;