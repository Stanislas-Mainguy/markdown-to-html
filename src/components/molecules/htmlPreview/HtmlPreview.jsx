import React from 'react';
import { marked } from 'marked';
import './HtmlPreview.css';

const HtmlPreview = ({ markdown }) => {
    const html = marked(markdown);

    return (
        <div
            className="html-preview"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default HtmlPreview;
