import Directive from './Directive';

const Directives = (): JSX.Element => {
  return (
    <div className='flex gap-2.5 pt-3'>
      <Directive name='Vision' />
      <Directive name='Submit a bid' />
      <Directive name='Get Started' />
    </div>
  );
};

export default Directives;
