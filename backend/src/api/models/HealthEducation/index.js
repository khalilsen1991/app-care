import { createModel } from '@supabase/supabase-js';

const healthEducation = createModel('health_education', {
  id: {
    type: 'bigint',
    primaryKey: true,
    generated: 'always',
    identity: true,
  },
  title: {
    type: 'text',
    notNull: true,
  },
  content: {
    type: 'text',
    notNull: true,
  },
  content_type: {
    type: 'text',
  },
});

export default healthEducation;
