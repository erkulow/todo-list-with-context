import React from 'react'
import './ToDos.css'
import Card from './UI/Card'
import Button from './UI/Button'

const Todos = ({ array, setArray }) => {
	const deleteHandler = (e) => {
		setArray(array.filter((el) => el.id !== e.target.id))
	}
	const checkBoxHendler = (e) => {
		setArray(
			array.map((el) => {
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
				{array.map((el) => (
					<div className='card' key={el.id}>
						<div>
							<label class='switch'>
								<input
									onClick={checkBoxHendler}
									checked={el.completed}
									type='checkbox'
									id={el.id}
								/>
								<span class='slider'></span>
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
