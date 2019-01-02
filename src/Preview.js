import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const Preview = props => {
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  function rawMarkup() {
    let rawMarkup = marked(props.myText, {
      sanitize: true,
      renderer: renderer,
      breaks: true
    });
    return { __html: rawMarkup };
  }

  return <div id="preview" dangerouslySetInnerHTML={rawMarkup()} />;
};

Preview.propTypes = {
  myText: PropTypes.string.isRequired
};

export default Preview;
