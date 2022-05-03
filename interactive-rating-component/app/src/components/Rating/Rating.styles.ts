import styled from "styled-components";
import { colors } from "../../styles/colors";

export const RatingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Circle = styled.div`
  position: relative;
  background: ${colors.darkBlue};
  border-radius: 100%;
  width: 40px;
  height: 40px;

  * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Content = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`;

export const Heading = styled.h1`
  color: ${colors.white};
`;

export const Text = styled.p`
  font-size: 15px;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  height: 2.5rem;
  border-radius: 32px;
  color: ${colors.white};
  background: ${colors.orange};
  letter-spacing: 0.125rem;
`;
