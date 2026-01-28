import { useEffect, useState } from 'react'
import styles from './BubbleAnimation.module.css'

export default function BubbleAnimation() {
    const [bubbles, setBubbles] = useState([])

    useEffect(() => {
        const generateBubbles = () => {
            const newBubbles = []
            const bubbleCount = 15

            for (let i = 0; i < bubbleCount; i++) {
                newBubbles.push({
                    id: i,
                    size: Math.random() * 200 + 80,
                    left: Math.random() * 100,
                    animationDuration: Math.random() * 15 + 10,
                    animationDelay: Math.random() * 5,
                    opacity: Math.random() * 0.4 + 0.1
                })
            }

            setBubbles(newBubbles)
        }

        generateBubbles()
    }, [])

    return (
        <div className={styles.bubbleContainer}>
            {bubbles.map(bubble => (
                <div
                    key={bubble.id}
                    className={styles.bubble}
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: `${bubble.left}%`,
                        animationDuration: `${bubble.animationDuration}s`,
                        animationDelay: `${bubble.animationDelay}s`,
                        opacity: bubble.opacity
                    }}
                />
            ))}
        </div>
    )
}