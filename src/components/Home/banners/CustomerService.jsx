import CustomerServicePic from '/CustomerServicePic.png'

function CustomerService() {
    return (
      <div className='mt-36  flex justify-center'>
        <img 
          src={CustomerServicePic} 
          alt="Landing Banner" 
          className=" hidden lg:block w-[600px] h-auto max-w-[1138px] object-cover"
        />
      </div>
    );
  }
  
  export default CustomerService;