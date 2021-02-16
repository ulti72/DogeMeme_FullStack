
#installing mongoDB

sudo apt-get install gnupg -y

wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -


echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt update

sudo apt-get install -y mongodb-org


sudo systemctl start mongod

sudo systemctl enable mongod

#Installing node

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

. ~/.nvm/nvm.sh

nvm install node





