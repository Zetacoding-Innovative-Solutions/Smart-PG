// hooks/useCountUp.js
import { useEffect, useState } from "react"

export default function useCountUp(target, duration = 1000) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const end = parseInt(target)
        if (start === end) return

        const incrementTime = 16 // roughly 60fps
        const steps = Math.ceil(duration / incrementTime)
        const stepSize = end / steps

        let current = 0
        let stepCount = 0

        const timer = setInterval(() => {
            current += stepSize
            stepCount++
            if (stepCount >= steps) {
                clearInterval(timer)
                setCount(end)
            } else {
                setCount(Math.ceil(current))
            }
        }, incrementTime)

        return () => clearInterval(timer)
    }, [target, duration])

    return count
}
