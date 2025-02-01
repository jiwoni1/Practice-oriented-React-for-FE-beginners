import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import testState from "../../stores/test/atom";
import testWithComma from "../../stores/test/testWithComma";

function CompletionPage(props) {
  const test = useRecoilValue(testWithComma);
  return (
    <CompletionPageWrapper>
      <div>{test} </div>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div`
  background-color: aqua;
  padding: 4rem;
`;

export default CompletionPage;
