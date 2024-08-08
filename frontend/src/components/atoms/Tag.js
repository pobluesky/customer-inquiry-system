import React from 'react';

function Tag({ category, width, height, margin, backgroundColor, textColor, border, borderRadius }) {
    return <div style={{ width: `${width}`, height: `${height}`, margin: `${margin}`, backgroundColor: `${backgroundColor}`, color: `${textColor}`, border: `${border}`, borderRadius: `${borderRadius}`, textAlign: 'center', alignContent: 'center' }}>{category}</div>;
}

export default Tag;
