import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutComponent from "./components/About";
import ErrorComponent from "./components/errors/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const ContactComponent = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet />
    </div>
  );
};

// Create Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <ContactComponent />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);

// instead of rendering component directly, now we will render RouteProvider and we will pass appRouter in that
root.render(<RouterProvider router={appRouter} />);
