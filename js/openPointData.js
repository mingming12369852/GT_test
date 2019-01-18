var myGroup = [];
myGroup[0] = [];
myGroup[1] = [];

var myGroup_number = 0 //圖層計數;

var Last_name = null;
var Demo_myGroip;
var car = [];
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqYl6dIpW_NFebL0CMd2_OHkFvADgtz1Y",
  authDomain: "g0v-map.firebaseapp.com",
  databaseURL: "https://g0v-map.firebaseio.com",
  projectId: "g0v-map",
  storageBucket: "g0v-map.appspot.com",
  messagingSenderId: "281036286954"
};
firebase.initializeApp(config);

var Map_tool = {

  Hello: function() {
    console.log("this me");
  },

  getData: function(Name) {
    //檢查是否與上一次相同 的 讀取資料
    Check();

    //新增點位
    function newPoint() {
      console.log(car);

      var layers = [];


      for (var i = 0; i < car.length; i++) {
        var marker = L.marker([car[i].geometry.coordinates[1], car[i].geometry.coordinates[0]]).bindPopup(car[i].properties.description + car[i].properties.name);
        layers.push(marker);
      }

      myGroup[myGroup_number] = L.layerGroup(layers);
      map.addLayer(myGroup[myGroup_number]);
      myGroup_number++;
      layers = [];


    }

    //get Database 獲取資料
    function DataConnection() {

      var Shorten_name = Name + "/features/";
      firebase.database().ref(Shorten_name).on('value', function(data) {
        car = data.val();

        // console.log("提取完成");
        // console.log(car);
        if (car != null) {
          newPoint();
        }
      });

    }



    //檢查
    function Check() {
      // console.log(Last_name + "" + Name);
      if (Last_name != Name) {
        Last_name = Name;
        console.log("正在為你獲取資料中...");
        DataConnection();

      } else if (Last_name = Name) {
        console.log("你已讀取過資料，請勿重複按");
      }
    }

  }, //抓取資料

  Clear: function(number) {
    map.removeLayer(myGroup[number]);
  }, //隱藏

  Display: function Display(number) {
    map.addLayer(myGroup[number]);
  }, //顯示

};


// button 控制
window.onload = function() {

  var button_01 = document.getElementById("bt01");
  var button_02 = document.getElementById("bt02");

  var hide01 = document.getElementById("hide01");
  var hide02 = document.getElementById("hide02");

  var display01 = document.getElementById("display01");
  var display02 = document.getElementById("display02");

  button_01.onclick = function() {
    Map_tool.getData("City_repair_station");
  };
  button_02.onclick = function() {
    Map_tool.getData("Free_store");
  };

  hide01.onclick = function() {
    Map_tool.Clear(0);
  };
  hide02.onclick = function() {
    Map_tool.Clear(1);
  };

  display01.onclick = function() {
    Map_tool.Display(0);
  };
  display02.onclick = function() {
    Map_tool.Display(1);
  };

}
