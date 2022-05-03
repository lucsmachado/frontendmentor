import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Label = styled.label`
  position: relative;

  input[type="radio"] {
    appearance: none;
    background: ${colors.darkBlue};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    align-content: center;

    &:checked {
      background: ${colors.orange};
    }
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${colors.white};
  }

  &:hover {
    filter: brightness(90%);
  }
`;
