import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../utils/supabase';
import MedicalHistory from '../../models/MedicalHistory/index';

const MedicalHistoryController = {
  async createMedicalHistory(req, res) {
    try {
      const { user_id, control_id, control_type, date, details } = req.body;
      const medicalHistory = await supabase
        .from('medical_history')
        .insert([
          {
            user_id,
            control_id,
            control_type,
            date,
            details,
          },
        ])
        .single();
      return res.status(201).json(medicalHistory);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear historial médico' });
    }
  },

  async getMedicalHistories(req, res) {
    try {
      const { user_id } = req.query;
      const medicalHistories = await supabase
        .from('medical_history')
        .select('*')
        .eq('user_id', user_id);
      return res.status(200).json(medicalHistories);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener historiales médicos' });
    }
  },

  async updateMedicalHistory(req, res) {
    try {
      const { id } = req.query;
      const { user_id, control_id, control_type, date, details } = req.body;
      const medicalHistory = await supabase
        .from('medical_history')
        .update([
          {
            user_id,
            control_id,
            control_type,
            date,
            details,
          },
        ])
        .eq('id', id)
        .single();
      return res.status(200).json(medicalHistory);
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar historial médico' });
    }
  },
};

export default MedicalHistoryController;
