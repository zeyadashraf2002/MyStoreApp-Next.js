'use client'
import { useState } from "react";
interface Props
{
    children: string
}
function TextExpander({children}: Props)
{
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded ? children : children.split(" ").slice(0, 3).join(" ") + "...";
    return (
        <span>
            {displayText}{" "}
            <button className="cusor-pointer text-primary-700 border-b border-primary-700 leading-3 pb-1"
            onClick ={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show Less" : "Read More"}
            </button>
            </span>
        );
}

export default TextExpander;