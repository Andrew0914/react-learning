import { useRef, useState } from 'react';
import { Prompt } from 'react-router';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [formIsFocused, setFormIsFocused] = useState()

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  function formFocusHandler (){
    setFormIsFocused(true)
  }

  function buttonClickHandler () {
    setFormIsFocused(false)
  }
  return (
    <Card>
      <Prompt when={formIsFocused} message={() => "Are you soure to leave this page? You may loos tour changes"}/>
      <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={buttonClickHandler} >Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
