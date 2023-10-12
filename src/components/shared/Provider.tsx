import { CategoryProvider } from '@/lib/hooks/use-category';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};

export default Provider;
