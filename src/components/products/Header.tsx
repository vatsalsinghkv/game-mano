import request from '@/lib/request';
import axios from '@/lib/services/axios';

import Filter from './Filter';
import Title from './Title';

const Header = async () => {
  const res = await axios.get(request.categories());
  const categories: string[] = res.data ?? [];

  return (
    <header className='flex flex-col md:flex-row gap-5 items-center justify-between'>
      <Title />
      <Filter categories={categories} />
    </header>
  );
};

export default Header;
