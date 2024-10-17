import React from 'react';

const StudentRegistrationForm = ({ handleForm, handleSubmit }) => {
    return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-300">
  <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 my-5 border-t-8 border-blue-500 transform transition duration-500 hover:scale-105">
    <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Registration</h2>

    <form className="space-y-8" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="relative">
        <label className="block text-md font-semibold text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-shadow duration-300 transform hover:scale-105"
          placeholder="Your full name"
          onChange={handleForm}
        />
      </div>

      {/* Email Field */}
      <div className="relative">
        <label className="block text-md font-semibold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-shadow duration-300 transform hover:scale-105"
          placeholder="Email address"
          onChange={handleForm}
        />
      </div>

      {/* Course Field */}
      <div className="relative">
        <label className="block text-md font-semibold text-gray-700 mb-2">Course</label>
        <input
          type="text"
          name="course"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-shadow duration-300 transform hover:scale-105"
          placeholder="Course name"
          onChange={handleForm}
        />
      </div>

      {/* Message Field */}
      <div className="relative">
        <label className="block text-md font-semibold text-gray-700 mb-2">Additional Information</label>
        <textarea
          name="message"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-shadow duration-300 transform hover:scale-105"
          rows="4"
          placeholder="Additional information"
          onChange={handleForm}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg transform transition duration-500 hover:scale-105 shadow-lg hover:shadow-2xl hover:from-green-600 hover:to-blue-700"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</div>

    );
};

export default StudentRegistrationForm;
