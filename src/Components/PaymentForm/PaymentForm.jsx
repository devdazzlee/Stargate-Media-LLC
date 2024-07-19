import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../../Components/Context/Context';
import Footer from '../Footer/Footer';
import Navbar from '../Navabar/Navbar';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useNavigate } from 'react-router-dom';

const PaymentForm1 = () => {
  const { cart, finalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [clientEmail, setClientEmail] = useState('');
  const [deliveryDetails, setDeliveryDetails] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '' // Add phoneNumber to the state
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setClientEmail(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (token, verifiedBuyer) => {
    let productDetail = cart.map((item) => ({ id: item._id, quantity: item.quantity, selectedFormat: item.selectedFormat }));
    console.log(cart)

    try {
      const response = await axios.post('https://trazzel-update-backend.vercel.app/process-payment', {
        sourceId: token.token,
        amount: finalPrice,
        productDetail,
        clientEmail,
        deliveryDetails,
      });

      console.log('Payment Success:', response.data);
      clearCart();
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Payment Error:', error);
      setErrorMessage(error.message);
      setShowErrorModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
    navigate('/', { state: { paymentSuccess: true } });
  };

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`; // Format the amount to two decimal places
  };

  return (
    <>
      <Navbar />
      <div className="py-36 bg-gray-100 min-h-screen">
        <div className="max-w-lg mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Secure Payment Form</h2>
          <div className="mb-6">
            <p className="text-gray-800 text-lg font-semibold mb-2 text-center">
              Total Amount: <span className="text-indigo-600">USD {formatCurrency(finalPrice)}</span>
            </p>
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={clientEmail}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          <div className="mb-4 grid grid-cols-1 gap-2">
            <input
              type="text"
              name="country"
              value={deliveryDetails.country}
              onChange={handleDeliveryChange}
              placeholder="Country"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="firstName"
              value={deliveryDetails.firstName}
              onChange={handleDeliveryChange}
              placeholder="First name "
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              value={deliveryDetails.lastName}
              onChange={handleDeliveryChange}
              placeholder="Last name"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="address"
              value={deliveryDetails.address}
              onChange={handleDeliveryChange}
              placeholder="Address"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="apartment"
              value={deliveryDetails.apartment}
              onChange={handleDeliveryChange}
              placeholder="Apartment, suite, etc."
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="city"
              value={deliveryDetails.city}
              onChange={handleDeliveryChange}
              placeholder="City"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="state"
              value={deliveryDetails.state}
              onChange={handleDeliveryChange}
              placeholder="State"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="zipCode"
              value={deliveryDetails.zipCode}
              onChange={handleDeliveryChange}
              placeholder="ZIP code"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="phoneNumber" // New field for phone number
              value={deliveryDetails.phoneNumber}
              onChange={handleDeliveryChange}
              placeholder="Phone number"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          <PaymentForm
            applicationId="sq0idp-LX95qM4Nadgr4o1RMCrrnQ"
            cardTokenizeResponseReceived={handleSubmit}
            locationId="LFGZ0QRT50Y82"
          >
            <CreditCard
              buttonProps={{
                css: {
                  backgroundColor: '#4C51BF',
                  fontSize: '16px',
                  color: '#fff',
                  padding: '12px 0',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#434190',
                  },
                },
              }}
            />
          </PaymentForm>
        </div>
      </div>
      <Footer />

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-green-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m0 0a9 9 0 11-2.025 1.983L13 14l-4 4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Awesome!</h3>
            <p className="text-gray-700 mb-4">Your Order has been confirmed. Check your email for details.</p>
            <button
              onClick={handleCloseModal}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-red-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Payment Error</h3>
            <p className="text-gray-700 mb-4">{errorMessage}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm1;
