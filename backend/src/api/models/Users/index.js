import { createModel } from '@supabase/supabase-js';

const users = createModel('users', {
  id: {
    type: 'bigint',
    primaryKey: true,
    generated: 'always',
    identity: true,
  },
  name: {
    type: 'text',
    notNull: true,
  },
  email: {
    type: 'text',
    unique: true,
    notNull: true,
  },
  password: {
    type: 'text',
    notNull: true,
  },
  age: {
    type: 'int',
  },
  sex: {
    type: 'text',
  },
  weight: {
    type: 'float',
  },
  height: {
    type: 'float',
  },
  previous_diseases: {
    type: 'text',
  },
  allergies: {
    type: 'text',
  },
});

export default users;
