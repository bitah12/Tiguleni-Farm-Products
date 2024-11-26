import ThirdBannerPic from '/public/ThirdBanner.jpg'

function ThirdBanner() {
    return (
      <div className='mt-32  flex justify-center'>
        <img 
          src={ThirdBannerPic} 
          alt="Landing Banner" 
          className=" hidden lg:block w-full h-auto max-w-[1138px] object-cover"
        />
      </div>
    );
  }
  
  export default ThirdBanner;