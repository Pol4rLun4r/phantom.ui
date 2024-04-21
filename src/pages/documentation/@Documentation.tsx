import { Fragment } from "react"

// UI
import { Stack } from "../../PhantomUI/Components/@Layout"

// style
import Main from "../../components/documentation/style/Main"

//MDXProvider
import { MDXProvider } from "@mdx-js/react"
import MDXConfig from "../../components/MDXProvider/MDXConfig"

// component
import NavBar from "../../components/navBar/NavBar"

// react Router
import { Outlet } from "react-router-dom"
import Section from "../../components/documentation/style/Section"

const Documentation = () => {
  return (
    <Fragment>
      <NavBar />
      <Main>
        <Section>
          <Stack maxWidth={"51.25rem"} width={"100%"} height={"100%"} marginTop={"2rem"} justify="flex-start">
            <MDXProvider components={MDXConfig}>
              <Outlet />
            </MDXProvider>
          </Stack>
        </Section>
      </Main>
    </Fragment>
  )
}

export default Documentation