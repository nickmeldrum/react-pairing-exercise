import React from 'react';

export default props => <div className="search-result">
  <h2>{props.name}</h2>
  <img src={props.thumbnail} alt={props.name} />
  <div className="add-to-trolley">
    {props.displayPrice}
  </div>
</div>;
