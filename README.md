# NgrxSimpleDemo

簡易的NgRx使用範例，裡面刻意將畫面分割成不同的component，可以觀察不同的component如何觸發事件進而影響整體的state，並且在state改變後更新畫面上的資料。

另外本範例Devtool套件，因此可在Chrome瀏覽器上使用擴充功能查看State的狀態及變化。

## Setup

安裝@ngrx/store的套件

```
npm install @ngrx/store --save
```
在app.module中加入StoreModule，像這樣
```
  imports: [
    ...,
    StoreModule.forRoot(reducers)
  ],
```

## Devtool

安裝devtool套件
```
npm install @ngrx/store-devtools --save
```
在app.module中加入StoreDevtoolsModule，像這樣
```
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10  //最大要紀錄的state數
    })
  ]
```

安裝Chrome的瀏覽器套件--**Redux DevTools**


## File Structure
```
📦app
 ┣ 📂layout
 ┃ ┗ 📂navbar // 上方導覽列
 ┃ ┃ ┣ 📜navbar.component.css
 ┃ ┃ ┣ 📜navbar.component.html
 ┃ ┃ ┣ 📜navbar.component.spec.ts
 ┃ ┃ ┗ 📜navbar.component.ts
 ┣ 📂post  // Post 模組
 ┃ ┣ 📜post.actions.ts
 ┃ ┣ 📜post.component.css
 ┃ ┣ 📜post.component.html
 ┃ ┣ 📜post.component.spec.ts
 ┃ ┣ 📜post.component.ts
 ┃ ┣ 📜post.model.ts
 ┃ ┗ 📜post.reducer.ts
 ┣ 📂ui
 ┃ ┗ 📂card
 ┃ ┃ ┣ 📜card.component.css
 ┃ ┃ ┣ 📜card.component.html
 ┃ ┃ ┣ 📜card.component.spec.ts
 ┃ ┃ ┗ 📜card.component.ts
 ┣ 📜app-routing.module.ts
 ┣ 📜app.component.css
 ┣ 📜app.component.html
 ┣ 📜app.component.spec.ts
 ┣ 📜app.component.ts
 ┣ 📜app.module.ts
 ┣ 📜app.reducer.ts
 ┗ 📜simple.reducer.ts
```
