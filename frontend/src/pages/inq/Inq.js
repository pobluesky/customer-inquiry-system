import React from 'react';
import Header from '../../components/mocules/Header';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import ToolbarPlugin from '../../plugins/ToolbarPlugin';
import TreeViewPlugin from '../../plugins/TreeViewPlugin';
import Theme from './Theme';

import '../../assets/css/Editor.css';

const placeholder = 'Enter some rich text...';

const editorConfig = {
    namespace: 'React.js Demo',
    nodes: [],
    // Handling of errors during update
    onError(error) {
        throw error;
    },
    // The editor theme
    theme: Theme,
};

function Inq() {
    return (
        <>
            <Header login={true} />
            <LexicalComposer initialConfig={editorConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner">
                        <RichTextPlugin contentEditable={<ContentEditable className="editor-input" aria-placeholder={placeholder} placeholder={<div className="editor-placeholder">{placeholder}</div>} />} ErrorBoundary={LexicalErrorBoundary} />
                        <HistoryPlugin />
                        <AutoFocusPlugin />
                        <TreeViewPlugin />
                    </div>
                </div>
            </LexicalComposer>
        </>
    );
}

export default Inq;