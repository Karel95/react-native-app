// https://docs.expo.dev/guides/using-eslint/

module.exports = {
  parser: "@typescript-eslint/parser", // Asegúrate de tener este parser si usas TypeScript
  extends: [
    "expo", // Reglas de Expo
    "plugin:@typescript-eslint/recommended", // Reglas recomendadas para TypeScript
    "prettier", // Asegúrate de que Prettier maneje las reglas de formato
  ],
  plugins: ["prettier", "@typescript-eslint"], // Incluye TypeScript como plugin
  rules: {
    "prettier/prettier": "error", // Para manejar los errores de Prettier
    "@typescript-eslint/no-explicit-any": "off", // Permitir el uso de `any`
    // Agrega otras reglas que desees modificar
  },
};
