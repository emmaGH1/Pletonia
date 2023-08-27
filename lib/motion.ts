
interface Props{
   delayX: number
   delayY: number,
}


export const HeaderAnimationVariant = (delayX: number, delayY: number) => ({
    hidden: {
        y: 50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1,
          delay: delayX * delayY
        },
      },
})