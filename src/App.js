// import logo from './logo.svg';
import './App.css';
import Mobile from '../src/mobile.jpg';
import Mobile2 from '../src/img12.png';
// import React, { useState } from "react";
import file from '../src/file.png';
import file1 from '../src/file1.png';
import file2 from '../src/file2.png';
import { useState } from 'react';
import axios from 'axios';

function App() {
  
  const [formData, setFormData] = useState({
    brandName: '',
    modelName: '',
    ram: '',
    storage: '',
    warranty: false,
    condition: '',
  name: '',
    phoneNo: '',
    email: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(
          {brandName: '',
          modelName: '',
          ram: '',
          storage: '',
          warranty:true,
          condition: '',
          name: '',
          phoneNo: '',
          email: '',
          city: ''}
        )

        console.log(formData)

    
  // axios.post ('https://api.whatsapp.com/send?phone=9108950528203&text=Hey%20Mr.%20Parveen%20Saini%20Your%20request%20is%20rejected%20due%20to%20wrong%20UTR%20NO.-%20989347893792837492.%20So%20Please%20try%20again%20with%20right%20UTR%20No.%20yamsafar.in%20Wish%20you%20a%20peaceful%20life.', formData)
  // .then(response => {
  //   // Handle success response
  //   console.log('Success:', response.data);


  //   setFormData(
  //     {brandName: '',
  //     modelName: '',
  //     ram: '',
  //     storage: '',
  //     warranty: false,
  //     condition: '',
  //   name: '',
  //     phoneNo: '',
  //     email: '',
  //     city: ''}
  //   )

  // })
  // .catch(error => {
  //   // Handle error
  //   console.error('Error:', error);
  // });
  };

  return (
    <>
      <div className="px-[60px]">
        <img className=" lg:h-[320px] md:h-[320px] h-[140px] pt-2 sm:h-[320px]  w-full items-center " src={Mobile} alt='pic' />
        <form onSubmit={handleSubmit} class="max-w-md flex flex-col items-center mx-auto">
        <img className=" items-center h-[58px] pt-2 " src={Mobile2} alt='pic' />
          <h1 className="text-center pt-[20px] font-[700]">Sell Your Mobile</h1>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleInputChange}
              id="floating_repeat_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              
            />
            <label
              for="floating_repeat_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Brand Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="modelName"
              value={formData.modelName}
              onChange={handleInputChange}
              id="modelNam"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Model Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="ram"
              value={formData.ram}
              onChange={handleInputChange}
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              RAM
            </label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="storage"
              value={formData.storage}
              onChange={handleInputChange}
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Storage
            </label>
          </div>
          <div class="grid md:grid-cols-3 md:gap-6">
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
        
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-200 duration-150"
              >
                Warranty
              </label>
            </div>
            <div className='flex gap-8'><div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="term"
                  type="checkbox"
                  name="warranty"
                checked={formData.warranty}
                onChange={handleInputChange}
                  value="Yes"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
              id="terms"
                for="terms"
                class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-200 duration-150"
              >
                Yes
              </label>
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  name="warranty"
                // checked={formData.warranty}
                onChange={handleInputChange}
                value="No"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
                
                class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-200 duration-150 "
              >
                No
              </label>
            </div></div>
          </div>
          <label
            name="warranty"
            checked={formData.warranty}
            onChange={handleInputChange}
            class="ms-2 text-sm font-medium text-gray-500  dark:text-gray-200 duration-150"
          >
            Condition:
          </label>

          <div class="grid md:grid-cols-3  items-center pt-4 gap-3 md:gap-6">
          <div className='flex flex-col gap-2 items-center'>
            
   
              <img className='  h-[65%] w-[35%] xl:w-[110%] sm:w-[80%] md:w-[80%]' src={file} alt='pic1' />
              <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-200 duration-150"
              >
                Good
              </label>
            </div>
            </div>
            <div className='flex flex-col items-center'>
         
               <img  className=' h-[169px]' src={file1} alt='pic2'/>
               <div class="flex items-start  mb-5">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-200 duration-150"
              >
                Dents
              </label>
            </div>
            </div>
            <div className='flex flex-col items-center'>
             
               <img className='h-[169px]' src={file2} alt='pic3' />
               <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-200 duration-150 "
              >
                Damage
              </label>
            </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone No:
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
              value={formData.city}
              onChange={handleInputChange}
                id="floating_company"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
