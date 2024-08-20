import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../utils/supabase';
import Reminder from '../../models/Reminder/index';

const ReminderController = {
  async createReminder(req, res) {
    try {
      const { user_id, reminder_type, message, reminder_date, reminder_time } = req.body;
      const reminder = await supabase
        .from('reminders')
        .insert([
          {
            user_id,
            reminder_type,
            message,
            reminder_date,
            reminder_time,
          },
        ])
        .single();
      return res.status(201).json(reminder);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear recordatorio' });
    }
  },

  async getReminders(req, res) {
    try {
      const { user_id } = req.query;
      const reminders = await supabase
        .from('reminders')
        .select('*')
        .eq('user_id', user_id);
      return res.status(200).json(reminders);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener recordatorios' });
    }
  },

  async updateReminder(req, res) {
    try {
      const { id } = req.query;
      const { user_id, reminder_type, message, reminder_date, reminder_time } = req.body;
      const reminder = await supabase
        .from('reminders')
        .update([
          {
            user_id,
            reminder_type,
            message,
            reminder_date,
            reminder_time,
          },
        ])
        .eq('id', id)
        .single();
      return res.status(200).json(reminder);
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar recordatorio' });
    }
  },
};

export default ReminderController;
