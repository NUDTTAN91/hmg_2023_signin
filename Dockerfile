FROM nudttan91/ctftraining_base_image_nginx_php_56

LABEL Author="tan91"
LABEL Blog="zxw-nudt.blog.csdn.net"

COPY src /var/www/html
COPY rootdirectory /

RUN apk update
RUN apk add nodejs

RUN chmod -R 777 /var/www/html/index.php
