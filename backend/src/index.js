const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const supabaseUrl = 'https://euqeyimyzyagzyvsbprb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cWV5aW15enlhZ3p5dnNicHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1OTI0NjIsImV4cCI6MjAzOTE2ODQ2Mn0.2cOs_MBcGfuQpse3I83yO7IqvGoQXmRlQOnhdeC7ncs';
const supabaseSecret = 'xOkzCD3QUj0MjFAvveQp2ZdrMFTlTwJUstL6oExD8/OfdpAVCqIvs3/Ob4wneKTWKxwTS+T1vPFIChlk6eyXaA==';

const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);

app.use(express.json());

// Rutas de la API
app.get('/api/data', async (req, res) => {
  const { data, error } = await supabase
    .from('tu-tabla')
    .select('*');
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.json(data);
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
