import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../utils/supabase';
import DailyControl from '../../models/DailyControls/index';

const DailyControlController = {
  async createDailyControl(req, res) {
    try {
      const { user_id, date, blood_pressure, temperature, pulse, medications, observations } = req.body;
      const dailyControl = await supabase
        .from('daily_controls')
        .insert([
          {
            user_id,
            date,
            blood_pressure,
            temperature,
            pulse,
            medications,
            observations,
          },
        ])
        .single();
      return res.status(201).json(dailyControl);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear control diario' });
    }
  },

  async getDailyControls(req, res) {
    try {
      const { user_id } = req.query;
      const dailyControls = await supabase
        .from('daily_controls')
        .select('*')
        .eq('user_id', user_id);
      return res.status(200).json(dailyControls);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener controles diarios' });
    }
  },

  async updateDailyControl(req, res) {
    try {
      const { id } = req.query;
      const { user_id, date, blood_pressure, temperature, pulse, medications, observations } = req.body;
      const dailyControl = await supabase
        .from('daily_controls')
        .update([
          {
            user_id,
            date,
            blood_pressure,
            temperature,
            pulse,
            medications,
            observations,
          },
        ])
        .eq('id', id)
        .single();
      return res.status(200).json(dailyControl);
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar control diario' });
    }
  },
};

export default DailyControlController;
