import { useEffect, useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/ToDos'

function App() {
	const [array, setArray] = useState([])
	const getValueHandler = (newObject) => {
		setArray([...array, newObject])
	}
	useEffect(() => {
		const raw = localStorage.getItem('todo') || []
		setArray(JSON.parse(raw))
	}, [])
	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(array))
		console.log(array);
	}, [array])
	return (
		<div className='App'>
			<AddToDo getValueHandler={getValueHandler} />
			<Todos array={array} setArray={setArray}/>
		</div>
	)
}

export default App
