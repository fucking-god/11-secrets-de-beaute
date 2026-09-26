@echo off
echo ========================================================
echo   Configurazione Condivisione Rete Locale (PC Fisso)
echo ========================================================

:: 1. Condivisione cartella progetto
net share 11secrets="c:\Users\J\Documents\carlos\24-09" /grant:everyone,full

:: 2. Imposta rete Wi-Fi come Privata (necessario per consentire l'accesso dal PC fisso)
powershell -Command "Set-NetConnectionProfile -InterfaceAlias 'Wi-Fi' -NetworkCategory Private" 2>nul

:: 3. Abilita regola firewall per la condivisione file
netsh advfirewall firewall set rule group="Condivisione file e stampanti" new enable=Yes 2>nul
netsh advfirewall firewall set rule group="File and Printer Sharing" new enable=Yes 2>nul

echo.
echo ========================================================
echo   CONDIVISIONE ATTIVA CON SUCCESSO!
echo ========================================================
echo.
echo Dal tuo PC FISSO fai questo:
echo   1. Premi Win + R (oppure apri Esplora File)
echo   2. Incolla questo percorso e premi Invio:
echo.
echo      \\192.168.1.73\11secrets
echo.
echo (Se chiede credenziali: Utente = J , Password = quella di questo PC)
echo ========================================================
echo.
pause
