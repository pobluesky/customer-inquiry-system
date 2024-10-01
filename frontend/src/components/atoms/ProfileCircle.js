import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor || '#D9A9FF'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #484848;
  font-size: 16px;
  border: 2px solid #ccc;
`;

const ProfileCircle = ({ name, backgroundColor }) => {
    const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

    return <Circle bgColor={backgroundColor}>{initials}</Circle>;
};

export default ProfileCircle;
