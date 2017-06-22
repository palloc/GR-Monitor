# GR-Monitor
## Environment
- OS:ubuntu
- python: 2.7.11

## Set up
### Client(GPU Server)
1. sudo apt-get update
1. sudo apt-get install -y python-dev python-pip
1. git clone https://github.com/palloc/<>
1. cd <>
1. pip install -r requirements.txt
1. python client/app.py

### Web server
1. sudo apt-get update
1. sudo apt-get install -y python-dev python-pip apache2
1. git clone https://github.com/palloc/<>
1. cd <>
1. pip install -r requirements.txt
1. sudo rm -rf /var/www/html
1. sudo cp -r frontend/dist /var/www/html
1. python server/app.py