// UI
import { Title } from "../../../PhantomUI/Components/@Typography";

const Heading = ({ children }: any) => {
    return (
        <Title fontWeight={"black"} fontSize="2.5rem" textTransform="capitalize">{children}</Title>
    )
};
const H2 = ({ children }: any) => {
    return (
        <Title fontWeight={"black"} fontSize="2rem" textTransform="capitalize">{children}</Title>
    )
};
const H3 = ({ children }: any) => {
    return (
        <Title fontWeight={"black"} fontSize="1.625rem" textTransform="capitalize">{children}</Title>
    )
};
const H4 = ({ children }: any) => {
    return (
        <Title fontWeight={"black"} fontSize="1.375rem" textTransform="capitalize">{children}</Title>
    )
};
const H5 = ({ children }: any) => {
    return (
        <Title fontWeight={"black"} fontSize="1rem" textTransform="capitalize">{children}</Title>
    )
};
const H6 = ({ children }: any) => {
    return (
        <Title fontWeight={"black"} fontSize="0.875rem" textTransform="capitalize">{children}</Title>
    )
};

Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;

export default Heading;