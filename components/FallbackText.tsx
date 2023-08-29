
import { ReactNode, Suspense } from 'react'

interface Props {
    content: ReactNode,
    fallbacktext: string
}

export const FallbackText = ({ content, fallbacktext }: Props) => {
    return (
       <Suspense fallback={fallbacktext}>
         {content}
       </Suspense>
    )
}