import React, { useEffect, useState } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import RequestBar from '../../components/mocules/RequestBar';
import Toggle from '../../components/atoms/Toggle';
import Category from '../../components/atoms/Category';

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
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

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
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
                <div style={{ width: '80vw', border: 'solid #c1c1c1 1px', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', alignContent: 'center', padding: '1vw 1vw 1vw 1vw', borderRadius, backgroundColor: '#88daff' }}>
                        <Toggle isChecked={isChecked} setCheck={setCheck} />
                        OfferSheet
                    </div>

                    {isChecked ? (
                        <>

                            <LexicalComposer initialConfig={editorConfig}>
                                <div className="editor-container">
                                    <ToolbarPlugin />
                                    <div className="editor-inner">
                                        <RichTextPlugin contentEditable={<ContentEditable className="editor-input" />} ErrorBoundary={LexicalErrorBoundary} />
                                        <HistoryPlugin />
                                        <AutoFocusPlugin />
                                    </div>
                                </div>
                                <MyOnChangePlugin onChange={onChange} />
                            </LexicalComposer>

                            <Category categoryName={'1. 고객사'} />
                            <Category categoryName={'2. Offersheet'} />
                            <Category categoryName={'3. Price Term'} />
                            <Category categoryName={'4. Shipment'} />
                            <Category categoryName={'5. Payment Term'} />
                            <Category categoryName={'6. Destination'} />
                            <Category categoryName={'7. Validity'} />

                            <div>
                                Markdown 원문 복원 (서버로 전송될 데이터)<pre>{originalText}</pre>
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}

export default Inq;
