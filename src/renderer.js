const { dialog } = require('@electron/remote');

function save(file) {
    var options = {
        title: "Save file",
        defaultPath : "Qrcode"+appendDate()+".png",
        buttonLabel : "Save",
        filters :[
            { name: 'Images', extensions: ['png'] },
            {name: 'All Files', extensions: ['*']}
        ]
    };
    dialog.showSaveDialog(null, options).then(({ filePath }) => {
        try{
          fs.writeFileSync(filePath, file, 'base64');
          notifySavedFile('File has been saved!');
        }catch(err){
          
        }
    });
  }

function appendDate(){
    let date = new Date();
    return date.getMonth()+'-'+date.getDay()+'-'+date.getFullYear()+'-'+date.getHours()+'-'+date.getMinutes();
}


function notifySavedFile(notificationbody){
    const myNotification = new Notification('File saved', {
        body:notificationbody
    })
}