const connection = require('../app/database')

class FileService {
  async createAvatar(filename, mimetype, size, user_id) {
    const statement = `INSERT INTO avatar (filename,mimetype,size,user_id) VALUES (?,?,?,?);`
    const [result] = await connection.execute(statement, [filename, mimetype, size, user_id])
    return result
  }

  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?`
    const [result] = await connection.execute(statement, [userId])
    return result[0]
  }

  async createFile(filename, mimetype, size, user_id, momentId) {
    const statement = `INSERT INTO file (filename,mimetype,size,user_id,moment_id) VALUES (?,?,?,?,?);`
    const [result] = await connection.execute(statement, [filename, mimetype, size, user_id, momentId])
    return result
  }

  async getCommentsByMomentId(commentId) {
    const statement = `SELECT
	m.id,m.content,m.comment_id commentId,m.createAt createTime,JSON_OBJECT("id",u.id,"name",u.name) user
FROM comment m LEFT JOIN users u ON u.id = m.user_id 
WHERE
	moment_id = ?`
    const [result] = await connection.execute(statement, [commentId])
    return result
  }

  async getFileByFilename(filename) {
    const statement = `SELECT * FROM file WHERE filename = ?`
    const [result] = await connection.execute(statement, [filename])
    return result[0]
  }
}

module.exports = new FileService()