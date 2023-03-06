import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
