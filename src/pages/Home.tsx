// style
import Main from "../components/demos/home/main/Main";

// components
import Header from "../components/header/Header";
import Introduction from "../components/demos/home/introduction/Introduction";


const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Introduction />
      </Main>
    </>
  )
}

export default Home;