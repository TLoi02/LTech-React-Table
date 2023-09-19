import './App.css';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <div>
        <Header/>
        <TableUsers/>
      </div>
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
        theme="light"
        />
    </>
  );
}

export default App;
