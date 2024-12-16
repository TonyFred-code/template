// CustomButton.jsx
import propTypes from 'prop-types';

const CustomButton = ({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
};

CustomButton.propTypes = {
  onClick: propTypes.func,
};

export default CustomButton;
