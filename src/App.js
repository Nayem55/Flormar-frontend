import './App.css';
import { ThemeContext } from './Contexts/ThemeContext';
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from './Routes/Routes';


function App() {
  return (
    <ThemeContext.Provider  value={{}}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
    </ThemeContext.Provider>
  );
}

export default App;
