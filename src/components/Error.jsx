

export const Error = ({children}) => {
    return (
        <div className='bg-red-200 text-red-500 text-center p-3 uppercase font-bold mb-3 rounded border-l-4 border-red-500 '>
            <p>{children}</p>
        </div>
    )
}
