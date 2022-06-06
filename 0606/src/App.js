import logo from "./logo.svg";
import "./App.css";

function Header() {
  return;
}

function Nav(props) {
  const list = props.data.map((el) => {
    return (
      <li key={el.id}>
        <a href={"/read" + el.id}>{el.title}</a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
  ];
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcom" body="Hello, WEB!!"></Article>
    </div>
  );
}

export default App;
