
# Kill all node processes running update-news
$processes = Get-WmiObject Win32_Process | Where-Object { $_.CommandLine -like '*update-news*' }
foreach ($p in $processes) {
    Write-Host "Killing Process ID: $($p.ProcessId) - $($p.CommandLine)"
    Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue
}

# Wait a moment
Start-Sleep -Seconds 2

# Remove lock file
if (Test-Path "update.lock") {
    Write-Host "Removing update.lock..."
    Remove-Item "update.lock" -Force
} else {
    Write-Host "No update.lock found."
}
