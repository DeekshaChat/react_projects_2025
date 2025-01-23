export default function TabButton({ children, isSelected, ...props}) { 
    return (
        <li>
            <button className={isSelected} {...props}>{children}</button>
        </li>
    )

 }