#!/bin/bash

. ~ /.nvm / nvm.sh
  export NVM_DIR = "$HOME/.nvm"
  [-s "$NVM_DIR/nvm.sh"] && \."$NVM_DIR/nvm.sh"
  [-s "$NVM_DIR/bash_completion"] && \."$NVM_DIR/bash_completion"
  cd backend npm install node index.js
