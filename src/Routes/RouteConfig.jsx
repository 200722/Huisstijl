import React from "react";
import ArticlePage from "../Pages/ArticlePage";
import Card from "../components/Cads/Cards";
import Image from "../Pages/Image";
export const RouteConfig = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Card />,
      },
      {
        path: "/kleur/:slug",
        element: <ArticlePage />,
      },
      {
        path: "/inleidend/:slug",
        element: <ArticlePage />,
      },
      {
        path: "/de-basis/:slug",
        element: <ArticlePage />,
      },
      {
        path: "/logo/:slug",
        element: <ArticlePage />,
      },
      {
        path: "/font/:slug",
        element: <ArticlePage />,
      },
      {
        path: "/Bouwstenen/:slug",
        element: <ArticlePage />,
      },
      {
        path: "/Bouwstenen/download:slug",
        element: <ArticlePage />,
      },
      {
        path: "/image",
        element: <Image />,
      },
      {
        path: "*",
        element: <Card />,
      },
    ],
  },
];
// import Card from "../components/Cads/Cards";
