module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      rotate: {
        '350': '350deg',
      },
      colors: {
        'green-soild': '#BDC1A3',
      },
      backgroundImage: {
        'my_bg_image' : "url('https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk4fHxibGFjayUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60')",
        'my_bg2' : "url('/formbg2.png')",
        'my_bg3' : "url('/bgp2.png')",
    
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
      animation: {
        fadeinn: 'fadeIn 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '100%': { backgroundColor: theme('colors.transparent') },
          '0%': { backgroundColor: theme('colors.red.300') },
        },
      }),
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
    }
  },
 
  plugins: [
    require('@tailwindcss/forms')
  ],
  
}
