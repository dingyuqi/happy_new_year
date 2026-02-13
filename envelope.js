$( document ).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");

        // 等待动画完成后跳转到烟花页面
        setTimeout(() => {
            const dataParam = getUrlParam('data');
            if (dataParam) {
                // 跳转到烟花页面，传递相同的数据参数
                window.location.href = `fireworks/index.html?data=${dataParam}`;
            }
        }, 3000); // 等待动画完成
    }

    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

    // 解析URL参数
    function getUrlParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // 加载数据
    function loadData() {
        const dataParam = getUrlParam('data');
        if (dataParam) {
            try {
                console.log('接收到的数据参数:', dataParam);
                // 解码数据: Base64 -> URI Component -> JSON String -> Object
                const decodedData = JSON.parse(decodeURIComponent(atob(dataParam)));
                console.log('解析后的数据:', decodedData);

                // Populate data into the lines
                const recipientLine = document.getElementById('recipient-line');
                const senderLine = document.getElementById('sender-line');

                if (recipientLine) {
                    recipientLine.textContent = "To: " + decodedData.recipient;
                    recipientLine.style.lineHeight = "200%"; // Center vertically relative to the line height
                    recipientLine.style.display = "flex";
                    recipientLine.style.alignItems = "center";
                    recipientLine.style.justifyContent = "center";
                    recipientLine.style.fontSize = "14px";
                    recipientLine.style.fontWeight = "bold";
                    recipientLine.style.color = "#000";
                }
                
                if (senderLine) {
                    senderLine.textContent = "From: " + decodedData.sender;
                    senderLine.style.lineHeight = "200%";
                    senderLine.style.display = "flex";
                    senderLine.style.alignItems = "center";
                    senderLine.style.justifyContent = "center";
                    senderLine.style.fontSize = "14px";
                    senderLine.style.fontWeight = "bold";
                    senderLine.style.color = "#000";
                }

                return decodedData;
            } catch (error) {
                console.error('数据解析错误:', error);
                console.error('错误堆栈:', error.stack);
                alert('链接无效，请检查是否正确\n错误信息: ' + error.message);
                return null;
            }
        } else {
            // 如果没有数据，使用默认值或提示
            console.log('未找到数据参数，使用默认显示');
            return null;
        }
    }

    // 页面加载时初始化
    loadData();

});