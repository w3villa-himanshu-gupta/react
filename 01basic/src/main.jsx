import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyFunction(){
//     return(
//         <h1>test my function</h1>
//     )
// }

createRoot(document.getElementById('root')).render(
    // <MyFunction/>
    <App />
)
