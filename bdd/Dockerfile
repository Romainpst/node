FROM ubuntu:16.04

RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys B97B0AFCAA1A47F044F244A07FCC7D46ACCC4CF8

RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" > /etc/apt/sources.list.d/pgdg.list

RUN apt-get update && apt-get install -y python-software-properties software-properties-common postgresql-9.3 postgresql-client-9.3 postgresql-contrib-9.3

USER postgres

RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE USER theotime WITH SUPERUSER PASSWORD 'theotime';" &&\
    
    createdb -O theotime nodeAPIgcloud &&\

    psql --dbname "nodeAPIgcloud" --command "CREATE TABLE IF NOT EXISTS users ( user_id serial PRIMARY KEY, username text UNIQUE NOT NULL, user_password text NOT NULL, solde integer);" &&\
    psql --dbname "nodeAPIgcloud" --command "CREATE TABLE IF NOT EXISTS access_tokens ( user_id serial, access_token text );" &&\
    psql --dbname "nodeAPIgcloud" --command "CREATE TABLE IF NOT EXISTS transactions ( transaction_id serial PRIMARY KEY, transaction integer, solde integer );"
    
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/9.3/main/pg_hba.conf

RUN echo "listen_addresses='*'" >> /etc/postgresql/9.3/main/postgresql.conf

EXPOSE 5432

VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]

CMD ["/usr/lib/postgresql/9.3/bin/postgres", "-D", "/var/lib/postgresql/9.3/main", "-c", "config_file=/etc/postgresql/9.3/main/postgresql.conf"]