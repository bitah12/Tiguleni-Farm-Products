import LandingComplete from '/public/LandingComplete.jpg'

function LandingBanner() {
    return (
      <div className='mt-10  flex justify-center'>
        <img 
          src={LandingComplete} 
          alt="Landing Banner" 
          className=" hidden lg:block w-full h-auto max-w-[1138px] object-cover"
        />
      </div>
    );
  }
  
  export default LandingBanner;