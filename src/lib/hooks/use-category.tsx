'use client';

import { createContext, useContext, useState } from 'react';

const initialState = {
  category: 'all',
  setCategory: (_: string) => {
    return;
  },
};

const CategoryContext = createContext(initialState);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<string>('all');

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default function useCategory() {
  return useContext(CategoryContext);
}
