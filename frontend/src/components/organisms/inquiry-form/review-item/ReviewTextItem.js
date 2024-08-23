import React from 'react';
import ListLabel from "../../../mocules/ListLabel";
import {ReviewWrapper, _TextArea} from "../../../../assets/css/Form.css";

const ReviewTextItem = ({ title, width, height, content, handleFormDataChange }) => {
  return (
      <div>
        <ReviewWrapper>
          <ListLabel margin="0 0 0 20px" color="#ffffff"
                     width={width} padding="8px 0 0 5px"
                     backgroundColor="#03507D" content={title}/>
          <div>
              <textarea
                  value={content}
                  className={_TextArea} style={{
                  borderRadius: '0 12px 12px 12px',
                  height: height,
                  }}
                  onChange={(e) =>
                      handleFormDataChange(
                          'qualityComments',
                          e.target.value
                      )}/>
          </div>
        </ReviewWrapper>
      </div>
  );
};

export default ReviewTextItem;