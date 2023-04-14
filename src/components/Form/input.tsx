import { ForwardRefRenderFunction, forwardRef } from "react";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from '@chakra-ui/react';

type InputProps = ChakraInputProps & {
    name: string; label?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
    return (
        <FormControl>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput 
                id={name}
                name={name}
                bgColor="blue"
                variant="filled"
                size="lg"
                _hover={{bgColor: "pink"}}
                ref={ref}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)