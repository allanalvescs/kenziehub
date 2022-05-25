import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import PagesRoutes from "./Routes/routes";

function App() {
  return (
    <div>
      <PagesRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
}

export default App;
