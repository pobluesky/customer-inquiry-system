import React from 'react';

function Category({ categoryName }) {
    return (
        <div>
            <div style={{ display: 'inline-block',
                          width: '132px',
                          padding: '4px 16px 4px 12px',
                          backgroundColor: '#e3e3e3',
                          color: '#7b7b7b',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          border: 'solid #c1c1c1 1px',
                          borderRadius: '8px' }}>
            {categoryName}
            </div>
        </div>
    );
}

export default Category;
