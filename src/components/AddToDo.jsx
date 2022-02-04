import React, { useReducer } from 'react'
import './AddToDo.css'
import Modal from './UI/Modal'
import Button from './UI/Button'
import Card from './UI/Card'

const taskReduser = (state, action) => {
	if (action.type === 'INPUT_TASK') {
		return {
			value: action.value,
			date: new Date().toLocaleString(),
			isValid: null,
		}
	}
	if (action.type === 'MODAL') {
		return {
			value: state.value,
			date: '',
			isValid: { title: 'Error', masseg: 'Fill In The Field !' },
		}
	}
	if (action.type === 'MODAL_OK') {
		return {
			value: '',
			isValid: null,
		}
	}
	return {
		value: '',
		date: '',
		isValid: null,
	}
}

const AddToDo = ({ getValueHandler }) => {
	const [task, dispatchTask] = useReducer(taskReduser, {
		value: '',
		date: '',
		isValid: null,
	})
	const inputChangeHandler = (e) => {
		dispatchTask({ type: 'INPUT_TASK', value: e.target.value })
	}

	const submitHAndler = (e) => {
		e.preventDefault()
		if (task.value.trim() === '') {
			dispatchTask({ type: 'MODAL' })
			return
		}
		const newObject = {
			id: Math.random().toString(),
			value: task.value,
			date: task.date,
			completed: false,
		}

		getValueHandler(newObject)
		dispatchTask({ type: 'MODAL_OK' })
	}
	const clickHandler = (e) => {
		dispatchTask({ type: 'MODAL_OK' })
	}

	return (
		<>
			<Card>
				<form onSubmit={submitHAndler}>
					<div className='form__group field'>
						<input
							value={task.value}
							type='text'
							onChange={inputChangeHandler}
							className='form__field'
							placeholder='Text...'
						/>
						<label for='name' className='form__label'>
							Text...
						</label>
					</div>

					<Button className='btnAdd' type='submit'>
						Add
					</Button>
				</form>
			</Card>
			{task.isValid && (
				<Modal
					title={task.isValid.title}
					masseg={task.isValid.masseg}
					confirm={clickHandler}
				/>
			)}
		</>
	)
}

export default AddToDo
