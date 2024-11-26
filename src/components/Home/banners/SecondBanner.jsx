import SecondBannerComplete from "/public/SecondBannerComplete.png";


function SecondBanner() {
    return (
      <div className='mt-32  flex justify-center'>
        <img 
          src={SecondBannerComplete} 
          alt="Landing Banner" 
          className=" hidden lg:block w-full h-auto max-w-[1138px] object-cover"
        />
      </div>
    );
  }
  
  export default SecondBanner;