import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../utils/supabase';
import User from '../../models/Users/index';

const UserController = {
  async createUser(req, res) {
    try {
      const { name, email, password, age, sex, weight, height, previous_diseases, allergies } = req.body;
      const user = await supabase
        .from('users')
        .insert([
          {
            name,
            email,
            password,
            age,
            sex,
            weight,
            height,
            previous_diseases,
            allergies,
          },
        ])
        .single();
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear usuario' });
    }
  },

  async getUsers(req, res) {
    try {
      const users = await supabase.from('users').select('*');
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener usuarios' });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.query;
      const { name, email, password, age, sex, weight, height, previous_diseases, allergies } = req.body;
      const user = await supabase
        .from('users')
        .update([
          {
            name,
            email,
            password,
            age,
            sex,
            weight,
            height,
            previous_diseases,
            allergies,
          },
        ])
        .eq('id', id)
        .single();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar usuario' });
    }
  },
};

export default UserController;
