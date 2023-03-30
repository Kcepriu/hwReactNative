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
import { useDispatch } from 'react-redux';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

import { savePhotoInStorage } from '../../firebase/operation';
import { addPost } from '../../redux/posts/operation';
import useAuth from '../../hooks/useAuth';
import usePosts from '../../hooks/usePosts';
import { statusOperation } from '../../redux/posts/statusOperation';

import { IconLocation, IconCamera, IconTrash } from '../Icons/icons';

import { styles } from './EditPublication.style';

const EditPublication = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    user: { uid },
  } = useAuth();

  const { performedOperation } = usePosts();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [permissionCamera, requestPermissionCamera] =
    Camera.useCameraPermissions();

  const [permissionMedia, requestPermissionMedia] =
    MediaLibrary.usePermissions();

  const [permissionLocation, requestPermissionLocation] =
    Location.useBackgroundPermissions();
  // Location.useForegroundPermissions();

  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [isActive, setIsActive] = useState(false);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    setIsActive(!!photo && !!name && !!location);
    // setIsActive(photo || name || location);
  }, [photo, name, location]);

  // * Permission
  //Permission to camera
  useEffect(() => {
    if (permissionCamera?.granted) return;

    (async () => {
      const status = await Camera.requestCameraPermissionsAsync();
      requestPermissionCamera(status);
    })();
  });
  //Permission to files
  useEffect(() => {
    if (permissionMedia?.granted) return;

    (async () => {
      const status = await MediaLibrary.requestPermissionsAsync();
      requestPermissionMedia(status);
    })();
  });
  //Permission to Location
  useEffect(() => {
    if (permissionLocation?.granted) return;

    (async () => {
      // const status = await Location.requestForegroundPermissionsAsync();
      const status = await Location.getBackgroundPermissionsAsync();
      requestPermissionLocation(status);
    })();
  });

  useEffect(() => {
    if (performedOperation === statusOperation.addPostOK) {
      clearPost();

      navigation.navigate('DefaultPostsScreen');
    }
  }, [performedOperation]);
  // HANDLERS

  const handlerPublication = () => {
    if (!isActive) return;
    if (!permissionLocation?.granted) return;

    const sendPost = async () => {
      //Get location
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
        timeout: 5000,
      });

      const geoLocation = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };

      //Send photo to storage
      const urlPhoto = await savePhotoInStorage(photo);

      const newPost = {
        name,
        location,
        geoLocation,
        countComment: 0,
        countLikes: 0,
        urlPhoto,
        userId: uid,
      };

      dispatch(addPost(newPost));
    };

    sendPost();
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const takePhoto = async () => {
    if (photo) {
      setPhoto('');
      return;
    }

    const curentPhoto = await camera.takePictureAsync();
    setPhoto(curentPhoto.uri);
  };

  const handlerDeletePost = () => {
    clearPost();
    navigation.navigate({ name: 'DefaultPostsScreen', merge: true });
  };

  const clearPost = () => {
    //Clear local state
    setPhoto('');
    setName('');
    setLocation('');
  };

  return (
    // containerEditPublication
    <View style={styles.containerEditPublication}>
      <View>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View>
            {/* containerPhoto/ */}
            <View style={styles.containerPhoto}>
              {/* photo */}
              <View style={styles.photo}>
                {!photo ? (
                  <Camera style={styles.camera} ref={setCamera}></Camera>
                ) : (
                  <Image source={{ uri: photo }} style={styles.alreadyPhoto} />
                )}

                <TouchableOpacity style={styles.btnCamera} onPress={takePhoto}>
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
                </TouchableOpacity>
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
                placeholder="Местность..."
                placeholderTextColor="#BDBDBD"
                // onPressIn={() => console.log('location')}
                onChangeText={value => setLocation(value)}
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

      <View style={styles.tabBarDelete}>
        <TouchableOpacity
          style={styles.buttonDelete}
          accessibilityRole="button"
          onPress={handlerDeletePost}
        >
          <IconTrash fill="rgba(189, 189, 189, 1)" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditPublication;
