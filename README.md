## Agora Md2Vue Loader


### 规范
1. 开发时切新分支，比如`hotfix/xxx`
2. 开发分支合到`master`
3. 从`master`切一个新分支`release-vx.x.x`
4. `npm version patch` or `npm version mirror` 作用是`打git tag`并且修改`package.json`中的版本
5. `git push origin release-vx.x.x`
6. `git push origin --tags`
7. `npm publish`