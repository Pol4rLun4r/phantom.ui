// tests
import Text from "../PhantomUI/Components/Text/Text";
import Title from "../PhantomUI/Components/Title/Title"
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Title textAlign="center" size="5rem">
        Welcome to
        <Text fontWeight="black" component="span" variant="gradient"> Phantom UI</Text>
      </Title>
      <Text textAlign="center" size="xl">
        This is the start of a new project, a minimalist UI, based on Mantine UI, this project will include several interface components, made with Styled-Components, for more, see my GitHub.
      </Text>
    </>
  )
}

export default Home;