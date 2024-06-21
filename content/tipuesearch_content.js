var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://41132222.github.io/cd2024/content/index.html \n 網誌:  https://41132222.github.io/cd2024/blog \n 簡報:  https://41132222/github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/41132222/cd2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': '1 \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '教學影片上字幕', 'text': '第三部影片:cd2024_2b_3_如何設定 Github 帳號的雙重認證 \n \n 雲端連結: https://drive.google.com/drive/folders/14rW3dfK5eDZWoevWrpBh8a-cOjGDBygf \n youtube: https://youtu.be/5LB7scXH1BE?si=rjd8QChoHB2vMF6h \n 1.影片上字幕教學 \n 因為我也是第一次上字幕所以我先去看別人的教學,然後我找到"了AI 上字幕教學｜OpenAI Whisper 教學"這個好用的程式,我一步一步地跟他一起做然後不會的就上網找一下軟體的使用方法跟上字幕的一些技巧，然後在完成老師所交代作業。 \n 1.首先要先下載WhisperDesktop (GitHub) \n \n 2.下載語言模組生成逐字稿 \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': '教學影片上字幕.html'}, {'title': '期中整合', 'text': '在學期中前我們必須先做好下列幾點: \n 1.先創立個人倉儲(cd2024) \n 2.每周更新自己的個人網誌 \n 3.翻譯論文 \n 4.將影片上字幕 \n 5.製作其中影片跟簡報 \n \n 期中影片: \n \n 心得: \n 這一學期也過一半了，在這堂課中我學到了如何跟組員分工合作與練習打網誌還有畫nx零件圖，在分工合作的過程中我有很多不會的，然後我們組長也都很熱心的幫忙我解決推送網誌的問題，互相幫忙才有其中這麼好的成果。 \n  editor2 結束  \n \n', 'tags': '', 'url': '期中整合.html'}, {'title': 'w12', 'text': 'w12零件三py檔 \n \n 心得: \n \xa0 \xa0 在畫這個零件的過程中因為有很多指令都是英文的讓我常常看不懂,平常也比較少用nx所以在挖孔這個部份讓我第一次在畫的時候不知道該怎麼改指令,我們的組員也很有耐心地教我每個指令的意思讓我更快可以上手,才讓我能夠在課堂上預期上傳我的零件檔。 \n', 'tags': '', 'url': 'w12.html'}, {'title': '組合圖', 'text': '\n \n', 'tags': '', 'url': '組合圖.html'}, {'title': '論文翻譯作業', 'text': '這禮拜我們要作小組的論文翻譯然後我的翻譯範圍是61-77頁 \n 以下是我的論文翻譯連結: \n 檔案連結 \n', 'tags': '', 'url': '論文翻譯作業.html'}, {'title': 'w17', 'text': '評分標準 \n \n \n \n 請利用 NX1872, 完成可以參與球賽競技的機器人零件與組立件設計, 過程中請拍攝零組件繪製過程, 以 "cd2024 協同產品設計實習期末實習評量項目一, 學號 XXXXXXX" 作為 mp4 影片標題, 上傳至 Youtube 後, 在個人靜態網站中新增標題為 "w17", 格式為 H1 的頁面, 嵌入所完成的項目一 Youtube 影片以及所完成的零組件檔案連結後, 將此網頁網址 (即 \xa0 https://個人_github帳號.github.io/cd2024/w17 ) 提交連結回報至評量回傳表的對應欄位中. \n \n \n 請自選上列項目一中某一零件組立過程, 以 NXOpen Python 程式完成組立, 過程中請拍攝 Python Journal 程式組立過程, 以"cd2024 協同產品設計實習期末實習評量項目二, 學號 XXXXXXX" 作為 mp4 影片標題, 上傳至 Youtube 後, 在 "w17" 頁面中嵌入所完成的項目二 Youtube 影片以及所完成的 Python Journal 程式檔案連結 (請放入 downloads 目錄, 並以 .txt 作為副檔名), 將此網頁網址 (即 \xa0 https://個人_github帳號.github.io/cd2024/w17 ) 提交連結回報至評量回傳表的對應欄位中. \n \n \n 請將所完成的機器人球員放入 CoppeliaSim 運動場景中 (即 \xa0 https://mde.tw/cd2024/content/index.html \xa0 網頁中的 \xa0 cd2024_footbasketball_field_specification_step2.7z \xa0 場景), 讓球員可以由 ZMQ Remote API 程式控制, 執行後按下 w 鍵後球員可向前移動, 按下 s 後球員可向後移動, 過程中請拍攝 Python 程式執行與球員前後移動過程, 以"cd2024 協同產品設計實習期末實習評量項目三, 學號 XXXXXXX" 作為 mp4 影片標題", 上傳至 Youtube 後, 在 "w17" 頁面中嵌入所完成的項目三 Youtube 影片、場景 .ttt 連結以及所完成的 ZMQ Remote API Python 程式檔案連結 (請放入 downloads 目錄, 並以 .txt 作為副檔名), 將此網頁網址 (即 \xa0 https://個人_github帳號.github.io/cd2024/w17 ) 提交連結回報至評量回傳表的對應欄位中. \n \n \n', 'tags': '', 'url': 'w17.html'}, {'title': '項目一 - 個人零件繪製', 'text': 'w17組合圖-車體py檔 \n py檔連結 \n \n \n w17組合圖-棒子py檔 \n py檔連結 \n \n \n w17 組合圖-車輪py檔 \n py檔連結 \n \n 心得: \n 在畫這幾個零件雖然不難，但是在存py檔的時候可能會出現一些問題,例如無法正常開啟這時候我就會去找看看是不是檔案不正確或是存的位置不對好像也都會影響。 \n', 'tags': '', 'url': '項目一 - 個人零件繪製.html'}, {'title': '項目二-組合圖', 'text': '組合圖組力過程 \n \n 組合圖py檔 \n 檔案連結 \n \n \n \xa0 \xa0 \n 遇到的困難: \n \xa0 \xa0 \xa0 再存py檔的時候常常會遇到無法讀取的問題然後我重新再畫一次也辦法解決，有時候可以正常的開啟其他的py檔，但是當我在錄製車體或是其他零件時有時候又會遇到開不起來的狀況真的讓人非常的頭痛。 \n', 'tags': '', 'url': '項目二-組合圖.html'}, {'title': '項目三-模擬', 'text': '\xa0 \xa0 \xa0 期末最後一個任務就是模擬然後這個步驟是最艱難的,首先打開檔案這件事不難,到把程式放進去模擬才是最困難的我遇到的困難有下列2項。 \n 1程式跟圖放進去沒辦法動 \n 2.程式跑起來有錯誤然後跟同學討論後也無法解決 \n 3.錄影功能出問題所以只能上網下載威力導演來錄製影片 \n \n 心得: \n \xa0 在模擬這個部份我真的非常盡力的去解決也在空堂的時候去找同學模擬了，但是一直無法模擬出來，我一有時間就都會去找同學嘗試模擬，順便問一下遇到的問題如何解決，但情況依然不太好，在學期的第18周我決定再嘗試一次,也就是上面這部影片，明明之前老師的影片都看了一次也無法解決，雖然最後還是沒有成功模擬讓它動起來，但是我真的很努力了。 \n \n \n \n', 'tags': '', 'url': '項目三-模擬.html'}]};