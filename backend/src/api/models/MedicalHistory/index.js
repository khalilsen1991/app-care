import { createModel } from '@supabase/supabase-js';

const medicalHistory = createModel('medical_history', {
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
  control_id: {
    type: 'bigint',
  },
  control_type: {
    type: 'text',
  },
  date: {
    type: 'date',
    notNull: true,
  },
  details: {
    type: 'text',
  },
});

export default medicalHistory;
