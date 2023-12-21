import React, { Component } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase'

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      feedbackValue: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "feedbacks"), {
        content: this.state.feedbackValue,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    this.setState({ submitted: true });
  };

  handleChange = (event) => {
    this.setState({ feedbackValue: event.target.value })
  }

  handlePostAnotherComment = () => {
    this.setState({ submitted: false });
  };

  render() {
    const { submitted } = this.state;

    return (
      <div className="relative flex flex-col pt-10 items-center h-screen">
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
        {submitted ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-green-600">Thank you for your feedback!</p>
            <button
              onClick={this.handlePostAnotherComment}
              className="mt-4 bg-[#1e293b] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black border border-white hover:border-black"
            >
              Post again
            </button>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} className="max-w-md w-full">
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-1 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  value={this.state.feedbackValue}
                  onChange={this.handleChange}
                  rows="6"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="border-2 border-white bg-[#1e293b] text-white py-1 mt-7 w-full rounded-md hover:bg-white hover:border-black hover:text-black font-semibold"
                >
                  &nbsp;&nbsp;Post Comment
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}
