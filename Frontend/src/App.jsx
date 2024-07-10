
import { BrowserRouter, Route, Routes } from'react-router-dom'
import { Signup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { Dashbord } from './Pages/Dashbord'
import { Send } from './Pages/Send'

function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/send' element={<Send/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
