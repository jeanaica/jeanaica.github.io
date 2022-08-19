const Container = ({children}) => {
    
    
    return (
        <div data-testid="container" className=" flex flex-col shadow-sm">
            {children}
        </div>
    )
}

export default Container