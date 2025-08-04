/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js", // Path to your schema file
    dialect: "postgresql", // Specify the database dialect
    dbCredentials: {
      url: "postgresql://neondb_owner:9QfLRBh3iprP@ep-blue-fog-a89j5ona.eastus2.azure.neon.tech/AI-interview-mocker?sslmode=require",
    },
  };
  