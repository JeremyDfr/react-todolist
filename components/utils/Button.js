export default function Button({children, onClick, className, type = 'submit'}) {

    return (
        <button className={`rounded text-sm py-1 px-4 border-1 ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
}