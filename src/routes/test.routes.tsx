// react router
import { Route } from "react-router-dom";

// pages
import Starting from "../pages/@testRoutes/Starting";

const testRoutes = (
    <>
        <Route
            path="1"
            element={<Starting />}
        />
        <Route
            path="2"
            element={<Starting />}
        />
        <Route
            path="3"
            element={<Starting />}
        />
        <Route
            path="203"
            element={<Starting />}
        />
    </>
);

export default testRoutes;