import React, { Component } from 'react';

export default class Contact extends Component {
  handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your logic to handle the form data or make an API call
  };

  render() {
    return (
      <div className="relative flex flex-col items-center justify-above h-screen">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-Black md:text-5xl lg:text-3xl">
            Your Feedback matters
          </h1>
          <p className="text-lg font-normal text-black-500 lg:text-xl dark:text-black-400">
            In fostering a positive and inclusive online community,
            </p>
            <p className="text-lg font-normal text-black-500 lg:text-xl dark:text-black-400"> 
            we kindly request everyone to be respectful in their comments.
          </p>
        </div>
        <form onSubmit={this.handleSubmit} className="max-w-md w-full">
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6" // Adjust the number of rows as needed
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
