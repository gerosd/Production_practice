import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

class UserController {
    async createUser(req, res) {
        const { username, password_hash, SNL, phone_number, email } = req.body;
        const hashedPassword = await bcrypt.hash(password_hash, 10);
        const newPerson = await pool.query(`INSERT INTO users (username, password_hash, "SNL", phone_number, email) values ($1, $2, $3, $4, $5) RETURNING *`,
            [username, hashedPassword, SNL, phone_number, email]);
        res.json(newPerson.rows[0]);
    }

    async loginUser(req, res) {
        const { username, password } = req.body;

        try {
            const user = await pool.query(`SELECT * FROM users WHERE username = $1`, [username]);

            if (user.rows.length === 0) {
                return res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
            }

            const foundUser = user.rows[0];

            const isPasswordValid = await bcrypt.compare(password, foundUser.password_hash);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Неверное имя пользователя или пароль' })
            }

            const token = jwt.sign({ userId: foundUser.id }, process.env.JWT_SECRET, { expiresIn: '7d'});

            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 604800000,
            });

            const { password_hash, ...userData } = foundUser; // Теперь конфликта нет
            res.json(userData);

        } catch (error) {
            console.error('Ошибка входа: ', error);
            res.status(500).json({ message: 'Ошибка сервера при попытке входа' })
        }
    }

    async getUsers(req, res) {
        const users = await pool.query(`SELECT * FROM users`);
        res.json(users.rows);
    }

    async getCurrentUser(req, res) {
        const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [req.userId]);
        res.json(user.rows[0]);
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