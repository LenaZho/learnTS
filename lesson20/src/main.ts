import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { CustomWorld } from './support/world';

setDefaultTimeout(60000);
setWorldConstructor(CustomWorld);
