import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./component/Browse";
import Login from "./component/Login";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
