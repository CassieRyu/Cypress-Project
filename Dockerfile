# FROM cypress/browsers:chrome69
FROM cypress/base:16.16.0
# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers

USER root

RUN node --version
RUN yarn --version

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

RUN apt-get update && apt-get -y install python3 cmake g++
# To resolve the cpu-feature failure: https://github.com/backstage/backstage/issues/7523

RUN mkdir /Cypress-Project
COPY package.json /Cypress-Project
COPY yarn.lock  /Cypress-Project
WORKDIR /Cypress-Project
RUN yarn
# RUN yarn audit fix