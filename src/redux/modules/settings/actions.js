const _ACTIONS = {
  GET_SETTINGS: 'GET_SETTINGS',
  GET_SETTINGS_SUCCESS: 'GET_SETTINGS_SUCCESS',
  GET_SETTINGS_FAIL: 'GET_SETTINGS_FAIL',
  SET_SETTINGS: 'SET_SETTINGS',
  SET_SETTINGS_SUCCESS: 'SET_SETTINGS_SUCCESS',
  SET_SETTINGS_FAIL: 'SET_SETTINGS_FAIL'
};

Object.keys(_ACTIONS).forEach((key) => {
  _ACTIONS[key] = 'settings/' + _ACTIONS[key];
});
export const ACTIONS = _ACTIONS;