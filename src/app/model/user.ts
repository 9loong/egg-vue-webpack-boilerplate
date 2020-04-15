module.exports = class User {
  id;
  name;
  password;
  roleId;
  
  constructor() {
    this.id = null;
    this.name = null;
    this.password = null;
    this.roleId = null;
  }
};