export default function UncontrolledLogin2() {
  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <label>
            Remember me:
            <input type="checkbox" name="remember" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
