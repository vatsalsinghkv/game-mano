type Props = {
  children: React.ReactNode;
};

const GradientText = ({ children }: Props) => {
  return (
    <div className='bg-gradient-primary relative rounded-full p-[1px] h-7'>
      <span className='bg-bg-primary rounded-full h-full px-3 text-sm flex items-center justify-center'>
        <span className='text-gradient-primary'>{children}</span>
      </span>
    </div>
  );
};

export default GradientText;
