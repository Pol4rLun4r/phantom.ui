import { Heading, Paragraph, Hyperlink} from "./Typography";

const MDXConfig = {
    // Headings
    h1: Heading,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    h5: Heading.H5,
    h6: Heading.H6,
    //Text
    p: Paragraph,
    // Link
    a: Hyperlink,

}

export default MDXConfig;