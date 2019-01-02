import React from 'react';
import PropTypes from 'prop-types';

const Editor = props => {
  return (
    <textarea
      id="editor"
      value={props.myText}
      onChange={props.onChange}
      type="text"
    />
  );
};

Editor.propTypes = {
  myText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Editor;
