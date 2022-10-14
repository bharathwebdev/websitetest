
import React from 'react'
import InnerApp from './InnerApp'
import { Routes ,Route} from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RequirdAuth from './RequirdAuth'
import SignIn from './Admin/AdminSign'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Admin/AdminContext'
import AdminMain from './Admin/components/AdminMain'
import PrivateRoute from './RequirdAuth'
import Form from './component/RegistertFrom'
import AdminPannel from './Admin/components/AdminPannel'
import PaidUsers from './Admin/components/PaidUsers'
import UnPaidUsers from './Admin/components/UnpaidUsers'
import SingleUserPage from './Admin/components/SingleUserPage'
function App() {
  return (
    <div>
    
        <UserProvider>
        <Routes>
            <Route path='/'element={<InnerApp/>}/>

            <Route path='/Admin' element={<PrivateRoute/>}>

            <Route path='/Admin'element={<AdminMain/>}>
              <Route path='paid' element={<PaidUsers/>}/>
              <Route path='unpaid' element={<UnPaidUsers/>}/>
              <Route path='scanusers' element={<AdminPannel/>}/>
              </Route> 

            </Route>
            <Route path='/register-form' element={<Form/>}/>
            <Route path='/Admin/login' element={<SignIn/>}/>
            <Route path='/user/:userid' element={<SingleUserPage/>}/>
            <Route path='*' element={<h1>page not found</h1>}/>
            {/* <Route path='/Admin/paid' element={<h1>paid users</h1>}/> */}
        </Routes>
        <ToastContainer/>
       </UserProvider>

  </div>
  )}
export default App;

