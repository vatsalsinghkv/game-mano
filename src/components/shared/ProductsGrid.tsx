import { cn } from '@/lib/utils';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const ProductsGrid = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'grid grid-cols-fluid-sm sm:grid-cols-fluid gap-14 md:gap-20 md:gap-y-24',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ProductsGrid;
