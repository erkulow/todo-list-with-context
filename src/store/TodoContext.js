import React, { useEffect, useState } from 'react'

export const TodoContext = React.createContext({
	data: [],
	getValueHandler: () => {},
	setData: () => {},
})
const TodoContextProvider = (props) => {
	const [array, setArray] = useState([])
	const getValueHandler = (newObject) => {
		setArray([...array, newObject])
	}
	console.log(props)
	useEffect(() => {
		const raw = localStorage.getItem('todo') || []
		setArray(JSON.parse(raw))
	}, [])
	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(array))
		console.log(array)
	}, [array])
	return (
		<TodoContext.Provider
			value={{
				data: array,
				getValueHandler: getValueHandler,
				setData: setArray,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	)
}
export default TodoContextProvider
