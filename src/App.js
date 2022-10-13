
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
function App() {
  return (
    <div>
    
        <UserProvider>
        <Routes>
            <Route path='/'element={<InnerApp/>}/>

            <Route path='/Admin' element={<PrivateRoute/>}>
            <Route path='/Admin'element={<AdminMain/>}/> 
            </Route>
            <Route path='/register-form' element={<Form/>}/>
            <Route path='/Admin/login' element={<SignIn/>}/>
            <Route path='*' element={<h1>page not found</h1>}/>
        </Routes>
        <ToastContainer/>
       </UserProvider>

  </div>
  )}
export default App;

