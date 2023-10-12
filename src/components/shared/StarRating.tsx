import { cn } from '@/lib/utils';

type Props = {
  totalStars?: number;
  rate: number;
};

const Star = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={cn('w-[24px] h-full', className)}
      style={{
        clipPath:
          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      }}
    ></div>
  );
};

const StarRating = ({ totalStars = 5, rate }: Props) => {
  return (
    <div className='h-5  w-[120px] bg-inherit flex'>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          className={
            i + 1 <= Math.round(rate) ? 'bg-gradient-secondary' : 'bg-dark-2'
          }
        />
      ))}
    </div>
  );
};

export default StarRating;
