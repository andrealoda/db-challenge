const connection = require('../data/db')

const socialController = {
  getSocialInfo: (req, res) => {
    res.send('Benvenuto nella rotta social!');
  },

  getUserDetails: (req, res) => {
    const userId = req.params.id;
    // Esempio di query SQL (da adattare alle tue esigenze)
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [userId], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  }
};

module.exports = socialController;