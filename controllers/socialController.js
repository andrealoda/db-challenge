const connection = require('../data/db')

const socialController = {
    getSocialInfo: (req, res) => {
        res.send('Benvenuto nella rotta social!');
    },


    getAllUsers: (req, res) => {
        const query = 'SELECT * FROM users';
        connection.query(query, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    },

    getUserDetails: (req, res) => {
        const userId = req.params.id;
        // Esempio di query SQL (da adattare alle tue esigenze)
        const query = 'SELECT * FROM users WHERE id = ?';
        connection.query(query, [userId], (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    },

    getAllPosts: (req, res) => {
        const query = 'SELECT * FROM posts';
        connection.query(query, (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    }
};



module.exports = socialController;