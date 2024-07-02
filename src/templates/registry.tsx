import { CreativeTemplate } from './creative/App';
import { Template } from './template';

export type TemplateId = 'landingPage' | 'creative';

export const templateRegistry = {
  landingPage: Template,
  creative: CreativeTemplate,
}