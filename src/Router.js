import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import Sscbanking from './component/courses/sscbanking/Sscbanking';
import Tnpsc from './component/courses/tnpsc/Tnpsc';
import Upsc from './component/courses/upsc/Upsc';
import ExploerCoursePage from './component/ExploerCoursePage';
import TestSeriesPage from './component/TestSeriesPage';
import LoginPage from './component/login/LoginPage';
import UserPage from './component/user/UserPage';
import VideoPage from './component/video/VideoPage';

const AppRouter = () => {
  const [user, setUser] = useState(null);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/tnpsc',
      element: <Tnpsc />,
    },
    {
      path: '/upsc',
      element: <Upsc />,
    },
    {
      path: '/sscandbanking',
      element: <Sscbanking />,
    },
    {
      path: '/explorecourse',
      element: <ExploerCoursePage />,
    },
    {
      path: '/testseries',
      element: <TestSeriesPage />,
    },
    {
      path: '/login',
      element: <LoginPage onLogin={setUser} />,
    },
    {
      path: '/user',
      element: <UserPage/>,
    },
    {
      path: '/create-user',
      element: <TestSeriesPage />,
    },
    {
      path: '/user/video',
      element: <VideoPage/>,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;