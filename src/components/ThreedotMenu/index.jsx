import React, {useRef, useState, useEffect} from 'react'
import "./threedotMenu.css"

const ThreedotMenu = ({children, white}) => {
    const [show, setShow] = useState(false);
    const dots = useRef();

    useEffect(() => {
        const checkClick = (e) => {
            if (show && dots.current && !dots.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", checkClick)

        return () => {
            document.removeEventListener('mousedown', checkClick)
        }
    }, [show])

    return (
        <div ref={dots} style={{position: "relative"}}>
            <div className="threeDotsDiv" onClick={() => setShow((state) => !state)}>
                <div className={`threeDots ${white ? "white" : ""}`}></div>
            </div>
            {show && (
            <div className="threeDotsMenu">
                {children}
            </div>
            )}
        </div>
    )
}

export const ThreedotItem = ({onClick, children}) => {
    return (
        <div className="threeDotItem" onClick={onClick}>
            {children}
        </div>
    )
}


export default ThreedotMenu
