```
sqlplus '/ as sysdba'
```
#
```
alter session set "_ORACLE_SCRIPT"=true;
```
#
```
create user sparedb identified by sparedb;
```
#
```
GRANT CREATE SESSION TO sparedb;
```
#
```
grant sysdba to sparedb;
```


### Success!!!✅