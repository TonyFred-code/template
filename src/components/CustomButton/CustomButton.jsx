// CustomButton.jsx
import propTypes from 'prop-types';
import { btn } from './CustomButton.module.css';

const CustomButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={btn}>
      Click me
    </button>
  );
};

CustomButton.propTypes = {
  onClick: propTypes.func,
};

export default CustomButton;
