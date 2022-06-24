import Directive from './Directive';

const Bid = () => {
  return (
    <div>
      <h1 className='text-forestgreen text-center text-3xl md:text-5xl my-14'>
        Submit A Quote
      </h1>
      <form className='border-solid border-forestgreen mt-5 border-2 rounded w-11/12 md:w-2/5 mx-auto p-5'>
        <div className='mt-5 text-center'>
          <label htmlFor='name' className='block mb-3 text-left'>
            Name
          </label>
          <input
            type='text'
            className='border-gray-400 border-2 border-solid rounded bg-transparent p-3 align-center h-11 w-full focus:border-forestgreen'
            placeholder='Name'
          />
        </div>
        <div className='mt-5 text-center'>
          <label htmlFor='email' className='block mb-3 text-left'>
            Email
          </label>

          <input
            type='email'
            className='border-gray-400 border-2 border-solid rounded bg-transparent p-3 align-center h-11 w-full focus:border-forestgreen'
            placeholder='Email'
          />
        </div>
        <div className='mt-5 text-center'>
          <label htmlFor='quote' className='block mb-3 text-left'>
            Quote
          </label>
          <textarea
            className='border-gray-400 border-2 border-solid rounded bg-transparent p-3 align-center h-20 w-full resize-none leading-none focus:border-forestgreen'
            placeholder='Quote'
          />
        </div>
        <div className='mt-5 text-right'>
          <Directive name='Send' />
        </div>
      </form>
    </div>
  );
};

export default Bid;
