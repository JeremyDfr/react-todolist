export default function Input({className, type = 'text', onChange, ...props}) {
    return (
        <input className={`text-black text-sm py-1 px-2 outline-none rounded border border-coral-500 ${className}`} type={type} onChange={onChange} {...props}/>
    )
}