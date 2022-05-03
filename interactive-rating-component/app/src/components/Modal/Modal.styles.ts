import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: radial-gradient(
    circle at top,
    ${colors.darkBlue} -30%,
    ${colors.veryDarkBlue} 150%
  );
  border-radius: 32px;
  padding: 32px;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;
