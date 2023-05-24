
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='my-4 md:my-8 md:w-3/12 mx-auto text-center '>
      <p className=' text-xl font-mono'>--- {subHeading} --- </p>
      <h3 className='text-3xl text-amber-700 uppercase border-y-4 py-2 font-light'>
        {heading}{' '}
      </h3>
    </div>
  );
};

export default SectionTitle;