import { ForwardRefRenderFunction, forwardRef } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  error?: FieldError;
};
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel color="white" htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        bgColor="blue.900"
        color="white"
        variant="filled"
        size="lg"
        _hover={{ bgColor: "blue.900" }}
        _focus={{ borderColor: "blue.100" }}
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
