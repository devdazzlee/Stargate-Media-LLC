import axios from 'axios';
import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    callTime: '',
    description: '',
    agreeToContact: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://trazzel-update-backend.vercel.app/api/messages', formData);
      console.log('API response:', response.data);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        callTime: '',
        description: '',
        agreeToContact: false,
      });
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Error sending message');
    }
  };

  return (
    <div className='form-shadow'>
      <div className='flex flex-col'>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Email Address"
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="callTime"
          value={formData.callTime}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="What time should we call you?"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Give us a brief description of your request"
        ></textarea>
        <p className='my-4'>
          <input
            type="checkbox"
            name="agreeToContact"
            checked={formData.agreeToContact}
            onChange={handleChange}
          /> 
          By clicking this checkbox, you agree that we can use your contact information and get in touch with you through SMS.
        </p>
        <button
          onClick={handleSubmit}
          className='form-button-full w-full themecolor text-white font-bold py-2 px-4 rounded-full'
        >
          CONTACT WITH US
        </button>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Form;
