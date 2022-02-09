# NgrxSimpleDemo

簡易的NgRx使用範例，裡面刻意將畫面分割成不同的component，可以觀察不同的component如何觸發事件進而影響整體的state，並且在state改變後更新畫面上的資料。另外本範例安裝了R

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
