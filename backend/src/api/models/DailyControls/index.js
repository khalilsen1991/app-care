import { createModel } from '@supabase/supabase-js';

const dailyControls = createModel('daily_controls', {
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
  blood_pressure: {
    type: 'text',
  },
  temperature: {
    type: 'float',
  },
  pulse: {
    type: 'int',
  },
  medications: {
    type: 'text',
  },
  observations: {
    type: 'text',
  },
});

export default dailyControls;
