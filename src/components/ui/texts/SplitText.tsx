type Props = {
  text: string;
  className: string;
  delay?: number;
};

const SplitText = ({ text, className, delay = 2.8 }: Props) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          className={className}
          key={i + char}
          style={{ animationDelay: (delay * i) / 10 + 's' }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default SplitText;
