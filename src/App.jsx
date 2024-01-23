import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root";
import HomePage from "./pages/Home";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "card",
          // element: <SecondaryLayout />,
          children: [
            {
              index: true,
              // element: <CardPage />
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
