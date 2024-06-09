module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      screens:{
      'custom':'1024px',
      'xm':{'max':'500px'},
      'ssm':{'max':'400px'}
      },
     
    },
  },
  plugins: [],
};
