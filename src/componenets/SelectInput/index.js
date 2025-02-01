import styled from "styled-components";

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      {/* 글을 클릭해도 체크되게 묶어주려면 label로 묶어주기 */}
      <label>
        <input type="checkbox" onChange={onChange} />
        {/* 실질적인 ui */}
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

const SelectInput = ({ answer = [], setAnswer, options }) => {
  const handleChange = (isChecked, idx) => {
    if (isChecked) {
      // setAnswer에 index 추가
      setAnswer([...answer, idx]);
    } else {
      // setAnswer에서 index 빼기
      setAnswer(answer.filter((item) => item !== idx));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, idx) => {
        return (
          <Item
            key={idx}
            onChange={(e) => {
              handleChange(e.target.checked, idx);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
};

// SCSS 확장된 CSS
const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  input[type="checkbox"]:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }

  input[type="checkbox"]:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
