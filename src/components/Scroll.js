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

                // Remove the class of navActive from all other id's on scroll of menu area
                const about = document.getElementById("about");
                about.classList.remove("navActive")
                const contact = document.getElementById("contact");
                contact.classList.remove("navActive")
                const projects = document.getElementById("projects");
                projects.classList.remove("navActive")

            } else if ((scroll > 1200) && (scroll < 2800)) {
                setScrollActive("about")

                // Remove the class of navActive from all other id's on scroll of about area
                const menu = document.getElementById("menu");
                menu.classList.remove("navActive")
                const contact = document.getElementById("contact");
                contact.classList.remove("navActive")
                const projects = document.getElementById("projects");
                projects.classList.remove("navActive")

            } else if ((scroll > 2800) && (scroll < 3900)) {
                setScrollActive("projects")

                // Remove the class of navActive from all other id's on scroll of this projects area
                const menu = document.getElementById("menu");
                menu.classList.remove("navActive")
                const contact = document.getElementById("contact");
                contact.classList.remove("navActive")
                const about = document.getElementById("about");
                about.classList.remove("navActive")

            } else if (scroll > 3901) {
                setScrollActive("contact")

                // Remove the class of navActive from all other id's on scroll of this contact area
                const menu = document.getElementById("menu");
                menu.classList.remove("navActive")
                const projects = document.getElementById("projects");
                projects.classList.remove("navActive")
                const about = document.getElementById("about");
                about.classList.remove("navActive")
            }

        }

        // setting the event handler from web
        document.addEventListener("scroll", onScroll)

        // cleaning up when not scrolling
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    }, [scroll, setScroll])

    useEffect(() => {
        console.log(scroll)
    }, [scroll])


    return scrollActive
}

export default useScrollHandler