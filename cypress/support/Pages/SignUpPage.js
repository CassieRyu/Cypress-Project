import * as action from '../Utils/Actions.js';
import * as data from '../Utils/Data.js';

export const enterFirstName = (value) => {
  const firstNameElem = 'input[id=firstName]';
  action.enterInputByElement(firstNameElem, value);
};

export const enterLastName = (value) => {
  const lastNameElem = 'input[id=lastName]';
  action.enterInputByElement(lastNameElem, value);
};

export const enterUserName = (value) => {
  const userNameElem = 'input[id=username]';
  action.enterInputByElement(userNameElem, value);
};

export const enterPassword = (value) => {
  const passwordElem = 'input[id=password]';
  action.enterInputByElement(passwordElem, value);
};

export const enterConfirmPassword = (value) => {
  const confirmPasswordElem = 'input[id=confirmPassword]';
  action.enterInputByElement(confirmPasswordElem, value);
};

export const clickSignUpBtn = () => {
  const signUpBtnElem = 'button[data-test=signup-submit]';
  action.hitBtnByElem(signUpBtnElem);
};
