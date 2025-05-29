import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Weather from './Weather_App/WeatherApp'
import './Weather_App/Weather.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className='App'>
      <Weather/>
    </div>
  


  </StrictMode>,
)
