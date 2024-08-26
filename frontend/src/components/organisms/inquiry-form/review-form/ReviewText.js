import React from 'react';
import ListLabel from "../../../molecules/ListLabel";
import {ReviewWrapper, _TextArea} from "../../../../assets/css/Form.css";

const ReviewText = ({ title, width, height, formData, handleFormDataChange }) => {
    if (!formData) {
        return;
    }

    const {
        reviewText
    } = formData;

  return (
      <div>
        <ReviewWrapper>
          <ListLabel margin="0 0 0 20px" color="#ffffff"
                     width={width} padding="8px 0 0 5px"
                     backgroundColor="#03507D" content={title}/>
          <div>
              <textarea
                  value={reviewText}
                  placeholder={'내용을 입력해 주세요'}
                  className={_TextArea}
                  style={{
                      borderRadius: '0 12px 12px 12px',
                      height: height,
                  }}
                  onChange={(e) =>
                      handleFormDataChange(
                          'reviewText',
                          e.target.value
                      )}/>
          </div>
        </ReviewWrapper>
      </div>
  );
};

export default ReviewText;