import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../Components/Context/Context';
import Footer from '../Footer/Footer';
import Navbar from '../Navabar/Navbar';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useNavigate } from 'react-router-dom';
import ISO3166 from 'iso-3166-1';

const PaymentForm1 = () => {
  const { cart, finalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [clientEmail, setClientEmail] = useState('');
  const countryCodes = {
    'Afghanistan': 'AF',
    'Albania': 'AL',
    'Algeria': 'DZ',
    'Andorra': 'AD',
    'Angola': 'AO',
    'Antigua and Barbuda': 'AG',
    'Argentina': 'AR',
    'Armenia': 'AM',
    'Australia': 'AU',
    'Austria': 'AT',
    'Azerbaijan': 'AZ',
    'Bahamas': 'BS',
    'Bahrain': 'BH',
    'Bangladesh': 'BD',
    'Barbados': 'BB',
    'Belarus': 'BY',
    'Belgium': 'BE',
    'Belize': 'BZ',
    'Benin': 'BJ',
    'Bhutan': 'BT',
    'Bolivia': 'BO',
    'Bosnia and Herzegovina': 'BA',
    'Botswana': 'BW',
    'Brazil': 'BR',
    'Brunei': 'BN',
    'Bulgaria': 'BG',
    'Burkina Faso': 'BF',
    'Burundi': 'BI',
    'Cabo Verde': 'CV',
    'Cambodia': 'KH',
    'Cameroon': 'CM',
    'Canada': 'CA',
    'Central African Republic': 'CF',
    'Chad': 'TD',
    'Chile': 'CL',
    'China': 'CN',
    'Colombia': 'CO',
    'Comoros': 'KM',
    'Congo, Democratic Republic of the': 'CD',
    'Congo, Republic of the': 'CG',
    'Costa Rica': 'CR',
    'Croatia': 'HR',
    'Cuba': 'CU',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Denmark': 'DK',
    'Djibouti': 'DJ',
    'Dominica': 'DM',
    'Dominican Republic': 'DO',
    'Ecuador': 'EC',
    'Egypt': 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    'Eritrea': 'ER',
    'Estonia': 'EE',
    'Eswatini': 'SZ',
    'Ethiopia': 'ET',
    'Fiji': 'FJ',
    'Finland': 'FI',
    'France': 'FR',
    'Gabon': 'GA',
    'Gambia': 'GM',
    'Georgia': 'GE',
    'Germany': 'DE',
    'Ghana': 'GH',
    'Greece': 'GR',
    'Grenada': 'GD',
    'Guatemala': 'GT',
    'Guinea': 'GN',
    'Guinea-Bissau': 'GW',
    'Guyana': 'GY',
    'Haiti': 'HT',
    'Honduras': 'HN',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'India': 'IN',
    'Indonesia': 'ID',
    'Iran': 'IR',
    'Iraq': 'IQ',
    'Ireland': 'IE',
    'Israel': 'IL',
    'Italy': 'IT',
    'Jamaica': 'JM',
    'Japan': 'JP',
    'Jordan': 'JO',
    'Kazakhstan': 'KZ',
    'Kenya': 'KE',
    'Kiribati': 'KI',
    'Korea, North': 'KP',
    'Korea, South': 'KR',
    'Kosovo': 'XK',
    'Kuwait': 'KW',
    'Kyrgyzstan': 'KG',
    'Laos': 'LA',
    'Latvia': 'LV',
    'Lebanon': 'LB',
    'Lesotho': 'LS',
    'Liberia': 'LR',
    'Libya': 'LY',
    'Liechtenstein': 'LI',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Madagascar': 'MG',
    'Malawi': 'MW',
    'Malaysia': 'MY',
    'Maldives': 'MV',
    'Mali': 'ML',
    'Malta': 'MT',
    'Marshall Islands': 'MH',
    'Mauritania': 'MR',
    'Mauritius': 'MU',
    'Mexico': 'MX',
    'Micronesia': 'FM',
    'Moldova': 'MD',
    'Monaco': 'MC',
    'Mongolia': 'MN',
    'Montenegro': 'ME',
    'Morocco': 'MA',
    'Mozambique': 'MZ',
    'Myanmar': 'MM',
    'Namibia': 'NA',
    'Nauru': 'NR',
    'Nepal': 'NP',
    'Netherlands': 'NL',
    'New Zealand': 'NZ',
    'Nicaragua': 'NI',
    'Niger': 'NE',
    'Nigeria': 'NG',
    'North Macedonia': 'MK',
    'Norway': 'NO',
    'Oman': 'OM',
    'Pakistan': 'PK',
    'Palau': 'PW',
    'Palestine': 'PS',
    'Panama': 'PA',
    'Papua New Guinea': 'PG',
    'Paraguay': 'PY',
    'Peru': 'PE',
    'Philippines': 'PH',
    'Poland': 'PL',
    'Portugal': 'PT',
    'Qatar': 'QA',
    'Romania': 'RO',
    'Russia': 'RU',
    'Rwanda': 'RW',
    'Saint Kitts and Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Vincent and the Grenadines': 'VC',
    'Samoa': 'WS',
    'San Marino': 'SM',
    'Sao Tome and Principe': 'ST',
    'Saudi Arabia': 'SA',
    'Senegal': 'SN',
    'Serbia': 'RS',
    'Seychelles': 'SC',
    'Sierra Leone': 'SL',
    'Singapore': 'SG',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Solomon Islands': 'SB',
    'Somalia': 'SO',
    'South Africa': 'ZA',
    'South Sudan': 'SS',
    'Spain': 'ES',
    'Sri Lanka': 'LK',
    'Sudan': 'SD',
    'Suriname': 'SR',
    'Sweden': 'SE',
    'Switzerland': 'CH',
    'Syria': 'SY',
    'Taiwan': 'TW',
    'Tajikistan': 'TJ',
    'Tanzania': 'TZ',
    'Thailand': 'TH',
    'Timor-Leste': 'TL',
    'Togo': 'TG',
    'Tonga': 'TO',
    'Trinidad and Tobago': 'TT',
    'Tunisia': 'TN',
    'Turkey': 'TR',
    'Turkmenistan': 'TM',
    'Tuvalu': 'TV',
    'Uganda': 'UG',
    'Ukraine': 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States': 'US',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vanuatu': 'VU',
    'Vatican City': 'VA',
    'Venezuela': 'VE',
    'Vietnam': 'VN',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW'
  };  
  const [deliveryDetails, setDeliveryDetails] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shippingPrice, setShippingPrice] = useState(null);

  const handleEmailChange = (e) => {
    setClientEmail(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prevDetails => {
      const updatedDetails = { ...prevDetails, [name]: value };
      
      // Only call calculateShippingPrice if all required fields are set
      const { country, state, zipCode, address, city, firstName, lastName, phoneNumber } = updatedDetails;
      if (country && state && zipCode && address && city && firstName && lastName && phoneNumber) {
        calculateShippingPrice();
      }

      return updatedDetails;
    });
  };

  const calculateShippingPrice = async () => {
    console.log("calculateShippingPrice called");

    const { country, state, address, city, firstName, lastName, phoneNumber } = deliveryDetails;
    const countryCode = countryCodes[country] || 'US'; // Use default 'US' if country not found

    const options = {
      method: 'POST',
      url: 'https://api.easyship.com/2023-01/rates',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer prod_ovRZFJGDTXPGbv0cc9E6yyemf7T81rZ+ZPqZwU91Z6w=`
      },
      data: {
        origin_address: {
          line_1: '8801 Shore Rd Apt 1A-West NY 11209',
          city: 'Brooklyn',
          state: 'NY',
          postal_code: '11209',
          contact_name: 'traazel Rosario',
          contact_phone: '+1 929-539-9786',
          contact_email: 'contact@strgatemedia.com',
          company_name: 'Stargate Media',
          country_alpha2: 'US'
        },
        destination_address: {
          line_1: address,
          apartment: deliveryDetails.apartment, // Add apartment details if necessary
          city: city,
          state: state,
          postal_code: deliveryDetails.zipCode,
          contact_name: `${firstName} ${lastName}`,
          contact_phone: phoneNumber,
          contact_email: clientEmail,
          country_alpha2: countryCode,
        },
        incoterms: 'DDU',
        insurance: { is_insured: false },
        parcels: cart.map(item => ({
          items: [{
            actual_weight: parseFloat(item.weight) / 1000 || 0.625, 
          description: (item.projectDescription || 'No description').substring(0, 200),
            declared_currency: 'USD',
            declared_customs_value: parseFloat(item.projectPrice) || 2,
            dimensions: {
              length: parseFloat(item.height) || 2,
              width: parseFloat(item.width) || 2,
              height: parseFloat(item.height) || 2
            },
            item_category_id: item._id || 'default_id',
            hs_code: Math.random().toString().slice(2, 10),
            category: "Book",
            selectedFormat: item.selectedFormat || 'default_format'
          }],
          weight: parseFloat(item.weight) || 2,
          dimensions: {
            length: parseFloat(item.height) || 2,
            width: parseFloat(item.width) || 2,
            height: parseFloat(item.height) || 2
          }
        })),
        shipping_settings: { units: { dimensions: 'cm', weight: 'kg' } }
      }
    };

    try {
      const response = await axios.request(options);
      if (response.data.rates && response.data.rates.length > 0) {
        const shippingRate = response.data.rates[0].total_charge;
        setShippingPrice(shippingRate);
      }
    } catch (error) {
      console.error('Error fetching shipping rate:', error);
      setErrorMessage(error.response?.data?.error?.details.join(', ') || 'An error occurred while fetching shipping rates.');
    }
  };

  const handleSubmit = async (token, verifiedBuyer) => {
    let productDetail = cart.map((item) => ({ id: item._id, quantity: item.quantity, selectedFormat: item.selectedFormat }));
    console.log(cart);

    try {
      const response = await axios.post('https://trazzel-update-backend.vercel.app/process-payment', {
        sourceId: token.token,
        amount: finalPrice + (shippingPrice || 0),
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
    return `$${amount.toFixed(2)}`;
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
            {shippingPrice !== null && (
              <p className="text-gray-800 text-lg font-semibold mb-2 text-center">
                Shipping Price: <span className="text-indigo-600">USD {formatCurrency(shippingPrice)}</span>
              </p>
            )}
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
              placeholder="First name"
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
              placeholder="Apartment"
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
              placeholder="Zip Code"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              name="phoneNumber"
              value={deliveryDetails.phoneNumber}
              onChange={handleDeliveryChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <PaymentForm
              applicationId="sq0idp-LX95qM4Nadgr4o1RMCrrnQ"
              cardTokenizeResponseReceived={handleSubmit}
              locationId="LFGZ0QRT50Y82"
            >
              <CreditCard />
            </PaymentForm>
          </div>
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
