import React from 'react';
import '../styles/LoadMoreButtonStyles.css';

const LoadMoreButton = ({ loadMore }) => {
    return (
        <button className="load-more" onClick={loadMore}>
            Load more
        </button>
    );
}

export default LoadMoreButton;
