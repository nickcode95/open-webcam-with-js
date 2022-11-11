navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(function(vidStream){
    let video = document.getElementById('videoCam');
    if ("srcObject" in video) {
        video.srcObject = vidStream;
    } else {
        video.src = window.URL.createObjectURL(vidStream);
    }
    video.onloadmetadata = function(e) {
        viedo.play()
    };
    })
    .catch(function(e){
    console.log(e.name + ": " + e.message)
    })