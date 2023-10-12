import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CustomRightArrow = (props: Props) => {
  // onMove means if dragging or swiping in progress.
  return (
    <button
      {...props}
      className='p-2 absolute top-1/2 right-0 -translate-y-1/2 md:p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 text-black flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition bg-white text-xl  aspect-square'
    >
      <ChevronRight />
    </button>
  );
};

export const CustomLeftArrow = (props: Props) => {
  // onMove means if dragging or swiping in progress.
  return (
    <button
      {...props}
      className='p-2 absolute top-1/2 left-0 -translate-y-1/2 md:p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 text-black flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition bg-white text-xl  aspect-square'
    >
      <ChevronLeft />
    </button>
  );
};
