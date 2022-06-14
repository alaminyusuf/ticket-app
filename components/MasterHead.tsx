import { FC } from 'react';
import Directives from './Directives';

const Header: FC = () => {
  return (
    <div className='flex justify-between text-white'>
      <div className='flex-1 grid'>
        <div className="bg-[url('../public/invoice.png')]  bg-no-repeat"></div>

        <div className='mx-auto w-eighty text-medium place-items-center'>
          <div>
            <span className='text-forestgreen capitalize'>withness</span> a
            lofty <span className='text-forestgreen capitalize'>success</span>{' '}
            with automated{' '}
            <span className='text-forestgreen capitalize'>invoicing</span>{' '}
            system
          </div>
          <Directives />
        </div>
      </div>

      <div className='flex-1'>
        <div className="bg-[url('../public/career.svg')] h-landing bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default Header;
