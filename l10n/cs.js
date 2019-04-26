OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Požadavek se nezdařil, není dostupné síťové připojení!",
    "Request unauthorized. Are you logged in?" : "Neoprávněný požadavek. Jste přihlášení?",
    "Request forbidden. Are you an admin?" : "Požadavek odepřen. Jste správce?",
    "Token expired or app not enabled! Reload the page!" : "Platnost tokenu skončila nebo aplikace není povolena! Načtěte stránku znovu.",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Vnitřní chyba serveru! Další informace naleznete v souboru data/nextcloud.log.",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Požadavek se nezdařil, Nextcloud je aktuálně v režimu údržby!",
    "Can not add feed: Exists already" : "Nelze přidat kanál: už existuje",
    "Articles without feed" : "Články bez kanálu",
    "Can not add folder: Exists already" : "Složku nelze přidat: už existuje",
    "News" : "Zprávy",
    "An RSS/Atom feed reader" : "Čtečka RSS/Atom zdrojů",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "Aplikace Novinky je čtečka RSS/Atom zdrojů pro Nextcloud, kterou je možné synchronizovat s mnoha mobilními zařízeními. Seznam všech klientů a požadavky je k nalezení [v souboru README](https://github.com/nextcloud/news)\n\nPřed provedením přechodu na novou verzi, [se podívejte do výčtu změn](https://github.com/nextcloud/news/blob/master/CHANGELOG.md), abyste se vyhnuli nenadálým překvapením.\n\n**Důležité**: Pro zapnutí aktualizací zdrojů je třeba zapnout buď [Nextcloud systémový plánovač](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) nebo použít [aktualizátor](https://github.com/nextcloud/news-updater) který používá vestavěné API aktualizací a vypíná aktualizace z cron. Více informací je k dispozici [v souboru README](https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Pro aktualizace použít systémovou službu cron",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Toto vypněte, pokud používáte vlastní aplikaci pro aktualizace jako například dostupnou aktualizační službu Python",
    "Purge interval" : "Interval čištění",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Minimální časový interval v sekundách, po kterém jsou z databáze smazány odstraněné kanály novinek a adresáře; hodnoty kratší než 60 sekund jsou ignorovány",
    "Maximum read count per feed" : "Maximální počet přečtených novinek na kanál",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Určuje nejvyšší počet článků, které jsou dostupné ke čtení z jednotlivých kanálů a nebudou smazány při čištění; pokud se staré články po přečtení znovu objevují, navyšte tuto hodnotu; negativní hodnoty jako -1 tuto funkci úplně vypnou",
    "Maximum redirects" : "Nejvyšší počet přesměrování",
    "How many redirects the feed fetcher should follow" : "Kolik přesměrování se může sledovat při stahování článků",
    "Maximum feed page size" : "Maximální velikost stránky kanálu",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Maximální velikost kanálu v bajtech. Pokud bude RSS/Atom stránka větší než tato hodnota, aktualizace bude ukončena",
    "Feed fetcher timeout" : "Časový limit při stahování článků",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Maximální počet sekund pro aktualizaci RSS nebo Atom zdroje; pokud bude interval překročen, aktualizace se ukončí",
    "Explore Service URL" : "URL prohledávání",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Pokud zadáno, bude tato URL dotazována na zobrazování kanálů v sekci prohledávání kanálu. Pro návrat k výchozí službě hledání ponechte toto pole prázdné.",
    "For more information check the wiki" : "Více informací lze nalézt v naší wiki",
    "Saved" : "Uloženo",
    "Download" : "Stáhnout",
    "Close" : "Zavřít",
    "filter" : "filtr",
    "Language" : "Jazyk",
    "Subscribe" : "Odebírat",
    "Got more awesome feeds? Share them with us!" : "Víš o dalších úžasných kanálech? Poděl se o ně s námi!",
    "No articles available" : "Nejsou dostupné žádné články",
    "No unread articles available" : "Nejsou dostupné žádné nepřečtené články",
    "Open website" : "Otevřít webovou stránku",
    "Star article" : "Ocenit článek hvězdičkou",
    "Unstar article" : "Odebrat článku hvězdičku",
    "Keep article unread" : "Ponechat článek jako nepřečtený",
    "Remove keep article unread" : "Odstranit označení článku jako nepřečtený",
    "by" : "sdílí",
    "from" : "z",
    "Play audio" : "Přehrát hudbu",
    "Download video" : "Stáhnout video",
    "Download audio" : "Stáhnout hudbu",
    "Keyboard shortcut" : "Klávesová zkratka",
    "Description" : "Popis",
    "right" : "vpravo",
    "Jump to next article" : "Jít na další článek",
    "left" : "vlevo",
    "Jump to previous article" : "Jít na předchozí článek",
    "Toggle star article" : "Přepnout hvězdičku",
    "Star article and jump to next one" : "Označit článek hvězdičkou a přejít na další",
    "Toggle keep current article unread" : "Ponechat aktuální článek jako nepřečtený",
    "Open article in new tab" : "Otevřít článek v nové záložce",
    "Toggle expand article in compact view" : "Přepínat rozbalení článku v kompaktním náhledu",
    "Refresh" : "Obnovit",
    "Load next feed" : "Načíst další kanál",
    "Load previous feed" : "Načíst předchozí kanál",
    "Load next folder" : "Načíst další složku",
    "Load previous folder" : "Načíst předchozí složku",
    "Scroll to active navigation entry" : "Posuňte na aktivní položku nabídky",
    "Focus search field" : "Zaměřit kolonku vyhledávání",
    "Mark current article's feed/folder read" : "Označit aktuální kanál/složku článku jako přečtený",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Zjištěn ajax nebo web cron režim! Kanály nebudou aktualizovány!",
    "How to set up the operating system cron" : "Jak nastavit službu plánovače operačního systému (cron)",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Nainstalovat a nastavit rychlejší paralelní systém aktualizace využívající aktualizační API aplikace Novinky",
    "Web address" : "Webová adresa",
    "Feed exists already!" : "Kanál už existuje!",
    "Folder" : "Složka",
    "No folder" : "Žádná složka",
    "New folder" : "Nová složka",
    "Folder name" : "Název složky",
    "Go back" : "Jít zpět",
    "Folder exists already!" : "Složka už existuje!",
    "Credentials" : "Přihlašovací údaje",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Je třeba, aby přihlašovací údaje pro HTTP Basic Auth byly uloženy nešifrovaně! Každý s přístupem k serveru nebo databázi je bude moci přečíst!",
    "Username" : "Uživatelské jméno",
    "Password" : "Heslo",
    "New Folder" : "Nová složka",
    "Create" : "Vytvořit",
    "Explore" : "Prohledat",
    "Update failed more than 50 times" : "Aktualizace se nezdařila více než 50krát",
    "Deleted feed" : "Smazaný kanál",
    "Undo delete feed" : "Vzít zpět smazání kanálu",
    "Rename" : "Přejmenovat",
    "Menu" : "Nabídka",
    "Mark read" : "Označit jako přečtené",
    "Unpin from top" : "Odepnout ze shora",
    "Pin to top" : "Připnout nahoru",
    "Newest first" : "První nejnovější",
    "Oldest first" : "První nejstarší",
    "Default order" : "Výchozí pořadí",
    "Enable full text" : "Povolit plný text",
    "Disable full text" : "Zakázat plný text",
    "Unread updated" : "Nepřečtěné aktualizovány",
    "Ignore updated" : "Ignorovat aktualizaci",
    "Open feed URL" : "Otevřít URL kanálu",
    "Delete" : "Smazat",
    "Dismiss" : "Zamítnout",
    "Collapse" : "Sbalit",
    "Deleted folder" : "Smazaná složka",
    "Undo delete folder" : "Vzít zpět smazání adresáře",
    "Starred" : "S hvězdičkou",
    "Unread articles" : "Nepřečtené články",
    "All articles" : "Všechny články",
    "Settings" : "Nastavení",
    "Disable mark read through scrolling" : "Vypnout označování jako přečtené při posunu",
    "Compact view" : "Kompaktní zobrazení",
    "Expand articles on key navigation" : "Rozbalit články po stisknutí kláves navigace",
    "Show all articles" : "Zobrazit všechny články",
    "Reverse ordering (oldest on top)" : "Opačné řazení (od nejstarších)",
    "Subscriptions (OPML)" : "Odběry (OPML)",
    "Import" : "Importovat",
    "Export" : "Exportovat",
    "Error when importing: File does not contain valid OPML" : "Chyba při importu: soubor neobsahuje platná OPML data",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Chyba při importu: OPML neobsahuje kanály ani adresáře",
    "Unread/Starred Articles" : "Články nepřečtené a s hvězdičkou",
    "Error when importing: file does not contain valid JSON" : "Chyba při importování: soubor neobsahuje platná data JSON",
    "Help" : "Nápověda",
    "Keyboard shortcuts" : "Klávesové zkratky",
    "Documentation" : "Dokumentace",
    "Report a bug" : "Nahlásit chybu"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
