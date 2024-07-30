import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

function Inq() {
    return (
        <div>
            <Editor
                initialValue="요청 사항을 입력하세요."
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />;
        </div>
    )
}

export default Inq;
