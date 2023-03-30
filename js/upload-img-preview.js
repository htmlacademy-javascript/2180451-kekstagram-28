import {imgPreview} from './slider.js';
import {imgUploadFile} from './upload-modal.js';
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

imgUploadFile.addEventListener('change', () => {
  const file = imgUploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});
