interface DirectiveProps {
  name: string;
}

const Directive = ({ name }: DirectiveProps): JSX.Element => {
  return (
    <button className='w-36 uppercase text-white bg-transparent rounded outline-none border border-solid border-forestgreen font-bold text-sm py-2 hover:border-white hover:text-forestgreen transition-colors duration-200 tracking-widest'>
      {name}
    </button>
  );
};

export default Directive;
