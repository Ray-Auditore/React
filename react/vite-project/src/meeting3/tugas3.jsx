function Greeting({name,message}) {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
  
  function UserProfile({ username, age, location }) {
      return (
        <div>
          <h2>User Profile</h2>
          <p>Username:John doe {username}</p>
          <p>Age:25 {age}</p>
          <p>Location:New York {location}</p>
          <Greeting name="Alice" message="Welcome to the react!" />
        </div>
      );
    }
  
  export default UserProfile;