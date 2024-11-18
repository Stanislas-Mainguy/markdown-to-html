import React, { useState } from 'react';
import SideMenu from './components/organisms/sideMenu/SideMenu';
import HeaderInfo from './components/organisms/headerInfo/HeaderInfo';
import MarkdownEditor from './components/molecules/markdownEditor/MarkdownEditor';
import HtmlPreview from './components/molecules/htmlPreview/HtmlPreview';
import './styles/main.css';

const App = () => {
    const [markdown, setMarkdown] = useState('');

    return (
        <div className="app-container">
            <HeaderInfo />
            <SideMenu />
            <div className="content">
                <h1>Markdown to HTML Converter</h1>
                <MarkdownEditor value={markdown} onChange={setMarkdown} />
                <HtmlPreview markdown={markdown} />
            </div>
        </div>
    );
};

export default App;


