#!/bin/sh

sed -i "s/flag{test}/$FLAG/" /encryption.js
sed -i "s/flag{test}/`node /encryption.js`/" /var/www/html/0x1337.js


rm -f /flag.sh
