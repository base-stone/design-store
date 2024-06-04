pnpm add @base-stone/store
https://unpkg.com/@base-stone/store


## 常规项目代码目录

```
├── main.ts
    
```

## Store 使用
```
  import { localStore, sessionStore } from '@base-stone/store' 
  localStore.set("name", {age: 1}) //localStorage
  localStore.get("name")
  sessionStore.set("name", {age: 1}) //sessionStorage
  sessionStore.get("name")
```
