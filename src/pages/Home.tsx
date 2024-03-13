// style
import Main from "../components/demos/home/style/Main";

// components
import Introduction from "../components/demos/home/introduction/Introduction";
import ColorPalette from "../components/demos/home/colorPalette/ColorPalette";
// import DarkColorScheme from "../components/demos/home/darkColorScheme/DarkColorScheme";

const Home = () => {
  return (
      <Main>
        <Introduction />
        <ColorPalette/>
        {/* <DarkColorScheme/> */}
      </Main>
  )
}

export default Home;