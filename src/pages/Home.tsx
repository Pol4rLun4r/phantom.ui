// style
import Main from "../components/demos/home/style/Main";

// components
import Header from "../components/header/Header";
import Introduction from "../components/demos/home/introduction/Introduction";
import ColorPalette from "../components/demos/home/colorPalette/ColorPalette";

//@test
import SectionTest from "../components/demos/home/@sectionTest/SectionTest";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Introduction />
        <ColorPalette/>
        <SectionTest/>
      </Main>
    </>
  )
}

export default Home;