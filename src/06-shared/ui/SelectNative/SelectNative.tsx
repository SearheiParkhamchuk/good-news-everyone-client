import { NativeSelect } from '@mantine/core'

import { type SelectNativeProps } from './types'

function SelectNative({ data, value, disabled, onChange, error, label, required, ...rest }: SelectNativeProps) {
  return (
    <NativeSelect
      {...rest}
      data={data}
      disabled={disabled}
      error={error}
      label={label}
      required={required}
      value={value}
      onChange={onChange}
    />
  )
}

export default SelectNative
