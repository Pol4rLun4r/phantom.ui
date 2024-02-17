// style
import { Asterisk, Container, Description, Input, InputWrapper, Label, LeftSection, RightSection } from "./style/TextInput";

// type
import type { PhantomHTMLInputElement } from "../../../@Types/types";
import type { InputsProps } from "../../../@Types/props";

interface Props extends InputsProps, PhantomHTMLInputElement { }

const TextInput = ({value, onChange, placeholder, radius, accept, alt, autoComplete, capture, checked, defaultChecked, defaultValue, dir, form, formAction, formEncType, formMethod, formNoValidate, formTarget, max, min, maxLength, minLength, multiple, name, pattern, readOnly, required, step, ...props}: Props) => {
    const InputProps = {
        value, onChange, placeholder, radius, accept, alt, autoComplete, capture, checked, defaultChecked, defaultValue, dir, form, formAction, formEncType, formMethod, formNoValidate, formTarget, max, min, maxLength, minLength, multiple, name, pattern, readOnly, required, step
    }

    return (
        <Container {...props}>
            <Label>
                {props.label}
                {props.withAsterisk && (
                    <Asterisk> *</Asterisk>
                )}
            </Label>
            <Description>
                {props.description}
            </Description>
            <InputWrapper>
                {props.leftSection && (
                    <LeftSection>
                        {props.leftSection}
                    </LeftSection>
                )}
                <Input {...InputProps}/>
                {props.rightSection && (
                    <RightSection>
                        {props.rightSection}
                    </RightSection>
                )}
            </InputWrapper>
        </Container>
    )
}

export default TextInput;