// src/data/dummyDatabase.js

export const faqs = [
  {
    id: 1,
    question: "How to reset my password?",
    answer:
      "To reset your password, go to settings and click on 'Reset Password'.",
  },
  {
    id: 2,
    question: "How to contact support?",
    answer: "You can contact support via email at support@example.com.",
  },
  {
    id: 3,
    question: "How to update my profile?",
    answer:
      "To update your profile, go to your account settings and edit your profile information.",
  },
];

export const sendQuery = (query) => {
  // Simulate sending query to backend and receiving a response
  return "Thank you for your query. Our support team will get back to you soon.";
};
