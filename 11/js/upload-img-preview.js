import {imgPreview} from './slider.js';
import {imgUploadFile} from './upload-modal.js';
const fileReader = new FileReader();

fileReader.onload = (evt) => {
  imgPreview.src = evt.target.result;
};

export const loadPreview = () => {
  const file = imgUploadFile.files[0];
  fileReader.readAsDataURL(file);
};
