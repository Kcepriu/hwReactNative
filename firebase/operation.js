import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { customAlphabet } from 'nanoid/non-secure';
import { storage } from './config';

export const savePhotoInStorage = async photo => {
  const response = await fetch(photo);
  const fileBlob = await response.blob();

  const idPhoto = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)();
  ref(storage, 'images');
  const spaceRef = ref(storage, `images/${idPhoto}_photo.jpg`);

  const metadata = {
    contentType: 'image/jpeg',
  };

  await uploadBytes(spaceRef, fileBlob, metadata);

  const urlPhoto = await getDownloadURL(
    ref(storage, `images/${idPhoto}_photo.jpg`)
  );

  return urlPhoto;
};
