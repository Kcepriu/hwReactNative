import { useEffect, useState } from 'react';

import { TextInput } from 'react-native';
import { styles } from './InputText.style';

const initialStyleInput = {
  borderColor: '#E8E8E8',
  backgroundColor: '#F6F6F6',
};

const focusStyleInput = {
  borderColor: '#FF6C00',
  backgroundColor: '#FFFFFF',
};

const InputText = ({ otherStyle, onFocusOther, ...props }) => {
  const [addStyleInput, setAddStyleInput] = useState(initialStyleInput);

  const onFocus = () => {
    setAddStyleInput(focusStyleInput);
    if (onFocusOther) onFocusOther();
  };

  const onBlur = () => {
    setAddStyleInput(initialStyleInput);
  };

  return (
    <TextInput
      {...props}
      style={{ ...styles.inputText, ...otherStyle, ...addStyleInput }}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default InputText;
