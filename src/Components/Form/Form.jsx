import axios from 'axios';
import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './Form.css'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
    number: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://agreeable-apron-bass.cyclic.app/api/messages', formData);
      console.log('API response:', response.data);
     alert('Form submitted successfully!')
      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: ''
      }); // Reset form fields
  
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Error sending message')
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
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Email Address"
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Phone Number"
        />
         <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="what time should we call you?"
        />
         <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className='my-2 py-3 px-4 block w-full border border-gray-400 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
          placeholder="Give us Brief Description of your request"
        />
<p className='my-4' > 
<input type="checkbox" />   By clicking this check box, you agree that we can use your contact information and get in touch with you through SMS.

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