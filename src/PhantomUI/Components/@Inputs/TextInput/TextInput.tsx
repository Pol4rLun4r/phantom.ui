// style
import { Asterisk, Container, Description, Input, InputWrapper, Label, LeftSection, RightSection } from "./style/TextInput";

// type
import type { PhantomHTMLInputElement } from "../../../@Types/types";
import type { InputsProps } from "../../../@Types/props";

interface Props extends InputsProps, PhantomHTMLInputElement { }

const TextInput = (props: Props) => {
    return (
        <Container variant={props.variant} disabled={props.disabled} error={props.error} >
            <Label size={props.size}>
                {props.label}
                {props.withAsterisk && (
                    <Asterisk> *</Asterisk>
                )}
            </Label>
            <Description size={props.size}>
                {props.description}
            </Description>
            <InputWrapper description={props.description}>
                {props.leftSection && (
                    <LeftSection size={props.size} disabled={props.disabled} error={props.error}>
                        {props.leftSection}
                    </LeftSection>
                )}
                <Input {...props}/>
                {props.rightSection && (
                    <RightSection size={props.size} disabled={props.disabled} error={props.error}>
                        {props.rightSection}
                    </RightSection>
                )}
            </InputWrapper>
        </Container>
    )
}

export default TextInput;