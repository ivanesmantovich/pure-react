import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

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

// function Post({ author, message, likes }) {
// 	return (
// 		<div>
// 			<div>{author}</div>
// 			<div>{message}</div>
// 			<div>{likes ? likes : 'No'} likes</div>
// 		</div>
// 	);
// }

// function isItChocolate(props, propName, componentName) {
// 	if (props[propName] !== 'Chocolate') {
// 		return new Error(
// 			'Invalid prop `' +
// 				propName +
// 				'` supplied to' +
// 				' `' +
// 				componentName +
// 				'`. ' +
// 				propName +
// 				' must be Chocolate. Something is up...'
// 		);
// 	}
// }

// Post.propTypes = {
// 	author: PropTypes.string.isRequired,
// 	message: isItChocolate,
// 	likes: PropTypes.number,
// };

// ReactDOM.render(
// 	<Post author="Willy" message="Waffles" />,
// 	document.querySelector('#root')
// );

// Prop types

//Prop Exercises

//Envelope -----------------------------------------------

// function AddressLabel({ person }) {
// 	return (
// 		<div className={`addressLabel ${person.role}`}>
// 			<div>{`${person.fullname.name} ${person.fullname.surname}`}</div>
// 			<div>{person.streetAddress}</div>
// 			<div>{person.cityAddress}</div>
// 		</div>
// 	);
// }

// AddressLabel.propTypes = {
// 	person: PropTypes.shape({
// 		fullname: PropTypes.shape({
// 			name: PropTypes.string,
// 			surname: PropTypes.string,
// 		}).isRequired,
// 		streetAddress: PropTypes.string.isRequired,
// 		cityAddress: PropTypes.string.isRequired,
// 		role: PropTypes.string.isRequired
// 	}).isRequired,
// };

// const Stamp = ({ stampText }) => <div className="stamp"><p>{stampText}</p></div>;

// Stamp.propTypes = {
// 	stampText: PropTypes.string.isRequired,
// };

// function Envelope({ toPerson, fromPerson, stampText }) {
// 	return (
// 		<div className="envelope">
// 			<AddressLabel className="reciever" person={toPerson} />
// 			<AddressLabel className="sender" person={fromPerson} />
// 			<Stamp className="stamp" stampText={stampText} />
// 		</div>
// 	);
// }

// Envelope.propTypes = {
// 	toPerson: PropTypes.object.isRequired,
// 	fromPerson: PropTypes.object.isRequired,
// 	stampText: PropTypes.string.isRequired,
// };

// let sender = {
// 	fullname: {
// 		name: 'Mr.',
// 		surname: 'Sender',
// 	},
// 	streetAddress: '123 Fake St.',
// 	cityAddress: 'Boston, MA 02118',
// 	role: 'sender'
// };

// let reciever = {
// 	fullname: {
// 		name: 'Mr.',
// 		surname: 'Reciever',
// 	},
// 	streetAddress: '123 Fake St.',
// 	cityAddress: 'San Francisco, CA 94101',
// 	role: 'reciever'
// };

// ReactDOM.render(
// 	<Envelope toPerson={reciever} fromPerson={sender} stampText="Very important" />,
// 	document.querySelector('#root')
// );

//Envelope -----------------------------------------------

// Credit Card -----------------------------------------------

// const BankName = ({ name }) => <div className="bankName">{name}</div>;
// BankName.propTypes = {
// 	name: PropTypes.string.isRequired,
// };

// function CardNumber({ number }) {
// 	number = number.replace(/ /g, '');
// 	let firstFour = number.slice(0, 4);
// 	let secondFour = number.slice(4, 8);
// 	let thirdFour = number.slice(8, 12);
// 	let fourthFour = number.slice(12, 16);
// 	return (
// 		<div className="cardNumber">
// 			<div className="fullCardNumber">
// 				<div>{firstFour}</div>
// 				<div>{secondFour}</div>
// 				<div>{thirdFour}</div>
// 				<div>{fourthFour}</div>
// 			</div>
// 			<div className="firstFour">{firstFour}</div>
// 		</div>
// 	);
// }
// CardNumber.propTypes = {
// 	number: PropTypes.string.isRequired,
// };

// const ExpirationDate = ({ date }) => (
// 	<div className="expirationDate">
// 		<div className="validThru">
// 			<div>VALID</div>
// 			<div>THRU</div>
// 		</div>
// 		<div className="date">{date}</div>
// 	</div>
// );
// ExpirationDate.propTypes = {
// 	date: PropTypes.string.isRequired,
// };

// const Cardholder = ({ name }) => <div className="cardholderName">{name}</div>;
// Cardholder.propTypes = {
// 	name: PropTypes.string.isRequired,
// };

// let myCard = {
// 	name: 'IVAN ESMANTOVICH',
// 	expirationDate: '08/19',
// 	cardNumber: '1111222233334444',
// 	bankName: 'Life Maintenance, Inc.',
// };

// function CreditCard({ cardInfo }) {
// 	return (
// 		<div className="creditCard">
// 			<BankName name={cardInfo.bankName} />
// 			<CardNumber number={cardInfo.cardNumber} />
// 			<ExpirationDate date={cardInfo.expirationDate} />
// 			<Cardholder name={cardInfo.name} />
// 		</div>
// 	);
// }
// CreditCard.propTypes = {
// 	cardInfo: PropTypes.object.isRequired
// }

// ReactDOM.render(
// 	<CreditCard cardInfo={myCard} />,
// 	document.querySelector('#root')
// );

// Credit Card -----------------------------------------------

// Poster -----------------------------------------------

const Image = ({ image }) => (
	<img className="image" src={image} alt="reactLogo" />
);
Image.propTypes = {
	image: PropTypes.string.isRequired,
};

const Title = ({ title }) => <div className="title">{title}</div>;
Title.propTypes = {
	title: PropTypes.string.isRequired,
};

const Text = ({ text }) => <div className="text">{text}</div>;
Text.propTypes = {
	text: PropTypes.string.isRequired,
};

function Poster({ image, title, text }) {
	return (
		<div className="poster">
			<Image image={image} />
			<Title title={title} />
			<Text text={text} />
		</div>
	);
}

ReactDOM.render(<Poster image='reactLogo.png' />, document.querySelector('#root'));

// Poster -----------------------------------------------

//Prop Exercises
