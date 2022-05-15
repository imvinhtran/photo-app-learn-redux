import './App.css';
import { BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom';
import { Suspense } from 'react';
import { Button } from 'reactstrap';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Photo from './features/Photo/Photo';
import SignIn from './features/Auth/pages/SignIn/SignIn';


function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Button >Fetch Product List</Button>
          <ul>
            <li><Link to='/photos'>Go to Photo Page</Link></li>
            <li><Link to='/photos/add'>Go to ADD Photo Page</Link></li>
            <li><Link to='/photos/123'>Go to Edit Photo Page</Link></li>
          </ul>

          <Routes>
            {/* <Route path="/" element={<Navigate to="/photos" />}></Route> */}

            <Route path="/photos" element={<Photo />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
