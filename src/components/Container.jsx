const Container = ({ title, headerColor, children}) => {
    return (
        <div data-testid="container" className="flex flex-col shadow-slate-400 shadow-sm w-1/2 m-4">
            <div className={`flex flex-col text-center px-10 py-5 ${headerColor}`}>
              <h1 className="font-semibold text-xl text-slate-100">{title}</h1>
            </div>
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    )
}

export default Container