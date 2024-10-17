import React, { useState, useEffect } from 'react';

const Update = ({ editData, handleUpdate }) => {
    const [updataData, setUpdataData] = useState({
        name: '',
        email: '',
        course: '',
        message: ''
    });

    useEffect(() => {
        setUpdataData(editData);
    }, []);


    const handleForm = (e) => {
        const { name, value } = e.target;
        setUpdataData({
            ...updataData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(updataData);
    }

    return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-purple-100 to-blue-200">
  <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 my-5">
    <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Student Registration</h2>

    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={updataData.name}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Full Name"
          onChange={handleForm}
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={updataData.email}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Email Address"
          onChange={handleForm}
        />
      </div>

      {/* Course Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">Course</label>
        <input
          type="text"
          name="course"
          value={updataData.course}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Course Name"
          onChange={handleForm}
        />
      </div>

      {/* Additional Information Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-700">Additional Information</label>
        <textarea
          name="message"
          value={updataData.message}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          placeholder="Additional Information"
          onChange={handleForm}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 transition duration-300 transform hover:scale-105"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</div>

    );
};

export default Update;
