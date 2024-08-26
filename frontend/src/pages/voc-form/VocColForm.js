import React from 'react';
import ColPath from '../../components/atoms/ColPath';
import ColForm from '../../components/templates/ColForm';

export default function VocColForm() {
    return (
        <>
            <ColPath
                largeCategory={'협업 목록'}
                mediumCategory={'협업 목록 조회'}
            />
            <ColForm />
        </>
    );
}
