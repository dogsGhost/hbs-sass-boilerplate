import fs from 'fs';

// require all gulp tasks
fs.readdirSync('./gulp/tasks/').forEach(task => {
  require(`./gulp/tasks/${task}`);
});
