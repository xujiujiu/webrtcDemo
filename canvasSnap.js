function  SnatchOnce() {
                debugger;
                // 抓图
                var loginServerIp = window.location.hostname,
                   // path = this.configParamMap.DefaultPath,
                    e = new Date,
                    year = e.getFullYear().toString(),
                    month = (e.getMonth() + 1).toString(),
                    date = e.getDate().toString(),
                    hour = +e.getHours().toString(),
                    minutes = e.getMinutes().toString(),
                    seconds = e.getSeconds().toString(),
                    time = formatNewTime(year, month, date, hour, minutes, seconds),
                    timeFlag = formatDateToDay(year, month, date),
                    result,
                    fileName;
                var $canvas = document.createElement("canvas");
                var $video = $('#video');
                var w = $video[0].videoWidth;
                var h = $video[0].videoHeight;
                $canvas.width = w;
                $canvas.height = h;
                var ctx = $canvas.getContext('2d');
                ctx.drawImage($video[0], 0, 0,w, h, 0, 0, w, h);
                fileName = loginServerIp + "_" + timeFlag + "_" + time + ".png";
                var image = $canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
                downloadFile(fileName, image)
                function base64Img2Blob(code){
                    var parts = code.split(';base64,');
                    var contentType = parts[0].split(':')[1];
                    var raw = window.atob(parts[1]);
                    var rawLength = raw.length;
                    var uInt8Array = new Uint8Array(rawLength);

                    for (var i = 0; i < rawLength; ++i) {
                        uInt8Array[i] = raw.charCodeAt(i);
                    }
                    return new Blob([uInt8Array], {type: contentType});
                }
                function downloadFile(fileName, content){
                    var aLink = document.createElement('a');
                    var blob = base64Img2Blob(content); //new Blob([content]);
                    debugger;
                    aLink.download = fileName;
                    aLink.href = URL.createObjectURL(blob);
                    //创建内置事件并触发
                    var evt = document.createEvent("MouseEvents");
                    evt.initMouseEvent("click", true, true, window,
                        0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    aLink.dispatchEvent(evt);
                }
            },