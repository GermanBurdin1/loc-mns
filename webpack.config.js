const path = require('path');

module.exports = {
  // Точка входа в ваше приложение
  entry: './src/index.js', // Путь к основному JS файлу

  // Конфигурация для модулей
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Вы можете добавить другие правила для других типов файлов здесь
    ],
  },

  // Конфигурация выходных файлов (output)
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к папке сборки
    filename: 'bundle.js', // Имя собранного JS файла
  },

  // Дополнительные опции, такие как Source Maps
  devtool: 'inline-source-map',

  // Настройки для DevServer (если вы используете его для разработки)
  devServer: {
    static: './dist', // Папка откуда сервер будет раздавать файлы
    open: true, // Автоматически открывать браузер
    hot: true // Включить горячую перезагрузку модулей
  }
};
