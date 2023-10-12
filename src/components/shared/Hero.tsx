import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

const Hero = ({
  className,
  children,
  title,
  subtitle,

  ...props
}: Props) => {
  return (
    <section
      id='#hero'
      className={cn(
        `min-h-screen md:min-h-[839px] bg-[url("/hero.jpeg")] bg-cover`,
        'relative flex items-center justify-center',
        className,
      )}
      {...props}
    >
      <div className='absolute inset-0 z-10 bg-dark-base opacity-60'></div>

      <div className='z-10 text-center max-w-3xl w-full space-y-5'>
        <h1 className='heading-primary'>{title}</h1>
        {subtitle && (
          <div className='relative flex items-center justify-center'>
            <div className='absolute bg-gradient-secondary left-0 w-[150px] h-2.5 hidden md:block rounded-full'></div>
            <h2 className='heading-primary--sub'>{subtitle}</h2>
            <div className='absolute bg-gradient-secondary right-0 w-[150px] h-2.5 hidden md:block rounded-full'></div>
          </div>
        )}
        <div className='pt-20'>{children}</div>
      </div>
    </section>
  );
};

export default Hero;
