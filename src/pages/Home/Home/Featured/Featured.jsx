import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import date from 'date-and-time';
import featuredImg from '../../../../assets/home/featured.jpg';

const Featured = () => {
  const now = new Date();
  const formattedDate = date.format(now, 'MMM DD YYYY');

  return (
    <div
      className='text-white  bg-fixed my-4 py-8'
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundColor: 'rgba(155, 255, 255, 0.5)',
      }}
    >
      <SectionTitle subHeading={'Check it Out'} heading={'Featured item'} />
      <div className='md:flex justify-center items-center md:pb-20 md:pt-8 md:px-36 bg-slate-600 opacity-80 gap-4 px-2'>
        <div>
          <img src={featuredImg} alt='' />
        </div>
        <div className='md:ml-16'>
          <p>{formattedDate}</p>
          <p className='uppercase'>Where can I get some?</p>
          <p>
            We have all heard the statistics about the increase in obesity from
            processed foods, soda, and sugars. Because of this, there has been
            an abundance of diet tips, diet profiles, and diet books claiming to
            be the best diet to lose weight. Even with all the diet information,
            individuals struggle to maintain a healthy diet and lifestyle
            balance.
          </p>
          <button className='uppercase mt-4 text-white btn btn-outline border-0 border-b-4'>Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
