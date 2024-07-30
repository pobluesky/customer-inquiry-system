import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Header from '../../components/atoms/Header';

function Inq() {
    return (
        <div>
            <Header />
            <Editor
                initialValue="요청 사항을 입력하세요."
                previewStyle="vertical"
                height="300px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />;
        </div>
    )
}

export default Inq;
