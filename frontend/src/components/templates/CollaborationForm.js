import React from 'react';
import CollaborationFilterPanel from '../organisms/CollaborationFilterPannel';
import CollabTable from '../mocules/CollabTable';

function CollaborationForm() {
    return (
        <>
            <CollaborationFilterPanel />
            <CollabTable />
        </>
    );
}

export default CollaborationForm;
