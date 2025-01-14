import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
		<BrowserRouter>
			<AppProvider>
				<App />
			</AppProvider>
		</BrowserRouter>
	// </React.StrictMode>
)
