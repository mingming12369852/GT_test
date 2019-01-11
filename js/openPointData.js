
  var  car = [] ;
  var  layers=[];
  var  myGroup = [];
  var Last_name = null;
  var Demo_myGroip ;

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



  function getData(Name){
    //檢查是否與上一次相同 的 讀取資料
    Check();

    //新增點位
    function newPoint () {



        for (var i = 0; i < car.length; i++) {
        var marker = L.marker([car[i].geometry.coordinates[1], car[i].geometry.coordinates[0]]);
        layers.push(marker);
        }
        myGroup=L.layerGroup(layers);



        if (Demo_myGroip != myGroup) {
        // myGroup.clearLayers();
        map.addLayer(myGroup);
        console.log(Demo_myGroip+"舊");
        // Demo_myGroip = myGroup;
        console.log(Demo_myGroip);
        console.log(myGroup);
      }


    }
    //get Database 路徑
    function DataConnection(){

      var Shorten_name = Name+"/features/";
      firebase.database().ref(Shorten_name).on('value', function(data) {
         car = data.val();
         if (car != null) {
          newPoint();
         }
      });
    }
    //檢查
    function Check() {
      console.log(Last_name+""+Name);
      if (Last_name != Name) {
        Last_name = Name;
        console.log("正在為你獲取資料中...");
        DataConnection();

      } else if(Last_name = Name){
        console.log("你已讀取過資料，請勿重複按");
      }
    }
  }

  function Clear(){
    myGroup.clearLayers();
  }
