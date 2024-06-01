import { useState } from "react";
import JoinRoom from "./Pages/Join Room page/JoinRoom";
import MeetingPage from "./Pages/Meeting Page/MeetingPage";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <JoinRoom />,
      errorElement: (
        <div className="flex flex-col gap-4 px-4">
          <div className="text-5xl font-semibold">404 page not found.</div>
          <Link to="/" className="p-2 bg-blue-500 text-white w-fit rounded-xl">Join Room page</Link>
        </div>
      ),
    },
    {
      path: "/room/:roomId",
      element: <MeetingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
