import {imgPreview} from './slider.js';
import {imgUploadFile} from './upload-modal.js';
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileReader = new FileReader();

export const loadPreview = () => {
  const file = imgUploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    fileReader.readAsDataURL(file);
  }
};

fileReader.onload = (evt) => {
  imgPreview.src = evt.target.result;
};
