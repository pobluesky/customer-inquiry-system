import React, { useEffect, useState } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import RequestBar from '../../components/mocules/RequestBar';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import ToolbarPlugin from '../../plugins/ToolbarPlugin';
// import TreeViewPlugin from '../../plugins/TreeViewPlugin';
import Theme from './Theme';

import '../../assets/css/Editor.css';

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

function MyOnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            onChange(editorState);
        });
    }, [editor, onChange]);
    return null;
}

function Inq() {
    // const [editorState, setEditorState] = useState();
    const [originalText, setOriginalText] = useState('');

    function onChange(editorState) {
        // Call toJSON on the EditorState object, which produces a serialization safe string
        const editorStateJSON = editorState.toJSON();
        // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
        setOriginalText(restoreText(editorStateJSON));
    }

    /* function that restore original text */
    const restoreText = (data) => {
        let result = [];

        if (data.root && data.root.children) {
            data.root.children.forEach((paragraph) => {
                let sentence_text = '';
                if (paragraph.children) {
                    paragraph.children.forEach((child) => {
                        let text = child.text;
                        const format_value = child.format;

                        if (format_value & 1) {
                            text = `**${text}**`;
                        }
                        if (format_value & 2) {
                            text = `*${text}*`;
                        }

                        sentence_text += text;
                    });
                }
                result.push(sentence_text);
            });
        }

        return result.join('\n');
    };

    return (
        <div>
            <Header login={true} inq={true} voc={false} dashboard={false} />
            <Path largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={'20180829495'} />
            <RequestBar />
            <LexicalComposer initialConfig={editorConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner">
                        <RichTextPlugin contentEditable={<ContentEditable className="editor-input" />} ErrorBoundary={LexicalErrorBoundary} />
                        <HistoryPlugin />
                        <AutoFocusPlugin />
                        {/* <TreeViewPlugin /> */}
                    </div>
                </div>
                <MyOnChangePlugin onChange={onChange} />
            </LexicalComposer>
            <div>
                Markdown 원문 복원 (서버로 전송될 데이터)
                <pre>{originalText}</pre>
            </div>
        </div>
    );
}

export default Inq;
