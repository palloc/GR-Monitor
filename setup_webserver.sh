pip install -r requirements.txt
sudo apt-get install apache2
sudo rm -rf /var/www/html
sudo cp -r frontend/dist /var/www/html
python server/app.py &
