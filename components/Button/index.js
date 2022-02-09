//BUTTON COMPONENT

//EXPORTING BUTTON
export default function Button({ className, theme, text }) {
  //BUTTON THEMES
  const themes = {
    default: "bg-white text-primary",
    white: "bg-white text-primary",
    dark: "bg-secondary text-white hover:text-secondary hover:bg-white",
    outline:
      "border-2 border-secondary text-secondary-dark hover:text-white hover:bg-secondary"
  };

  //RETURN
  return (
    <button
      className={`
        h-14 transition duration-700 ease-in-out rounded-lg px-6
        ${className}
        ${themes[theme]}
      `}
    >
      {text}
    </button>
  );
}
