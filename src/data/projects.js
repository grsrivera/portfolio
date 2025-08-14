import geotaggersPic from "../assets/geotaggers-pic.jpg"
import atlasPic from "../assets/atlas-pic.jpg"
import townHallPic from "../assets/town-hall-pic.jpg"
import hangmanPic from "../assets/hangman-pic.jpg"

export const projects = [
  {
    id: "geotaggers",
    title: "Geotagger",
    desc: "Location tagger for my Fuji camera using a Raspberry Pi",
    href: "/projects/geotagger",
    img: geotaggersPic,
  },
  {
    id: "atlas",
    title: "Income Mobility in Anchorage, AK",
    desc: "Examining upward mobility with stastistical analysis",
    href: "/projects/atlas",
    img: atlasPic,
  },
  {
    id: "townHall",
    title: "Town Hall",
    desc: "Prototype of a digital town hall for governments",
    href: "/projects/townhall",
    img: townHallPic,
  },
	  {
    id: "hangman",
    title: "Hangman Game",
    desc: "Final project for Harvard's CS50: Intro to Programming",
    href: "/projects/hangman",
    img: hangmanPic
  }
]