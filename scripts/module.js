import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
                
    // My web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDR47W7m50Ho7u50RYFcpPMqshGuvsxst4",
        authDomain: "simple-cloud-database-web-page.firebaseapp.com",
        projectId: "simple-cloud-database-web-page",
        storageBucket: "simple-cloud-database-web-page.appspot.com",
        messagingSenderId: "27139775588",
        appId: "1:27139775588:web:7159531e762a6732539371"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
    
    const db = getDatabase();
    var enterID = document.querySelector("#enterID");
    var enterName = document.querySelector("#enterName");
    var enterAge = document.querySelector("#enterAge");
    var findID = document.querySelector("#findID");
    var findName = document.querySelector("#findName");
    var findAge = document.querySelector("#findAge");
    
    var insertBtn = document.querySelector("#insert");
    var updateBtn = document.querySelector("#update");
    var removeBtn = document.querySelector("#remove");
    function InsertData() {
        set(ref(db, "People/"+ enterID.value),{
            Name: enterName.value,
            ID: enterID.value,
            Age: enterAge.value
        })
        .then(()=>{
            alert("Data added successfully");
        })
        .catch((error)=>{
            alert(error);
        });
    }
    function FindData() {
        const dbref = ref(db);
        get(child(dbref, "People/" + findID.value))
        .then((snapshot)=>{
            if(snapshot.exists()){
                findName.innerHTML = "Name: " + snapshot.val().Name;
                findAge.innerHTML = "Age: " + snapshot.val().Age;
            } else {
                alert("No data found");
            }
        })
        .catch((error)=>{
            alert(error)
        })
        
    }
    function UpdateData(){
        update(ref(db, "People/"+ enterID.value),{
            Name: enterName.value,
            Age: enterAge.value
        })
        .then(()=>{
            alert("Data updated successfully");
        })
        .catch((error)=>{
            alert(error);
        });
    }
    function RemoveData(){
        remove(ref(db, "People/"+ enterID.value))
        .then(()=>{
            alert("Data deleted successfully");
        })
        .catch((error)=>{
            alert(error);
        });
    }
    
    insertBtn.addEventListener('click', InsertData);
    updateBtn.addEventListener('click', UpdateData);
    removeBtn.addEventListener('click', RemoveData);
    
    var findBtn = document.querySelector("#find");
    findBtn.addEventListener('click', FindData);