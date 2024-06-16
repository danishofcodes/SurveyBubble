export const questions = [
  {
    id: 1,
    feedbackquestion: "Are you happy with SurveyBubble overall?",
    type: "emojireact",
    name: 'happyornot',
    options: ["Loved it", "Soo good", "Okay", "Not good", "Super Bad"]
  },

  {
    id: 2,
    feedbackquestion: "Which features are most valuable to you?",
    type: "checkbox",
    name: 'valuablefeatures',
    options: ["Create Survey Form in Instant", "Analytics and User Trends", "Affordable Subscription Plan", "No disturbing adds on Page"],
  },

  {
    id: 3,
    feedbackquestion: " How likely are you to recommend SurveyBubble to a work buddy, collegue or friends?",
    type: "radio",
    name: 'willrecommend',
    options: ["Strongly Recommend", "Very likely to Recommend", "Maybe", "No not at all"],
  },

  {
    id: 4,
    feedbackquestion: "Which domains of work do you usually use SurveyBubble for?",
    type: "checkbox",
    name: 'domainaffecting',
    options: ["Feedback From Students", "Feedback from clients/customers", "Feedbacks from Employees", "Market Research and Opinion Polls", "Product/Service Concept Testing"],
  },

  {
    id: 5,
    feedbackquestion: "What important features are we missing?",
    type: "textarea",
    name: 'missingfeatures',
    options: null,
  },
  // { id: 6, 
  //   feedbackquestion: "Are you satisfied?",
  //   type: "radio",
  //   name:'satisfied',
  //   options: ["happy", "yeah okay", "not that much", "yuck"]
  // },
  // { id: 7, 
  //   feedbackquestion: "Are you happy?",
  //   type: "emojireact",
  //   name:'happyornot',
  //   options: ["Loved it", "Soo good", "Okay", "Not good", "Super Bad"]
  // },
  // { id: 8, 
  //   feedbackquestion: "Does it work properly?",
  //   type: "checkbox",
  //   name:'checkboxfeedback2',
  //   options: ["option x", "option y", "option z", "option zxy"]
  // },
];
