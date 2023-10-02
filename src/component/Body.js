import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         const { uid, email, displayName, photoURL } = user;
  //         dispatch(addUser({ uid, email, displayName, photoURL }));
  //       } else {
  //         // User is signed out
  //         dispatch(removeUser());
  //       }
  //     });
  //   }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
