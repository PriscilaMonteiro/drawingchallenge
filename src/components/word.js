import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWord, fetchFail } from "../actions";

const Word = (props) => {
  const { word, isFetching, error, getWord } = props;

  useEffect(() => {
    getWord();
  }, [getWord]);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>The Best Drawing Game Ever!</h2>;
  }

  const handleClick = () => {
    props.getWord();
    
  }
  console.log("word------",word.length);

  return (
    <> 
      <button onClick={handleClick} className="button">Get a new Word.</button>
      <div>
      <h2>{word.length ? word : "loading" }</h2>
      </div> 
    </>
  );
};

const mapStateToProps = state => {
  return{
    word: state.word,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getWord, fetchFail})(Word);


