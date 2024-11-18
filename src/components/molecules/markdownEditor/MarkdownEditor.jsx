import React from 'react';
import './MarkdownEditor.css';

const MarkdownEditor = ({ value, onChange }) => {
    return (
        <textarea
            className="markdown-editor"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Write your Markdown here..."
        />
    );
};

export default MarkdownEditor;
