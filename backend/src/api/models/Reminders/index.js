import { createModel } from '@supabase/supabase-js';

const reminders = createModel('reminders', {
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
  reminder_type: {
    type: 'text',
  },
  message: {
    type: 'text',
  },
  reminder_date: {
    type: 'date',
  },
  reminder_time: {
    type: 'time',
  },
});

export default reminders;

