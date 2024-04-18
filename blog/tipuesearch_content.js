var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"第七周網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 23 123","tags":"w7","url":"./w7.html"},{"title":"第六周網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 新增教學影片心得 第一部 第二部 第三部 第五部 第六部","tags":"w6","url":"./w6.html"},{"title":"第五周網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 群組分工作業內容 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 * 需再加上自評","tags":"w5","url":"./w5.html"},{"title":"41132222 第四周網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第四周網誌 翻譯老師給的論文 本人翻譯頁數71-85頁 雲端連結 分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用. Github 個人與分組倉儲的維護方式 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的","tags":"41132222 w4","url":"./w4.html"},{"title":"41132222 第三周網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 利用 Github Classroom 指定分組倉儲 分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 建立新 replit 先點 Create a Repl 再點 Import from GitHub 利用 From URL 把組別倉儲連結丟進來 (利用這個 My Repositories 是找不到的) , 選取 Python 語言, 按下 Import from GitHub 成功建立, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰 (每個人都要建立一個才有權限) 送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH (git@github.com:自己的帳號/cd2024.git) , 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版權限, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案.","tags":"41132222 w3","url":"./w3.html"},{"title":"第二周網誌","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 利用 Github Classroom 指定分組倉儲 分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 建立新 replit 先點 Create a Repl 再點 Import from GitHub 利用 From URL 把組別倉儲連結丟進來 (利用這個 My Repositories 是找不到的) , 選取 Python 語言, 按下 Import from GitHub 成功建立, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰 (每個人都要建立一個才有權限) 送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH (git@github.com:自己的帳號/cd2024.git) , 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版權限, 只不過 Replit 的免費帳號環境會不定時刪除","tags":"w2","url":"./w2.html"},{"title":"41132222 w1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 建立個人課程倉儲 登入到自己的github, 連結到[https://github.com/mdecycu/cmsimde_site] (Teams也有貼) , 再利用 Template (連結點進去右上角) 作為倉儲, 打上 cd2024 為名稱, 進去後到設定裡的 pages 把 main 分支設為網頁根目錄靜態就跑出來了. 將倉儲 import 至 Replit 由 Replit 帳號下的設定, 底下有個 Connected Services(連線服務) 點選 Connect 後 (有連結過會出現 Disconnect ) , 讓 Github 授權給 Replit 可在 Replit 中進行改版, 改版後就有權限推回自己的網站. 建立網誌 我們所使用的網誌系統 (Pelican) , markdown 目錄是一個原始檔 (撰寫網誌範本) , 新增完的內容轉換後會位於在 blog 下的目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關設定檔有: pelicanconf.py (更改網誌名稱) 與 publishconf.py (增加靜態連結) 等, 在設定網誌同時要依據自己的 github 帳號對上述三個.py 去做設定動作. 以上為第一周網誌 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./w1.html"}]};