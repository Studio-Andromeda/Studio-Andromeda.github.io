import { Fragment } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import NoPage from './pages/NoPage.jsx'
import {Route, Routes} from 'react-router-dom'

function App()
{
  return <Fragment>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/about" element= {<About />} />
            <Route path="*" element= {<NoPage />} />
          </Routes>

        
         </Fragment> 
}

export default App