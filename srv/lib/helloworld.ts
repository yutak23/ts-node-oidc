import { strict as assert } from 'assert';

const hello = (name: string): string => {
	assert.ok(name !== '', 'Name must not be empty');
	return `Hello, ${name}!`;
};
export default hello;
