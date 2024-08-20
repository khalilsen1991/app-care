import axios from 'axios';

const createUser = async (req, res) => {
  try {
    const { name, email, password, age, sex, weight, height, previous_diseases, allergies } = req.body;
    const response = await axios.post('/api/users', {
      name,
      email,
      password,
      age,
      sex,
      weight,
      height,
      previous_diseases,
      allergies,
    });
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear usuario' });
  }
};

export default createUser;


routes/users/get.js

import axios from 'axios';

const getUsers = async (req, res) => {
  try {
    const response = await axios.get('/api/users');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

export default getUsers;


routes/users/update.js

import axios from 'axios';

const updateUser = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, email, password, age, sex, weight, height, previous_diseases, allergies } = req.body;
    const response = await axios.put(`/api/users/${id}`, {
      name,
      email,
      password,
      age,
      sex,
      weight,
      height,
      previous_diseases,
      allergies,
    });
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};

export default updateUser;

