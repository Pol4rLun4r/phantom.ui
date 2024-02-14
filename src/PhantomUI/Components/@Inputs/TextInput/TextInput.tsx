// style
import { Container, Description, Input, InputWrapper, Label, LeftSection, RightSection } from "./style/TextInput";

// type
import type { PhantomStyledComponentsProps } from "../../../@Types/types";
import type { InputsProps } from "../../../@Types/props";

interface Props extends InputsProps, PhantomStyledComponentsProps { }

const TextInput = (props: Props) => {
    return (
        <Container>
            <Label size={props.size}>
                {props.label}
            </Label>
            <Description size={props.size}>
                {props.description}
            </Description>
            <InputWrapper description={props.description}>
                <LeftSection size={props.size} disabled={props.disabled}>
                    {props.leftSection}
                </LeftSection>
                <Input {...props} />
                <RightSection size={props.size} disabled={props.disabled}>
                    {props.rightSection}
                </RightSection>
            </InputWrapper>
        </Container>
    )
}

export default TextInput;