import React from 'react';
import styled from 'styled-components';

interface SpotlightProps {
  spotlight: string;
}

const SpotlightContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem 2.5rem;
  background: linear-gradient(135deg, #fff5f0 0%, #ffe8e0 50%, #ffd6c9 100%);
  border-radius: 16px;
  border-left: 5px solid #ff6b35;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 30%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const SpotlightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
`;

const SpotlightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);

  svg {
    width: 22px;
    height: 22px;
    fill: white;
  }
`;

const SpotlightTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b35 0%, #e84118 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.5px;
`;

const SpotlightContent = styled.div`
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;

  p {
    margin: 0 0 1rem 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong, b {
    color: #e84118;
    font-weight: 600;
  }

  ul, ol {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &::marker {
      color: #ff6b35;
    }
  }

  a {
    color: #ff6b35;
    text-decoration: none;
    border-bottom: 1px dashed #ff6b35;
    transition: all 0.2s ease;

    &:hover {
      color: #e84118;
      border-bottom-style: solid;
    }
  }
`;

const ProductSpotlight: React.FC<SpotlightProps> = ({ spotlight }) => {
  if (!spotlight || spotlight.trim() === '') return null;

  return (
    <SpotlightContainer>
      <SpotlightHeader>
        <SpotlightIcon>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </SpotlightIcon>
        <SpotlightTitle>Product Spotlight</SpotlightTitle>
      </SpotlightHeader>
      <SpotlightContent
        dangerouslySetInnerHTML={{ __html: spotlight.replace(/&nbsp;/g, ' ') }}
      />
    </SpotlightContainer>
  );
};

export default ProductSpotlight;
