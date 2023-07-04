# 執行 git diff --cached 命令並將結果儲存在檔案中
git diff --cached > diff_output.txt

# 將檔案內容複製到剪貼板
$clipCommand = "Get-Content diff_output.txt | Set-Clipboard"
Invoke-Expression -Command $clipCommand

# 刪除暫存檔案
Remove-Item diff_output.txt