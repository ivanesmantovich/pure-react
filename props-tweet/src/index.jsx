import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Avatar({ hash }) {
	return <img className="avatar" src={hash} alt="avatar" />;
}

function Message({ text }) {
	return <div className="message">{text}</div>;
}

function Author({ authorData }) {
	return (
		<span className="author">
			<span className="name">{authorData.name}</span>
			<span className="handle">@{authorData.handle}</span>
		</span>
	);
}

const Time = ({ time }) => (
	<span className="time">{moment(time).fromNow()}</span>
);

const ReplyButton = () => <i className="fas fa-reply reply-button" />;

function RetweetCount({ count }) {
	if (count > 0) {
		return <span className="retweet-count">{count}</span>;
	} else {
		return null;
	}
}

const RetweetButton = ({ count }) => (
	<span className="retweet-button">
		<i className="fas fa-retweet" /> <RetweetCount count = {count} />
	</span>
);

const LikeButton = ({ count }) => (
	<span className="like-button">
		<i className="fas fa-heart" />
		{count ? <span className="like-count">{count}</span> : null}
	</span>
);

const MoreOptionsButton = () => (
	<i className="fas fa-ellipsis-h more-options-button" />
);

function Tweet({ tweet }) {
	return (
		<div className="tweet">
			<Avatar hash={tweet.avatar} />
			<div className="content">
				<Author authorData={tweet.author} />
				<Time time={tweet.timestamp} />
				<Message text={tweet.message} />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton count={tweet.retweets} />
					<LikeButton count={tweet.likes} />
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	);
}

const testTweet = {
	message: 'Learning React right now.',
	avatar: 'scientist.jpg',
	author: {
		handle: 'somerandomscientist',
		name: 'hotscientist',
	},
	likes: 9000,
	retweets: 67,
	timestamp: '2016-07-30 21:24:37',
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));
