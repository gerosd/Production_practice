import pool from '../config/db.js';

class UserController {
    async createUser(req, res) {
        const { username, password_hash, SNL, phone_number, email } = req.body;
        const newPerson = await pool.query(`INSERT INTO users (username, password_hash, "SNL", phone_number, email) values ($1, $2, $3, $4, $5) RETURNING *`,
            [username, password_hash, SNL, phone_number, email]);
        res.json(newPerson.rows[0]);
    }

    async getUsers(req, res) {
        const users = await pool.query(`SELECT * FROM users`);
        res.json(users.rows);
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const {id, username, password_hash, SNL, phone_number, email} = req.body;
        const user = await pool.query(`UPDATE users set username = $1, password_hash = $2, "SNL" = $3, phone_number = $4, email = $5 WHERE id = $6`,
            [username, password_hash, SNL, phone_number, email, id]);
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
        res.json(user.rows[0]);
    }
}

export default new UserController();