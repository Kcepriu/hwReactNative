import { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';

import { IconLocation, IconCamera } from '../Icons/icons';

import { styles } from './EditPublication.style';

const EditPublication = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [photo, setPhoto] = useState();
  const [name, setName] = useState('');
  const [location, setLocation] = useState();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // setIsActive(photo && name && location);
    setIsActive(photo || name || location);
  }, [photo, name, location]);

  const handlerPublication = () => {
    console.log('Publication');
  };

  const keyboardHide = () => {
    console.log('keyboardHide');

    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    // containerEditPublication
    <View style={styles.containerEditPublication}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View>
          {/* containerPhoto/ */}
          <View style={styles.containerPhoto}>
            {/* photo */}
            <View style={styles.photo}>
              <View
                style={{
                  ...styles.containerCamera,
                  backgroundColor: !photo
                    ? '#FFFFFF'
                    : 'rgba(255, 255, 255, 0.3)',
                }}
              >
                <IconCamera fill={!photo ? '#BDBDBD' : '#FFFFFF'} />
              </View>
            </View>
            <Text style={styles.textUnderPhoto}>
              {!photo ? 'Загрузите фото' : 'Редактировать фото'}
            </Text>
          </View>

          {/* Input name */}
          <TextInput
            style={styles.input}
            textAlign="left"
            value={name}
            placeholder="Название..."
            placeholderTextColor="#BDBDBD"
            onChangeText={value => setName(value)}
          />

          {/* Input location */}
          <View style={{ position: 'relative' }}>
            <TextInput
              style={{ ...styles.input, ...styles.inputLocation }}
              textAlign="left"
              value={location}
              // inputMode="none"
              readOnly
              placeholder="Местность..."
              placeholderTextColor="#BDBDBD"
              onPressIn={() => console.log('location')}
              // onChangeText={value => setName(value)}
            />
            <IconLocation style={styles.iconLocation} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        style={{
          ...styles.btnPublication,
          backgroundColor: isActive ? '#FF6C00' : '#F6F6F6',
        }}
        activeOpacity={0.8}
        onPress={handlerPublication}
      >
        <Text
          style={{
            ...styles.btnTitle,
            color: isActive ? '#FFFFFF' : '#BDBDBD',
          }}
        >
          Опубликовать
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPublication;
