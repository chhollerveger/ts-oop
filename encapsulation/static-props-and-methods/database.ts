class Database {

  static LOCAL = "127.0.0.1";
  static MYSQL = "MySQL";
  static SQLSERVER = "SQL Server";

  constructor(
    private ip: string,
    private user: string,
    private password: string,
    private type: string
  ) { }

  static factory(params: IDatabase) {

    if (![Database.MYSQL, Database.SQLSERVER].includes(params.type)) {
      throw new Error("Incorrect database type!");
    }

    return new Database(
      params.ip,
      params.user,
      params.password,
      params.type
    );
  }
}