import sql from "mssql";

export function getDbConfig(): sql.config {
  const url = process.env.DATABASE_URL || "";

  const hostMatch = url.match(/sqlserver:\/\/([^:]+):(\d+)/);
  const params: Record<string, string> = {};
  url.split(";").forEach((part) => {
    const [key, ...vals] = part.split("=");
    if (key && vals.length) params[key.trim().toLowerCase()] = vals.join("=");
  });

  return {
    server: hostMatch?.[1] || "",
    port: parseInt(hostMatch?.[2] || "1433"),
    database: params["database"] || params["initial catalog"] || "",
    user: params["user"] || "",
    password: params["password"] || "",
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  };
}
