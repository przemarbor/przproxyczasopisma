// based on the solution found here:
// https://www.cyberciti.biz/faq/howto-use-auto-config-proxy-pac-file-for-specific-domain/

// useful extension to chrome:
// https://chrome.google.com/webstore/detail/proxy-switcher-and-manage/onnfghpihccifgojkpnnncpagjcdbjod/related


 
function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = 'proxy.prz.edu.pl:3128';
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
         "*.sciencedirect.com*",
         "*.sciencedirectassets.com*",
         "*.cloudflare.com*",
         "*assets.adobedtm.com*",
         "*.usabilla.com*",
         "*.elsevier.com*",
         "*.springer.com*",
         "*.googleapis.com*",
         "*.amazonaws.com*",
         "*.cookielaw.org*",
         "*.wiley.com*",
         "*.nature.com*",
         "*.jquery.com*",
         "*.springernature.com*",
         "*.altmetric.com*",
         "*.sciencemag.org*",
         "*.rawgit.com*",
         "*.aaas.org*",
         "*.gstatic.com*",
         "*.ebscohost.com*",
         "*.ebsco-content.com*",
         "*.amplitude.com*",
         "*.epnet.com*",
         "*.ieee.org*",
         "*.jwplayer.com*",
         "*.tiqcdn.com*",
         "*.aps.org*",
         "*.scitation.org*",
         "*.crossref.org*",
         "*.pingdom.net*",
         "*.mathjax.org*",
         "*.infona.pl*",
         "*apis.google.com*",
         "*biblio.prz.edu.pl*",
         "*wbn.icm.edu.pl*",
         "*.scopus.com*",
         "*.newrelic.com*",
         "*.demdex.net*",
         "*.elsevier.io*",
         "*.pendo.io*",
         "*.webofknowledge.com*",
         "*.clarivate.com*",
         "*.hotjar.com*",
         "*.scival.com*",
         "*.clarivate.com*",
         "*lex.prz.edu.pl*",
         "*.aiaa.org*",
         "*.fontawesome.com*",
         "*.feathr.co*",
         "*.licdn.com*",
         "*.azureedge.net*",
         "*.asme.org*",
         "*.jsdelivr.net*",
         "*.ams.org*",
         "*.ibuk.pl*",
         "*.cambridge.org*",
         "*.concrete.org*",
         "*.ascelibrary.org*",
         "*.accessengineeringlibrary.com*",
         "*idp.sams-sigma.com*",
         "*scholar.google.com*",
         "*.accessscience.com*",
         "*.bootstrapcdn.com*",
         "*players.brightcove.net*",
         "*.lex.pl*",
         "*cdn.omniconvert.com*",
         "*.wolterskluwer.pl*",
         "*.emis.com*",
         "*pubs.acs.org*"
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( shExpMatch(host, value) ) {
            return "PROXY "+proxyserver;
        }
    }
    return "DIRECT";
    //return "PROXY "+proxyserver;
} 
