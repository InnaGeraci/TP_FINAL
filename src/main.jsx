import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { MessagesProvider } from './MessagesContext/MessagesContext'

import App from "./App"
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <MessagesProvider>
      <App />
    </MessagesProvider>
  </BrowserRouter>
);