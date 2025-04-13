import { type SchemaTypeDefinition } from 'sanity';
import { product } from '../schema/product-schema';
import { login } from '../schema/login-schema';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, login],
};
