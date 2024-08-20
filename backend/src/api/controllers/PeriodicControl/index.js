
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../utils/supabase';
import PeriodicControl from '../../models/PeriodicControl/index';

const PeriodicControlController = {
  async createPeriodicControl(req, res) {
    try {
      const { user_id, date, control_type, results } = req.body;
      const periodicControl = await supabase
        .from('periodic_controls')
        .insert([
          {
            user_id,
            date,
            control_type,
            results,
          },
        ])
        .single();
      return res.status(201).json(periodicControl);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear control periódico' });
    }
  },

  async getPeriodicControls(req, res) {
    try {
      const { user_id } = req.query;
      const periodicControls = await supabase
        .from('periodic_controls')
        .select('*')
        .eq('user_id', user_id);
      return res.status(200).json(periodicControls);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener controles periódicos' });
    }
  },

  async updatePeriodicControl(req, res) {
    try {
      const { id } = req.query;
      const { user_id, date, control_type, results } = req.body;
      const periodicControl = await supabase
        .from('periodic_controls')
        .update([
          {
            user_id,
            date,
            control_type,
            results,
          },
        ])
        .eq('id', id)
        .single();
      return res.status(200).json(periodicControl);
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar control periódico' });
    }
  },
};

export default PeriodicControlController;
