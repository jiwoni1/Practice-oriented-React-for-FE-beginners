import styled from "styled-components";

import { PRIMARY, SECONDARY, TERTIARY } from "../../constants/color";

// 1. 함수를 사용하는 법법
// function getColor(type1, type2) {
//     if (type1 === "PRIMARY") {
//         return PRIMARY.BUTTON.DEFAULT.COLOR;
//       } else if (type1 === "SECONDARY") {
//         return SECONDARY.BUTTON.DEFAULT.COLOR;
//       }
// }

// 2. MAP을 사용하는 법
const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  width: 200px;
  padding: 16px 24px;

  box-sizing: border-box;
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border: none;
  font-weight: bold;
  border-radius: 5px;

  border: ${({ type }) =>
    type === "TERTIARY"
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : "none"};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}`
        : "none"};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}`
        : "none"};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background-color: ${({ type }) =>
      colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}`
        : "none"};
  }
`;

export default Button;
