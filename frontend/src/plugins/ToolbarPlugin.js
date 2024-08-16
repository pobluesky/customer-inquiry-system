import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { $getSelection, $isRangeSelection, CAN_REDO_COMMAND, CAN_UNDO_COMMAND, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, REDO_COMMAND, SELECTION_CHANGE_COMMAND, UNDO_COMMAND } from 'lexical';
import {
    Divider as DividerStyle,
    Toolbar as ToolbarStyle,
    Toolbar_Item as ToolbarItemStyle,
    Spaced as SpacedStyle,
    Active as ActiveStyle,
    Format as FormatStyle,
    Undo as UndoStyle,
    Redo as RedoStyle,
    Bold as BoldStyle,
    Italic as ItalicStyle,
    // Underline as UnderlineStyle,
    // Strikethrough as StrikethroughStyle,
    // Left_Align as LeftAlignStyle,
    // Center_Align as CenterAlignStyle,
    // Right_Align as RightAlignStyle,
    // Justify_Align as JustifyAlignStyle
} from '../assets/css/Editor.css';

const LowPriority = 1;

function Divider() {
    return <div className={DividerStyle} />;
}

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const toolbarRef = useRef(null);
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    // const [isStrikethrough, setIsStrikethrough] = useState(false);

    const $updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            // Update text format
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            // setIsStrikethrough(selection.hasFormat('strikethrough'));
        }
    }, []);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    $updateToolbar();
                });
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (_payload, _newEditor) => {
                    $updateToolbar();
                    return false;
                },
                LowPriority
            ),
            editor.registerCommand(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setCanUndo(payload);
                    return false;
                },
                LowPriority
            ),
            editor.registerCommand(
                CAN_REDO_COMMAND,
                (payload) => {
                    setCanRedo(payload);
                    return false;
                },
                LowPriority
            )
        );
    }, [editor, $updateToolbar]);

    return (
        <div className={ToolbarStyle} ref={toolbarRef}>
            <button
                disabled={!canUndo}
                onClick={() => {
                    editor.dispatchCommand(UNDO_COMMAND, undefined);
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle}`}
                aria-label="Undo"
            >
                <i className={`${FormatStyle} ${UndoStyle}`} />
            </button>
            <button
                disabled={!canRedo}
                onClick={() => {
                    editor.dispatchCommand(REDO_COMMAND, undefined);
                }}
                className={ToolbarItemStyle}
                aria-label="Redo"
            >
                <i className={`${FormatStyle} ${RedoStyle}`} />
            </button>
            <Divider />
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle} ${isBold ? ActiveStyle : ''}`}
                aria-label="Format Bold"
            >
                <i className={`${FormatStyle} ${BoldStyle}`} />
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle} ${isItalic ? ActiveStyle : ''}`}
                aria-label="Format Italics"
            >
                <i className={`${FormatStyle} ${ItalicStyle}`} />
            </button>
            {/* <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle} ${isUnderline ? ActiveStyle : ''}`}
                aria-label="Format Underline"
            >
                <i className={`${FormatStyle} ${UnderlineStyle}`} />
            </button> */}
            {/* <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle} ${isStrikethrough ? ActiveStyle : ''}`}
                aria-label="Format Strikethrough"
            >
                <i className={`${FormatStyle} ${StrikethroughStyle}`} />
            </button> */}
            {/* <Divider /> */}
            {/* <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle}`}
                aria-label="Left Align"
            >
                <i className={`${FormatStyle} ${LeftAlignStyle}`} />
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle}`}
                aria-label="Center Align"
            >
                <i className={`${FormatStyle} ${CenterAlignStyle}`} />
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
                }}
                className={`${ToolbarItemStyle} ${SpacedStyle}`}
                aria-label="Right Align"
            >
                <i className={`${FormatStyle} ${RightAlignStyle}`} />
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
                }}
                className={ToolbarItemStyle}
                aria-label="Justify Align"
            >
                <i className={`${FormatStyle} ${JustifyAlignStyle}`} />
            </button>{' '} */}
        </div>
    );
}
