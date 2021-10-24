import styled from 'styled-components';

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1040px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ContactInput = styled.div`
  width: 100%;
  position: relative;
  padding: 0 10px;
  margin: 30px 0 10px;
  transition: 0.5s;
`;
export const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  color: #fff;
  & input,
  textarea {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 10px;
    z-index: 1;
    color: #fff;
    &:focus + .text,
    &:valid + .text {
      top: -35px;
      left: -10px;
    }
    &:focus ~ .line,
    &:valid ~ .line {
      height: 100%;
    }
  }
  & textarea {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    & textarea {
      height: 100%;
      resize: none;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 40px;
  font-size: 18px;
  padding: 0 10px;
  display: block;
  transition: 0.5s;
  pointer-events: none;
`;
export const InputDevider = styled.span`
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: #13adc7;
  transition: 0.5s;
  border-radius: 2px;
  pointer-events: none;
`;
export const Button = styled.button`
  border: none;
  padding: 7px 35px;
  cursor: pointer;
  background: #13adc7;
  color: #fff;
  font-size: 18px;
  border-radius: 2px;
`;
