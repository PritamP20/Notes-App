import React, { Component } from 'react';

export default class Contact extends Component {
  handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault(); // Prevents the default form submission behavior
    // Add your logic to handle the form data or make an API call
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Your FeedBack matters
            </span>
          </h1>
          <p className="text-lg font-normal text-black-500 lg:text-xl dark:text-black-400">
            In fostering a <a href="#" class="font-semibold text-gray-900 underline dark:text-green decoration-indigo-500">positive</a> and inclusive online community, we kindly request everyone to be <a href="#" class="font-semibold text-gray-900 underline dark:text-green decoration-indigo-500">respectful</a> and considerate in their <a href="#" class="font-semibold text-gray-900 underline dark:text-green decoration-indigo-500">comments</a>, recognizing that we value <a href="#" class="font-semibold text-gray-900 underline dark:text-green decoration-indigo-500">diverse</a> perspectives and <a href="#" class="font-semibold text-gray-900 underline dark:text-green decoration-indigo-500">opinions</a>.
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
