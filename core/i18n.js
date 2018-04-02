// aliases for the gettext-based translation functions

import utils from './utils';
export let _, N_, P_, C_, CN_, CP_;

if (utils.inCockpit) {
     cockpit = require('cockpit'); // eslint-disable-line global-require, import/no-unresolved
     _   = cockpit.gettext;
     N_  = cockpit.noop;
     P_  = cockpit.ngettext;
     C_  = cockpit.gettext;
     CN_ = cockpit.noop;
     CP_ = cockpit.ngettext;
} else {
    // no-op functions if not running within cockpit
    _   = function (x)                  { return x;  }
    N_  = function (x)                  { return x;  }
    P_  = function (x1, xmany, n)       { if (n == 1) { return x1; } else { return xmany; } }
    C_  = function (ctxt, x)            { return x;  }
    CN_ = function (ctxt, x)            { return x;  }
    CP_ = function (ctxt, x1, xmany, n) { if (n == 1) { return x1; } else { return xmany; } }
}
