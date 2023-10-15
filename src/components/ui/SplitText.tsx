type Props = {
  text: string;
  className: string;
};

const SplitText = ({ text, className }: Props) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          className={className}
          key={i + char}
          style={{ animationDelay: (3 * i) / 10 + 's' }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default SplitText;
