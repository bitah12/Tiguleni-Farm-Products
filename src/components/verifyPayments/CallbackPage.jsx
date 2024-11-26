import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';

const CallbackPage = () => {
  const [statusMessage, setStatusMessage] = useState('Verifying payment...');
  const [isVerifying, setIsVerifying] = useState(true); 
  const [paymentDetails, setPaymentDetails] = useState(null); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tx_ref = params.get('tx_ref');

    if (tx_ref) {
      verifyPayment(tx_ref);
    } else {
      setStatusMessage('No transaction reference found.');
      setIsVerifying(false);
    }
  }, []);

  const verifyPayment = async (tx_ref) => {
    try {
      const response = await fetch(`http://localhost:3000/payments/verifying/${tx_ref}`, {
        method: 'GET',
      });

      const data = await response.json();
      if (response.ok) {
        setPaymentDetails(data.data); 
        setStatusMessage('Payment Successful');
      } else {
        setStatusMessage(`Verification error: ${data.message}`);
      }
    } catch (error) {
      setStatusMessage('Error verifying payment. Please try again later.');
      console.error('Error verifying payment:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white to-white">
      
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-3xl w-full text-center transform hover:scale-105 transition-all duration-300">
        {isVerifying ? (
          <div>
            <div className="animate-spin-slow mb-8">
              <svg
                className="w-16 h-16 text-blue-600 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v2m6.364 1.636l-1.414 1.414m1.414 5.656l-1.414-1.414M18 12h-2M6.364 6.364l1.414 1.414M4 12H2m1.636 6.364l1.414-1.414M12 18v2m6.364-1.636l-1.414-1.414"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">{statusMessage}</h1>
            <p className="text-gray-600 text-lg">Please wait while we verify your payment. This might take a few moments.</p>
          </div>
        ) : (
          <div>
            {paymentDetails && paymentDetails.status === 'successful' ? (
              <div>
                <div className="flex justify-center mb-8">
                  <svg
                    className="w-20 h-20 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m0 0L9 18m0-6l-6 6"
                    />
                  </svg>
                </div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Payment Successful</h1>
                <p className="text-gray-700 text-lg mb-6">Thank you for your payment. Your order is being processed.</p>
                <hr className="my-6" />
                <div className="text-left text-lg space-y-4">
                  <p className="text-gray-800">
                    <span className="font-semibold">Amount Paid:</span> MWK{' '}
                    <span className="font-bold text-gray-900">{paymentDetails.amount}</span>
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Payment Method:</span> {paymentDetails.paymentMethod}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Date & Time:</span> {paymentDetails.dateTime}
                  </p>
                </div>
                <div className="flex flex-col mt-6">
                  
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-teal-700 transition-all duration-200">
                    View Your Bag
                  </button>
                </div>
              </div>
            ) : (
              <h1 className="text-3xl font-extrabold text-gray-900">{statusMessage}</h1>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default CallbackPage;
