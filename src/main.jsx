import  ReactDom  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { persistor, store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react'

ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <PersistGate  persistor={persistor}>
      <BrowserRouter>
    <App />
    <ToastContainer />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
)
