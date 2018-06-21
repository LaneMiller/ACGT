import React from 'react';

const ResultInfo = (props) => {
  const { data } = props.mediaObj.snippet
  const clickHandler = () => {props.handleResultClick(props.mediaObj)}

  return (
    <div className="search-result-detail" onClick={clickHandler}>
      <img className="thumbnail"
        src={data.thumbnails.default.url} />
      <h5 className="result-title">{data.title}</h5>
    </div>
  )
}

export default ResultInfo;
