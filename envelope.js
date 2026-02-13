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
            const data = loadData();
            if (data) {
                console.log('准备传递的数据:', data);
                // 生成唯一标识符用于传递到烟花页面
                const uniqueId = 'wish_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                // 存储数据到localStorage
                localStorage.setItem(uniqueId, JSON.stringify(data));
                // 跳转到烟花页面
                window.location.href = `fireworks/index.html?id=${uniqueId}`;
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
        const idParam = getUrlParam('id');
        if (idParam) {
            try {
                console.log('接收到的ID参数:', idParam);
                // 从localStorage中读取数据
                const storedData = localStorage.getItem(idParam);
                if (storedData) {
                    console.log('从localStorage读取的数据:', storedData);
                    const decodedData = JSON.parse(storedData);
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
                } else {
                    console.error('localStorage中没有找到对应的数据');
                    alert('链接已过期或无效，请检查是否正确');
                    return null;
                }
            } catch (error) {
                console.error('数据解析错误:', error);
                console.error('错误堆栈:', error.stack);
                alert('链接无效，请检查是否正确\n错误信息: ' + error.message);
                return null;
            }
        } else {
            alert('链接无效，请检查是否正确');
            return null;
        }
    }

    // 页面加载时初始化
    loadData();

});