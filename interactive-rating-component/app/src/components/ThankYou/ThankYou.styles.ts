import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

export const Image = styled.img``;

export const SelectedRating = styled.p`
  color: ${colors.orange};
  background: ${colors.darkBlue};
  padding: 8px 16px;
  border-radius: 32px;
`;

export const Content = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`;

export const Heading = styled.h1`
  color: ${colors.white};
`;

export const Text = styled.p``;
