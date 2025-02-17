export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary-color)',
          'primary-dark': 'var(--primary-dark-color)',
          secondary: 'var(--secondary-color)',
          accent: 'var(--accent-color)',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to right, #e6affc, #ffe577)',
          "custom-gradient2":"var(--primary-gradient)",
        },

        boxShadow: {
          'custom-blue': '0 4px 6px #8290f0',
          'custom-pink': '0 4px 6px #e6affc',
           
        },
        spacing: {
          '128': '32rem',  // 512px
          '144': '36rem',  // 576px
          '160': '40rem',  // 640px
          
        },
        fontSize: {
          '10xl': '12rem', 
          '11xl': '18rem', 
        },

      },
    },
    plugins: [],
  };