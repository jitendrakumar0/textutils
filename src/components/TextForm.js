import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick = () => {
    console.log('Lowercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleCapClick = () => {
    const capitalize = str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    console.log('Capatalize was clicked' + text);
    let newText = capitalize(text);
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log('onChange');
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className="mb-3">
      <label htmlFor="myBox" className="form-label h4">{props.heading}</label>
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn btn-primary me-2 text-white" onClick={handleUpClick}>Uppercase</button>
    <button className="btn btn-primary me-2 text-white" onClick={handleLowerClick}>Lowercase</button>
    <button className="btn btn-primary me-2 text-white" onClick={handleCapClick}>Capatalize</button>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
  heading: 'Fill Form'
}