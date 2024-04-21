import "./header.scss";
import me from "./me.jpg";
export default function Header() {
  return (
    <header>
      <img src={me} className="img-fluid" alt="Daniel Suen"></img>
      <div>
        <h1>
          My Name is <b>Daniel Suen</b>.
        </h1>
        <h2>Welcome to my page!</h2>
      </div>
    </header>
  );
}
