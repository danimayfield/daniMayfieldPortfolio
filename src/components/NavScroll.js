import { useState, useEffect } from 'react';

const useScrollHandler = () => {
    const [scroll, setScroll] = useState(0)
    const [scrollActive, setScrollActive] = useState("")

    // useEffect to watch for scrolling
    useEffect(() => {
        const onScroll = () => {
            // console.log("hello")
            // set the scroll to the current window scorllY value
            setScroll(window.scrollY)
            // if the scroll state is more than 600 and less than 1300 set the scrollactive state to true, otherwise it's false
            if ((scroll > 600) && (scroll < 1200)) {
                setScrollActive("menu")

            } else if ((scroll > 1200) && (scroll < 2800)) {
                setScrollActive("about")

            } else if ((scroll > 2800) && (scroll < 3900)) {
                setScrollActive("projects")

            } else if (scroll > 3901) {
                setScrollActive("contact")

            }
        }
        // listening for scrolling & calling function
        document.addEventListener("scroll", onScroll)

        // cleaning up when not scrolling
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    }, [scroll, setScroll])

    return scrollActive
}

export default useScrollHandler