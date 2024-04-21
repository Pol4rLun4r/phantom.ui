// react router
import { Route } from "react-router-dom";

// pages
import GettingStarted from '../../pages/documentation/getting-started.mdx'
import Changelog from '../../pages/documentation/changelog.mdx'
import About from '../../pages/documentation/about.mdx'


const docRoutes = (
    <>
        <Route
            index={true}
            path="getting-started"
            element={<GettingStarted/>}
        />
        <Route
            path="about"
            element={<About/>}
        />
        <Route
            path="changelog"
            element={<Changelog/>}
        />
    </>
);

export default docRoutes;