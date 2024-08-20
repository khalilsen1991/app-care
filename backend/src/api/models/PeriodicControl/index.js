import { createModel } from '@supabase/supabase-js';

const periodicControls = createModel('periodic_controls', {
  id: {
    type: 'bigint',
    primaryKey: true,
    generated: 'always',
    identity: true,
  },
  user_id: {
    type: 'bigint',
    references: {
      table: 'users',
      column: 'id',
    },
  },
  date: {
    type: 'date',
    notNull: true,
  },
  control_type: {
    type: 'text',
  },
  results: {
    type: 'text',
  },
});

export default periodicControls;
