import { getIn, FieldProps } from 'formik';
import { FormHelperText, TextField, TextFieldProps, useTheme } from '@mui/material';

export const Input = ({
  field,
  form,
  inputRef,
  ...props
}: FieldProps & TextFieldProps) => {
  const { typography } = useTheme();
  const { name } = field;
  const { errors, touched } = form;
  const error = getIn(errors, name);
  const shouldRenderError = touched && !!error;

  const styles = {
    root: {
      width: '100%',
    },
    input: {
      fontSize: typography.fontSize,
    },
  }

  const InputProps = {
    ...props.InputProps,
    sx: { ...styles.input, ...props.InputProps?.sx }
  }
  return (
    <>
      <TextField
        variant='standard'
        {...field}
        {...props}
        sx={{ ...styles.root, ...props.sx }}
        InputProps={InputProps}
      />
      {shouldRenderError && (
        <FormHelperText error>{error}</FormHelperText>
      )}
    </>
  );
};
