import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Loader = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-center justify-center',
        className,
      )}
      {...props}
    >
      <Loader2 className='h-10 w-10 text-accent-primary animate-spin' />
    </div>
  );
};

export default Loader;
