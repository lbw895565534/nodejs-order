var UserSQL = {  
  insertUser:'INSERT INTO User(id,name,password) VALUES(?,?,?)',
  insertMeal:'INSERT INTO Meal(uid,date,breakfast,lunch,dinner,nightsnack) VALUES(?,?,?,?,?,?)',
  queryAll:'SELECT * FROM User',  
  findUser:'SELECT * FROM User WHERE username = ? And password = ? ',
  findRecordById:'SELECT * FROM Meal WHERE uid = ? ',
  findRecordByDate:'SELECT * FROM Meal WHERE uid = ? And date = ?',
  alterMeal: 'UPDATE Meal SET breakfast = ?,lunch = ?, dinner = ?, nightsnack = ? WHERE uid = ? And date = ?'
};
module.exports = UserSQL;