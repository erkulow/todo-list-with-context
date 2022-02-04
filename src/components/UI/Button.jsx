import React from 'react'

const Button = (props) => {
	return (
		<>
			<button
				onChange={props.onChange}
				type={props.type}
				id={props.id}
				className={props.className}
				onClick={props.onClick}
			>
				{props.children}
			</button>
		</>
	)
}

export default Button
