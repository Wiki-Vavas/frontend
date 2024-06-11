/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        selectAgent: "url(/imgs/select-agent-background.png)",
        weaponAnimation: "url(/imgs/weapon-background.gif)"
      }
    },
  },
  plugins: [],
}

