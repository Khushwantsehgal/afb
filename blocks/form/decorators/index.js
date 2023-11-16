import { applyRuleEngine } from '../rules/index.js';
import { transformCaptchaDOM, transformCaptchaRequest } from './recaptcha.js';
// eslint-disable-next-line import/no-cycle
import repeatableFieldset from './repeat.js';
import wizardLayout from './wizard.js';

export const transformers = [
  transformCaptchaDOM,
  applyRuleEngine,
  repeatableFieldset,
  wizardLayout,
];

export const asyncTransformers = [
];

export const requestTransformers = [
  transformCaptchaRequest,
];
