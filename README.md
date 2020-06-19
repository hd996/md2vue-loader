## Agora Md2Vue Loader

## 使用
```bash
// webpack.config.js
{
  test: /\.md$/,
  loader: [
    {
      loader: 'vue-loader'
    },
    {
      loader: 'agora-md2vue-loader',
      options: {
        template: path.resolve(__dirname, '../examples/default.tpl')
      }
    }
  ],
  include: [path.resolve(__dirname, '../examples/views/component')],
},
```