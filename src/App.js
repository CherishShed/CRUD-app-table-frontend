import './App.css';
import ToastComp from './components/toastComponent';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/me",
      element: <ToastComp />,
    },
  ]);
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
