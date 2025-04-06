import { createTheme } from '@mui/material/styles';
import { indigo, deepPurple} from '@mui/material/colors';

const callbacks = new Set()

export const lightTheme = createTheme({
  palette: {
    primary: indigo
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: indigo
  },
})


// All I wanted was for the logo to change colors for each page and this was a monster to figure out. 
// The comically long name of this method is to remind me of the struggle to get here. 
export function setSvgFilterPrevCssPropertyToCurrentSvgFilterCssProperty(){
  document.querySelector(":root").style.setProperty(
    "--svg-filter-prev", 
    window.getComputedStyle(document.getElementsByClassName('svg-animate')[0]).filter
  ) 
}

export function setSvgFilterCurrentCssProperty(style){
  document.querySelector(":root").style.setProperty(
    "--svg-filter", 
    window.getComputedStyle(document.body).getPropertyValue(style)
  ) 
}

export function svgFilterTriggerAnimation(style){
  document.querySelector(":root").style.setProperty(
    "--svg-filter-prev", 
    window.getComputedStyle(document.getElementsByClassName('svg-animate')[0]).filter
  )
  document.querySelector(":root").style.setProperty(
    "--svg-filter", 
    window.getComputedStyle("")
  )
}

export function forceTriggerSvgAnimation(){
  var svgs = document.getElementsByClassName('svg-icon')
  for (let svg of svgs){
    svg.classList.remove("svg-animate")
    svg.offsetHeight; /* trigger reflow */
    svg.classList.add("svg-animate")
  }
}

export function changeTheme(){
  if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  } else if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.add("dark")
    }
  }
}
  
// toggle to switch classes between .light and .dark
// if no class is present (initial state), then assume current state based on system color scheme
// if system color scheme is not supported, then assume current state is light
export function toggleTheme() {
  try{
    setSvgFilterPrevCssPropertyToCurrentSvgFilterCssProperty()
    changeTheme()
    forceTriggerSvgAnimation()
    callbacks.forEach(callback => callback())
  } 
  catch(e){
    console.error(`theme-adjustment-related error :: ${e.message}`)
  }
}

export function onThemeToggle(callback) {
  callbacks.add(callback)
}

export function offThemeToggle(callback) {
  callbacks.delete(callback)
}

export function getCurrentTheme() {
  if (document.documentElement.classList.contains("light")) return "light"
  if (document.documentElement.classList.contains("dark")) return "dark"
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return "dark"
  return "light"
}

// This file's a mess but at least all the mess is together in one place