# GR-Monitor
GR-Monitor is a GPU utilization monitoring tool.

## Environment
- OS:ubuntu

## Set up
### Client(GPU Server)
1. sudo apt-get update
1. sudo apt-get install -y python-dev python-pip
1. git clone https://github.com/palloc/GR-Monitor
1. cd GR-Monitor
1. pip install -r requirements.txt
1. python client/app.py

### Web server
1. sudo apt-get update
1. sudo apt-get install -y python-dev python-pip apache2
1. git clone https://github.com/palloc/GR-Monitor
1. cd GR-Monitor
1. pip install -r requirements.txt
1. sudo rm -rf /var/www/html
1. sudo cp -r frontend/dist /var/www/html
1. python server/app.py