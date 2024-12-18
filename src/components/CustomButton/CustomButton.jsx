// CustomButton.jsx
import propTypes from 'prop-types';
import styled from 'styled-components';
// import { btn } from './CustomButton.module.css';

const Wrapper = styled.button`
  width: 90px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
`;

const CustomButton = ({ onClick }) => {
  return <Wrapper onClick={onClick}>Click me</Wrapper>;
};

CustomButton.propTypes = {
  onClick: propTypes.func,
};

export default CustomButton;
