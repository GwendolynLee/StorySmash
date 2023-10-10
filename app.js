Vue.createApp({
  data() {
    return {
        questions: {
            question1: 'What is your name?', 
            question2: 'Where did you go today?',
            question3: 'What were you going to do?', 
            question4: 'Who did you see?', 
            question5: 'What did they say?', 
            question6: 'What did you say?', 
            question7: 'How did it all turn out?'
        },
        answers: [],
        enteredValue: ''
    };
  },
  methods: {
    addAnswers() {
      this.answers.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');
