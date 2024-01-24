import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root";
import { cardDetailsLoader, cardsLoader } from "./utils/loaders";
import HomePage from "./pages/Home";
import CardsPage from "./pages/CardsPage";
import CardDetailsPage from "./pages/CardDetails";
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
          path: "cards", // element: <SecondaryLayout />,
          children: [
            {
              index: true,
              element: <CardsPage />,
              loader: cardsLoader,
            },
            {
              path: ":card",
              element: <CardDetailsPage />,
              loader: cardDetailsLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
