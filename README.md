#GT_test

<h1>開源_零汙染 地標顯示Demo</h1>
目前 firebase 上有的資料。<br>

<h4>Database Name</h4>
[x] City_repair_station<br>
[x] Free_store<br>
[x] Not_plastic<br>
[x] No-discovery<br>
[x] Lron_box_lunch<br>
[x] Green_Island_Water_Station<br>
[ ] GoodDay_without_shopping<br>
[ ] Say_no_to_plastics<br>
[ ] Ubag_partner<br>
[ ] Symbiotic_map<br>
[ ] Old_bookstore_map<br>
[ ] Plastic_map<br>
[ ] Zero_abandoned_life<br>

Install to HTML
```html
  <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-database.js"></script>
  <script src="http://127.0.0.1/openPointData.js"></script>
```
Map 預覽請使用 OSM Leaflet
請ID 命名為"map"


```javascript
1.getData(name);//輸入資料庫中對應Name,會為你自動標示在Leaflet地圖中
2.Clear();//初始化 所有的點
```

未完成功能<br>
[ ] 顯示地址與名稱<br>
