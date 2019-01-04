import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import highlightjs from 'highlight.js';

const Preview = props => {
  // Custom renderer to handle a tags and code colorizing
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    if (href.charAt(0) === '#') {
      return `<a href="${href}">${text}</a>`;
    } else {
      return `<a target="_blank" href="${href}">${text}</a>`;
    }
  };
  renderer.code = (code, language) => {
    // Check whether the given language is valid for highlight.js.
    const validLang = !!(language && highlightjs.getLanguage(language));
    // Highlight only if the language is valid.
    const highlighted = validLang
      ? highlightjs.highlight(language, code).value
      : code;
    // Render the highlighted code with `hljs` class.
    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
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
