import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TodoContextProvider from './store/TodoContext'

ReactDOM.render(
	<TodoContextProvider>
		<App />
	</TodoContextProvider>,
	document.getElementById('root'),
)
