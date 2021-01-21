# nodeAPI

Pour demarrer le serveur node : npm start dans le dossier back
Pour demarrer l'app vue : npm run serve dans le dossier front

Pour tester l'API node avec Oauth 2 : avoir postgres d'installer, entrer les informations de la DB dans back/db/pgWrapper.js .
Dans postgres creer les tables 

```postgres
CREATE TABLE public.users
(
    id serial,
    username text,
    user_password text,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.users
    OWNER to postgres;



CREATE TABLE public.access_tokens
(
    id serial,
    access_token text,
    user_id integer,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.access_tokens
    OWNER to postgres;
```
Pour tester l'API : ```curl -d "client_secret=null" -d "client_id=null" -d "username=test" -d "password=test" -d "grant_type=password" "http://localhost:3000/auth/register"``` 
Ou dans Postman,
à l'adresse http://localhost:3000/auth/register entrer les infos suivantes dans body sous forme x-www-form-urlencoded :
username : <username>
password : <pass>
grant-type : password
client_id : null
client_secret : null

Ensuite login l'utilisateur (pose des problemes dans postman): 
```curl -d "client_secret=null" -d "client_id=null" -d "username=test" -d "password=test" -d "grant_type=password" "http://localhost:3000/auth/login"```

La commande retourne un token.

Tester l'authentification Oauth2 : 
Retour dans postman, à l'adresse http://localhost:3000/test/hello, aller dans l'onglet autorization, choisir le type Oauth2, puis dans le champ access token rentrer le token obtenu précedemment, envoyer la requete.

S'affiche dans la console "Hello world Oauth2!", authentification réussie.
