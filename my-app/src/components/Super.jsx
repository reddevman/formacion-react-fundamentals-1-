// Super recibe los componentes hijo (children)

export const Super = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}