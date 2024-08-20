import React, { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import ToolbarPlugin from '../../plugins/ToolbarPlugin';
import Theme from '../atoms/Theme';

import {
    Editor_Container,
    Editor_Inner,
    Editor_Input,
} from '../../assets/css/Editor.css';

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

function TextEditor({ originalText, setOriginalText }) {
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
        <>
            <LexicalComposer initialConfig={editorConfig}>
                <div className={Editor_Container}>
                    <ToolbarPlugin />
                    <div className={Editor_Inner}>
                        <RichTextPlugin
                            contentEditable={
                                <ContentEditable className={Editor_Input} />
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <HistoryPlugin />
                        <AutoFocusPlugin />
                    </div>
                </div>
                <MyOnChangePlugin onChange={onChange} />
            </LexicalComposer>
            {/* <div style={{ textAlign: 'center' }}>{originalText}</div> */}
        </>
    );
}

export default TextEditor;
