import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
