import { CategoryProvider } from '@/lib/hooks/use-category';

import { ProgressBar } from '.';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategoryProvider>
      {children}
      <ProgressBar />
    </CategoryProvider>
  );
};

export default Provider;
