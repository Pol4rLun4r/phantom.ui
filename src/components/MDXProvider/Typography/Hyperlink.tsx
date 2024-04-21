// UI
import { Anchor } from "../../../PhantomUI/Components/@Navigation";

const Hyperlink = ({ children, ...props }: any) => {
    return (
        <Anchor fontSize="md" {...props} >{children}</Anchor>
    )
};

export default Hyperlink;