import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WatchItem from '../WatchItem/WatchItem';
import {
	getToWatchesAction,
	deleteToWatchAction,
	updateToWatchAction,
} from '../../store/actions/toWatchAction';

function WatchList({
	movies,
	deleteToWatchAction,
	updateToWatchAction,
	getToWatchesAction,
}) {
	useEffect(() => {
		getToWatchesAction()
	}, [getToWatchesAction]);
	
	const onDelete = (id) => {
		deleteToWatchAction(id);
	};
	return (
		<div>
			{/* {isLoading && <div>Is LOADING</div>} */}
			{!movies
				? 'Loading ... '
				: movies.map((movie) => {
						return (
							<WatchItem
								key={movie.id}
								movie={movie}
								onToggle={updateToWatchAction}
								onDelete={onDelete}
							/>
						);
				  })}
		</div>
	);
}

const mapStateToProps = ({ movies }) => ({ movies })
	
const mapDispatchToProps = {
	getToWatchesAction,
	deleteToWatchAction,
	updateToWatchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
