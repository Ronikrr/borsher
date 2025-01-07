import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/slidebar/sidebar';
import Header from './components/header/header';
import { GridLoader } from 'react-spinners';
import Login from './pages/user/login';
import Register from './pages/user/register';
import Profile from './pages/user/profile';
import Contacts from './pages/user/contacts'
import Try from './pages/user/try'
import History from './pages/user/history'

const Layout = ({ children }) => {
  const [isopensidebar, setisopensidebar] = useState(false);
  const [loading, setLoading] = useState(true);

  const toogleslidebar = () => {
    setisopensidebar(!isopensidebar);
  };

  const closeslidebar = () => {
    setisopensidebar(false);
  };

  // Simulate loading delay
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-screen sm:w-full h-full lg:h-screen bg-[#f1f5f9]">
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen ">
          <GridLoader color="#007bff" />
        </div>
      ) : (
        <>
          {/* Sidebar */}
          <Sidebar closeslidebar={closeslidebar} isopensidebar={isopensidebar} />

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <Header toogleslidebar={toogleslidebar} />

            {/* Routes */}
            <div className="w-screen overflow-x-hidden sm:w-full">
              <main className="pl-0">{children}</main>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function App() {

  return (
    <div className="bg-[#f1f5f9] w-full ">
      <Router>
        <Routes>


          <Route path='/contacts' element={<Layout><Contacts /></Layout>} />
          <Route path='/try' element={<Layout><Try /></Layout>} />
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/pdf' element={<Layout><Profile /></Layout>} />
          <Route path='/history' element={<Layout><History /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
