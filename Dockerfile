FROM cypress/browsers:chrome69

USER root

RUN node --version
RUN npm --version

# WORKDIR /tmp
# a few environment variables to make NPM installs easier
# good colors for most applications
ENV TERM xterm
# avoid million NPM install messages
ENV npm_config_loglevel warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm true
# avoid many lines of progress bars during install
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

RUN mkdir /Cypress-Project
COPY package.json /Cypress-Project
COPY package-lock.json  /Cypress-Project
WORKDIR /Cypress-Project
RUN npm install && npm audit fix
