# Czasopisma przez proxy PRz:
Wygodny dostęp do wydawnictw udostępnianych przez PRz na przeglądarkach opartych na Chromium (Chrome/Chromium/Opera/Vivaldi/Microsoft Edge).

Przetestowane na: 

 - Debian, Vivaldi 2.10

## Sposób instalacji

 1. Zainstaluj dodatek do przeglądarki [Proxy Switcher]( https://chrome.google.com/webstore/detail/proxy-switcher-and-manage/onnfghpihccifgojkpnnncpagjcdbjod).
 2. W prawym górnym rogu przeglądarki pojawi ikona z ekranem. Po jej kliknięciu pojawi się ekran jak poniżej:
 ![Alt](Figures/unnamed.jpg "") 
 3. Wybieramy zakładkę PAC Script i polu 'Inline' wklejamy zawartość pliku przproxy.pac. Treść ta instruuje przeglądarkę, aby dostęp do stron wydawnictw, który wymaga autoryzacji był przekierowywany przez serwer proxy PRz. Wszelki pozostały ruch będzie odbywał się normalnie, bez użycia proxy.
 
 4. Po wpisaniu loginu i hasła zgodnie z danymi dostępnymi na [stronie USK](https://usk.prz.edu.pl) powinno dać się korzystać z internetu bez niedogodności.



## TODO
 - Wykorzystać parametr [-proxy-pac-url=<pac-file-url>](https://www.chromium.org/developers/design-documents/network-settings) (+ ~file://~)  przy uruchomieniu przeglądarki, żeby metoda działała bezpośrednio na pliku .pac bez potrzeby instalowania Proxy Switchera
