import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Avatar() {
	return <img className="avatar" src="twitter-logo.png" alt="avatar" />;
}

function Message() {
	return <div className="message">This is less than 140 characters.</div>;
}

function Author() {
	return (
		<span className="author">
			<span className="name">Your Name</span>
			<span className="handle">@yourhandle</span>
		</span>
	);
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fas fa-reply reply-button" />;

const RetweetButton = () => <i className="fas fa-retweet retweet-button" />;

const LikeButton = () => <i className="fas fa-heart like-button" />;

const MoreOptionsButton = () => (
	<i className="fas fa-ellipsis-h more-options-button" />
);

function Tweet() {
	return (
		<div className="tweet">
			<Avatar />
			<div className="content">
				<Author /><Time/>
				<Message />
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
			</div>
		</div>
	);
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));
