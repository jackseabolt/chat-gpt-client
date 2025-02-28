type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({ label, onClick, type }: ButtonProps) => (
  <button
    className="cursor-pointer w-full p-3 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 rounded shadow-md"
    onClick={onClick}
    type={type ?? "button"}
  >
    {label}
  </button>
);

export default Button;
