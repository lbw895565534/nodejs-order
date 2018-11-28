var UserSQL = {  
  insertUser:'INSERT INTO User(id,name,password) VALUES(?,?,?)',
  insertMeal:'INSERT INTO Meal(uid,date,breakfast,lunch,dinner,nightsnack) VALUES(?,?,?,?,?,?)',
  queryAll:'SELECT * FROM User',  
  findUser:'SELECT * FROM User WHERE username = ? And password = ? ',
  findRecordById:'SELECT * FROM Meal WHERE uid = ? ',
  findRecordByDateId:'SELECT * FROM Meal WHERE uid = ? And date = ?',
  findRecordByDate:'SELECT * FROM Meal WHERE date = ?',
  findBreakfastByDate: 'SELECT COUNT(*) As B FROM Meal WHERE breakfast = 1 AND DATE = ?;',
  findLunchByDate: 'SELECT COUNT(*) As L FROM Meal WHERE lunch = 1 AND DATE = ?;',
  findDinnerByDate: 'SELECT COUNT(*) As D FROM Meal WHERE dinner = 1 AND DATE = ?;',
  alterMeal: 'UPDATE Meal SET breakfast = ?,lunch = ?, dinner = ?, nightsnack = ? WHERE uid = ? And date = ?'
};
module.exports = UserSQL;