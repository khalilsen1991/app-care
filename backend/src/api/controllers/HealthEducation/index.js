import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../utils/supabase';
import HealthEducation from '../../models/HealthEducation/index';

const HealthEducationController = {
  async createHealthEducation(req, res) {
    try {
      const { title, content, content_type } = req.body;
      const healthEducation = await supabase
        .from('health_education')
        .insert([
          {
            title,
            content,
            content_type,
          },
        ])
        .single();
      return res.status(201).json(healthEducation);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear educación para la salud' });
    }
  },

  async getHealthEducations(req, res) {
    try {
      const healthEducations = await supabase
        .from('health_education')
        .select('*');
      return res.status(200).json(healthEducations);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener educaciones para la salud' });
    }
  },

  async updateHealthEducation(req, res) {
    try {
      const { id } = req.query;
      const { title, content, content_type } = req.body;
      const healthEducation = await supabase
        .from('health_education')
        .update([
          {
            title,
            content,
            content_type,
          },
        ])
        .eq('id', id)
        .single();
      return res.status(200).json(healthEducation);
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar educación para la salud' });
    }
  },
};

export default HealthEducationController;
