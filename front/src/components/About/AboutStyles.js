import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  max-width: 800px;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;