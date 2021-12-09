import { useState, useEffect } from 'react';

const useScrollHandler = () => {
    // State that holds the y scroll location of where the user is scrolling on the page
    const [scroll, setScroll] = useState(0)
    // State that holds the section on the page the user is scrolling on based on the scroll state above
    const [scrollActive, setScrollActive] = useState("")

    // useEffect to watch for scrolling
    useEffect(() => {
        const onScroll = () => {
            // console.log("hello")
            // set the scroll to the current window scorllY value
            setScroll(window.scrollY)
            // if the scroll state is more than 600 and less than 1200 set the scrollactive state to the section name
            if ((scroll > 600) && (scroll < 1200)) {
                setScrollActive("menu")
                // if the scroll state is more than 1200 and less than 2800 set the scrollactive state to the section name
            } else if ((scroll > 1200) && (scroll < 2800)) {
                setScrollActive("about")
                // if the scroll state is more than 2800 and less than 3900 set the scrollactive state to the section name
            } else if ((scroll > 2800) && (scroll < 3900)) {
                setScrollActive("projects")
                // if the scroll state is more than 3901 set the scrollactive state to the section name
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