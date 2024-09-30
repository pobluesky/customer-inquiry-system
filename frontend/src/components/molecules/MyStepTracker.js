import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { quoteSteps, commonSteps } from './StepTracker';

const MyStepTracker = ({ currentStep, inquiryType }) => {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        setSteps(inquiryType === '견적 문의' ? quoteSteps : commonSteps);
    }, [inquiryType]);

    const iconSize = 50;

    return (
        <Container>
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <Step>
                        <div>
                            <Circle completed={step.id <= currentStep}>{step.icon}</Circle>
                            <Text completed={step.id <= currentStep}>{step.label}</Text>
                        </div>
                        {index < steps.length - 1 && (
                            <Line
                                completed={step.id < currentStep}
                                iconSize={iconSize}
                                previousStepIndex={index}
                                nextStepIndex={index + 1}
                                steps={steps}
                                isSecondLast={index === steps.length - 2}
                            />
                        )}
                    </Step>
                </React.Fragment>
            ))}
            <Line completed={currentStep === steps.length} iconSize={iconSize} isLast />
        </Container>
    );
};

export default MyStepTracker;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
  margin: 0 30px 0 0;
`;

const Step = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-right: 30px;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => (props.completed ? '#1990ff' : '#cccccc')};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 5px;
  transition: background-color 0.3s ease;
`;

const Text = styled.div`
  font-size: 14px;
  color: ${props => (props.completed ? '#1990ff' : '#cccccc')};
  margin: 8px 0 0 -2px;
  font-weight: 600;
`;

const Line = styled.div`
  position: absolute;
  top: 35%;
  left: 58%;
  width: ${props => props.isSecondLast ? '97%' : '100%'};
  height: 3px;
  background-color: ${props => (props.completed ? '#1990ff' : '#cccccc')};
  transform: translateY(-50%);
  z-index: 0;
  transition: background-color 0.3s ease;

  ${({ isLast }) => isLast && `
    width: 0;
  `}
`;
