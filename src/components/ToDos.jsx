import React, { useContext } from 'react'
import './ToDos.css'
import Card from './UI/Card'
import Button from './UI/Button'
import { TodoContext } from '../store/TodoContext'

const Todos = () => {
	const ctxData = useContext(TodoContext)
	const deleteHandler = (e) => {
		ctxData.setData(ctxData.data.filter((el) => el.id !== e.target.id))
	}
	const checkBoxHendler = (e) => {
		ctxData.setData(
			ctxData.data.map((el) => {
				if (el.id === e.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}

	return (
		<>
			<Card>
				{ctxData.data.map((el) => (
					<div className='card' key={el.id}>
						<div>
							<label className='switch'>
								<input
									onClick={checkBoxHendler}
									defaultChecked={el.completed}
									type='checkbox'
									id={el.id}
								/>
								<span className='slider'></span>
							</label>
						</div>

						<div
							style={{
								width: '250px',
							}}
						>
							<p className={el.completed ? 'done' : 'task'}>
								{el.value}
							</p>
						</div>
						<div
							style={{
								width: '100px ',
								margin: '0',
								padding: '0',
								textAlign: 'center',
							}}
						>
							<p className='dateValue'>{el.date}</p>
						</div>
						<div>
							<Button
								className='deleteBtn'
								id={el.id}
								onClick={deleteHandler}
							>
								Delete
							</Button>
						</div>
					</div>
				))}
			</Card>
		</>
	)
}

export default Todos
