import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/ToDos'

function App() {
	return (
		<div className='App'>
			<AddToDo />
			<Todos />
		</div>
	)
}

export default App
