const _ACTIONS = {
  ADD_REGISTER: 'ADD_REGISTER',
  ADD_REGISTER_SUCCESS: 'ADD_REGISTER_SUCCESS',
  ADD_REGISTER_FAIL: 'ADD_REGISTER_FAIL',
  LOAD_IMAGES: 'LOAD_IMAGES',
  LOAD_IMAGES_SUCCESS: 'LOAD_IMAGES_SUCCESS',
  LOAD_IMAGES_FAIL: 'LOAD_IMAGES_FAIL',
  LOAD_IMAGE_TAGS: 'LOAD_IMAGE_TAGS',
  LOAD_IMAGE_TAGS_SUCCESS: 'LOAD_IMAGE_TAGS_SUCCESS',
  LOAD_IMAGE_TAGS_FAIL: 'LOAD_IMAGE_TAGS_FAIL'
};

Object.keys(_ACTIONS).forEach((key) => {
  _ACTIONS[key] = 'images/' + _ACTIONS[key];
});
export const ACTIONS = _ACTIONS;
