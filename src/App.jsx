import { style } from "./AppStyle";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={style.container}>
      <section className={style.sectionContainer}>
        <NavBar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
