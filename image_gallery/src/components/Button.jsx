import './Button.css';

const Button = ({ children, onClick, disabled = false }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;