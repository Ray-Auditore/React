function Welcomepage({IsLoggedIn}) {
    return (
        <div>
            <h1>{IsLoggedIn ? "Welcome back" : "Please log in to continue"}</h1>
        </div>
    
    );
}

export default Welcomepage;