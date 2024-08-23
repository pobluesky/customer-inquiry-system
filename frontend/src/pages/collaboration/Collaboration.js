import React from 'react';
import CollaborationPath from './../../components/atoms/CollaborationPath';
import CollaborationForm from '../../components/templates/CollaborationForm';

function Collaboration() {
    return (
        <>
            <CollaborationPath
                largeCategory={'협업 목록'}
                mediumCategory={'협업 목록 조회'}
            />
            <CollaborationForm />
        </>
    );
}

export default Collaboration;
