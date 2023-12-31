// tests
import Text from "../PhantomUI/Components/Text/Text";
import Title from "../PhantomUI/Components/Title/Title"
import Group from "../PhantomUI/Components/Layout/Group/Group";
import Button from "../PhantomUI/Components/Button/Button";

const Home = () => {
  return (
    <>
      <Title textAlign="center" size="5rem">
        Welcome to
        <Text fontWeight="black" component="span" variant="gradient"> Phantom UI</Text>
      </Title>
      <Text textAlign="center" size="xl">
        This is the start of a new project, a minimalist UI, based on Mantine UI, this project will include several interface components, made with Styled-Components, for more, see my GitHub.
      </Text>
      <Group>
        <Button>Button</Button>
        <Button variant="filled">Button</Button>
        <Button variant="light">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="transparent">Button</Button>
        <Button variant="white">Button</Button>
      </Group>
    </>
  )
}

export default Home;