import React from 'react'
import './Modal.css'
import Button from './Button'

const Modal = (props) => {
	return (
		<div className='modal'>
			<header>{props.title}</header>
			<div className='div'>
				<h2>{props.masseg}</h2>
			</div>
			<footer>
				<Button className="btn" onClick={props.confirm} key={Math.random()}>
					OK
				</Button>
			</footer>
		</div>
	)
}

export default Modal
