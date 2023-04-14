import { ForwardRefRenderFunction, forwardRef } from "react";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

type InputProps = ChakraInputProps & {
    name: string; label?: string; error?: FieldError
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                bgColor="blue"
                variant="filled"
                size="lg"
                _hover={{ bgColor: "pink" }}
                ref={ref}
                {...rest}
            />
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)