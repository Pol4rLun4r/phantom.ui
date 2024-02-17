import { useState } from "react";

// UI
import { TextInput } from "../../../../PhantomUI/Components/@Inputs"
import { Button } from "../../../../PhantomUI/Components/@Buttons";

// Icons
import { IconAt, IconLockAccess } from "@tabler/icons-react";
import { Stack } from "../../../../PhantomUI/Components/@Layout";

const FormTest = () => {
    const iconMail = <IconAt style={{ width: '1rem', height: '1rem' }} />
    const iconPass = <IconLockAccess style={{ width: '1rem', height: '1rem' }} />

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`data: \n email: ${email} \n password: ${password}`);
    }

    return (
        <form onSubmit={(e) => handleForm(e)}>
            <Stack>
                <TextInput
                    label="Your Email"
                    name="email"
                    placeholder="write your email here"
                    leftSection={iconMail}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <TextInput
                    label="Password"
                    name="password"
                    placeholder="write your password here"
                    leftSection={iconPass}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <Button marginTop="0.3rem" variant="filled" type="submit">submit</Button>
            </Stack>
        </form>
    )
}

export default FormTest