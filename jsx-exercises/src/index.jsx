import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// 1.
// function MyThing() {
// 	return (
// 		<div className="book">
// 			<div className="title">The Title</div>
// 			<div className="author">The Author</div>
// 			<ul className="stats">
// 				<li className="rating">5 stars</li>
// 				<li className="isbn">12-345678-910</li>
// 			</ul>
// 		</div>
// 	);
// }

// ReactDOM.render(<MyThing />, document.querySelector('#root'));

// 2.
// function MyThing() {
// 	// return (
// 	// <div>
// 	// Newline
// 	// Test
// 	// </div>
// 	// )
// 	// return (
// 	//     <div>
// 	//         Empty
// 	//         Newlines
// 	//         Here
// 	//     </div>
// 	// )
// 	// return <div>Line1 Line2</div>;
// }

// ReactDOM.render(<MyThing />, document.querySelector('#root'));

// 3.
// function MyThing() {
// 	return (
// 		React.createElement('div',
//         {className: 'book'},
//         React.createElement('div', {className: 'title'}, 'The Title'),
//         React.createElement('div', {className: 'author'}, 'The Author'),
//         React.createElement('ul', {className: 'stats'},
//             React.createElement('li', {className: 'rating'}, '5 stars'),
//             React.createElement('li', {className: 'isbn'}, '12-345678-910')
//         )
//         )
// 	);
// }

// ReactDOM.render(<MyThing/>, document.querySelector('#root'))

// 4.
// function Greeting() {
// 	// Try all of these variations: //let username = "root";
// 	//let username = undefined; //let username = null;
// 	//let username = false;
// 	// Fill in the rest:
// 	let username = 'root';
// 	// let username = undefined;
//     // let username = null;
//     // let username = false;
// 	return (
// 		<>
// 			<p>
// 				{typeof username == 'string' ? `Hello, ${username}` : 'Not logged in.'}
// 			</p>
// 		</>
// 	);
// }

// ReactDOM.render(<Greeting />, document.querySelector('#root'));

// 5.
// function TestComponent() {
//     let x = false;
// 	return (
//     <div>{alert('hi')}Hello World!</div>);
// }

// ReactDOM.render(<TestComponent />, document.querySelector('#root'));

// 6.

// function Data() {
// 	return (
//         <>
//         <td>KH1</td>
//         <td>KH2</td>
//         <td>KH3</td>
//         </>
//     )
// }

// function Table() {
// 	return (
// 		<table>
// 			<tbody>
// 				<tr>
// 					<Data></Data>
// 					<Data></Data>
// 					<Data></Data>
// 				</tr>
// 			</tbody>
// 		</table>
// 	);
// }

// ReactDOM.render(<Table />, document.querySelector('#root'));

// Props
// const PropsTraining = ({ name, job }) => (
// 	<span>
// 		You are {name} that plays as a {job}.
// 	</span>
// );

// ReactDOM.render(
// 	<PropsTraining name="Kaine" job="DRG" />,
// 	document.querySelector('#root')
// );

// let clicks = 0;

// function Button() {
// 	return <input type="button" value="Click" onClick={() => (clicks += 1)} />;
// }

// function ClickCounter({ clicks }) {
// 	return <div>Clicks made: {clicks}</div>;
// }

// function Interface({clicks}) {
// 	return (
// 		<div>
// 			<ClickCounter clicks = {clicks} />
// 			<Button />
// 		</div>
// 	);
// }

// UNCOMMENT TO MAKE IT WORK!
// setInterval(() => {
// 	ReactDOM.render(<Interface clicks = {clicks} />, document.querySelector('#root'));
// 	console.log('Rerendered.')
// }, 500);

// Props

// Prop types

function Post({ author, message, likes }) {
	return (
		<div>
			<div>{author}</div>
			<div>{message}</div>
			<div>{likes ? likes : 'No'} likes</div>
		</div>
	);
}

function isItChocolate(props, propName, componentName) {
	if (props[propName] !== 'Chocolate') {
		return new Error(
			'Invalid prop `' +
				propName +
				'` supplied to' +
				' `' +
				componentName +
				'`. ' +
				propName +
				' must be Chocolate. Something is up...'
		);
	}
}

Post.propTypes = {
	author: PropTypes.string.isRequired,
	message: isItChocolate,
	likes: PropTypes.number,
};

ReactDOM.render(
	<Post author="Willy" message="Waffles" />,
	document.querySelector('#root')
);

// Prop types
