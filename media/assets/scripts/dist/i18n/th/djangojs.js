!function(t){var e=t.django||(t.django={});e.pluralidx=function(t){var e=0;return"boolean"==typeof e?e?1:0:e},e.gettext=function(t){return t},e.ngettext=function(t,e,n){return 1==n?t:e},e.gettext_noop=function(t){return t},e.pgettext=function(t,e){return e},e.npgettext=function(t,e,n,r){return 1==r?e:n},e.interpolate=function(t,e,n){return n?t.replace(/%\(\w+\)s/g,function(t){return String(e[t.slice(2,-2)])}):t.replace(/%s/g,function(t){return String(e.shift())})},e.formats={DATETIME_FORMAT:"j F Y, G:i:s",DATETIME_INPUT_FORMATS:["%Y-%m-%d %H:%M:%S","%Y-%m-%d %H:%M:%S.%f","%Y-%m-%d %H:%M","%Y-%m-%d","%m/%d/%Y %H:%M:%S","%m/%d/%Y %H:%M:%S.%f","%m/%d/%Y %H:%M","%m/%d/%Y","%m/%d/%y %H:%M:%S","%m/%d/%y %H:%M:%S.%f","%m/%d/%y %H:%M","%m/%d/%y"],DATE_FORMAT:"j F Y",DATE_INPUT_FORMATS:["%Y-%m-%d","%m/%d/%Y","%m/%d/%y","%b %d %Y","%b %d, %Y","%d %b %Y","%d %b, %Y","%B %d %Y","%B %d, %Y","%d %B %Y","%d %B, %Y"],DECIMAL_SEPARATOR:".",FIRST_DAY_OF_WEEK:"0",MONTH_DAY_FORMAT:"j F",NUMBER_GROUPING:"0",SHORT_DATETIME_FORMAT:"j M Y, G:i:s",SHORT_DATE_FORMAT:"j M Y",THOUSAND_SEPARATOR:",",TIME_FORMAT:"G:i:s",TIME_INPUT_FORMATS:["%H:%M:%S","%H:%M"],YEAR_MONTH_FORMAT:"F Y"},e.get_format=function(t){var n=e.formats[t];return"undefined"==typeof n?t:n},t.pluralidx=e.pluralidx,t.gettext=e.gettext,t.ngettext=e.ngettext,t.gettext_noop=e.gettext_noop,t.pgettext=e.pgettext,t.npgettext=e.npgettext,t.interpolate=e.interpolate,t.get_format=e.get_format}(this);