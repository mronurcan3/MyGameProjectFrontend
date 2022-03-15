module.exports = {
  content: ["./layouts/myTycoonGame/**.html","./layouts/myTycoonGame/indexPage/**.html","./layouts/myTycoonGame/stockMarketPage/**.html"],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg':  "url('/layouts/myTycoonGame/Images/MainPage/main-bg.jpg')",
        'main-bank':  "url('/layouts/myTycoonGame/Images/MainPage/main-bank.jpg')",
        
      },

      screens: {
       'mobile': '50px',
       


      }

    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
