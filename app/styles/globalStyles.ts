//Trying to use @apply directive with css classNames is causing conflict - shadcn.

export const buttonOutlined = `
flex
whitespace-nowrap
border border-dark-primary
dark:border-primary
dark:bg-primary
dark:text-dark-primary
hover:text-dark-accent
hover:bg-dark-primary
hover:dark:bg-primary 
hover:dark:text-accent
 mr-5`

export const button = `
  flex mr-5
  whitespace-nowrap
  hover:text-dark-accent 
  hover:bg-primary
  hover:dark:bg-dark-primary 
  hover:dark:text-dark-accent 
  bg-dark-primary 
  dark:bg-dark-primary 
  text-primary 
  dark:text-primary 
  hover:shadow-lg shadow-dark-primary
`