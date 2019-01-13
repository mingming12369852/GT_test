#GT_test

<h1>開源_零汙染 地標顯示Demo</h1>
<tr>
  
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

<tr>
<h4>How to Install</h4> <br>

    <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase-database.js"></script>
    <script src="js/openPointData.js"></script>
</h4>注意!</h4><br>

Map 預覽請使用 OSM Leaflet，並請ID 命名為"map"<br>

<tr>
使用方法

```
getData(name);//輸入資料庫中對應Name,會為你自動標示在Leaflet地圖中

Clear();//初始化 所有的點

範例:
  <button type="button" onclick="getData('City_repair_station')" name="button">修理</button>
  <button type="button" onclick="getData('Free_store')" name="button">書店</button>
  <button type="button" onclick="Clear()" name="button">初始化</button>
```


DEMO<br>
https://mingming12369852.github.io/GT_test.github.io/

[配色](https://lh4.googleusercontent.com/lpFisKIsiABK1mwfj3UfmEfdypYfnBEGbCYlsJc3Gy6GOjQqIpN8JiToI2uqizrm2c57UmtUviyWzm-eR9Tlrc1nsHlMZa4njO9XcyXx)
輔色:#E26D5A
主色:#BDC667 
底色:#F3E9DC 
標題:#23E37
內文:#43291F
