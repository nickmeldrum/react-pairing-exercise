import React from 'react';
import SearchResult from '../SearchResult';

export default props => {
  if (props.results) {
    return <div className="search-results-grid">
      {props.results.map(result => <SearchResult key={result.id} {...result} />)}
    </div>;
  }

  return null;
}
