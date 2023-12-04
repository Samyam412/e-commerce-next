import Image from 'next/image'

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-l from-orange-700 to-orange-500 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly ">
        <div className="text-center mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-white md:text-6xl mb-4">
            Summer Sale
          </h1>
          <h3 className="text-lg text-white md:text-xl mb-2">
            Enjoy Discounts on selected Items
          </h3>
          <h1 className="text-2xl md:text-5xl text-yellow-300 font-bold ">
            Get 50% off{" "}
          </h1>
        </div>
        <div className="w-1/2 md:w-1/3 relative aspect-video">
          <Image src="/banner-image.png" fill alt="Banner Image" className='object-contain'/>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
