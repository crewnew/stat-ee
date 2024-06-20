# Stat-ee

As the developer wasn't given access to Oracle, it wasn't possible to install on Arm MacOS Oracle XE and cloud signup failed Tauno said to complete the project in PostgreSQL and then convert to Oracle. It is not tested in Oracle and instructions are based on documentations from internet. The developer is has never done anything in Oracle so in case of any errors pls send detailed error messages for debugging.

## Deployment

1. NodeJS ´oracledb´ package is uses that requires Oracle Instant Client to be installed. You can download it from the [Oracle Instant Client Downloads page](https://www.oracle.com/database/technologies/instant-client/downloads.html) and then follow [the installation instructions](https://docs.oracle.com/en/database/oracle/oracle-database/21/lacli/installing-instant-client.html)
2. Rename .env.example to .env and update the values
3. TODO: docker instructions