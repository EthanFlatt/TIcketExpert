-- settings.sql
CREATE DATABASE ticketexpert;
CREATE USER ticketexpertuser WITH PASSWORD 'ticketexpert';
GRANT ALL PRIVILEGES ON DATABASE ticketexpert TO ticketexpertuser;