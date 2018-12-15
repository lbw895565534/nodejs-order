var UserSQL = {
  insertUser: 'INSERT INTO User(id,name,password) VALUES(?,?,?)',
  insertMeal: 'INSERT INTO Meal(uid,date,breakfast,lunch,dinner,nightsnack) VALUES(?,?,?,?,?,?)',
  queryAll: 'SELECT * FROM User',
  findUser: 'SELECT * FROM User WHERE username = ? And password = ? ',
  setPassword: 'UPDATE User SET password = ? WHERE username = ?',
getUsers: 'SELECT name,username,section FROM User ORDER BY section',
  findRecordById: 'SELECT * FROM Meal WHERE uid = ? ',
  findRecordByDateId: 'SELECT * FROM Meal WHERE uid = ? And date = ?',
  findRecordByDate: 'SELECT * FROM Meal WHERE date = ?',
  findBreakfastByDate: 'SELECT u.name FROM User u  JOIN Meal m ON u.id = m.uid WHERE m.breakfast = 1 AND date = ? ; ',
  findLunchByDate: 'SELECT name FROM User u JOIN Meal m ON u.id = m.uid WHERE m.lunch = 1 AND date = ? ; ',
  findDinnerByDate: 'SELECT u.name FROM User u JOIN Meal m ON u.id = m.uid WHERE m.dinner = 1 AND date = ? ; ',
  alterMeal: 'UPDATE Meal SET breakfast = ?,lunch = ?, dinner = ?, nightsnack = ? WHERE uid = ? And date = ? '
};
module.exports = UserSQL;