#!/usr/bin/env bash

ENV="$1"
SUITE="$2"
SPEC="**/**.spec.js"

if [ "${SUITE}" = "visual" ] ; then
    rm -r cypress/snapshots/visual/**/__diff_output__
    SPEC="cypress/integration/visual/*.spec.js"
else

if [ "${SUITE}" = "functional" ] ; then
    SPEC="cypress/integration/functional/*.spec.js"

else
     rm -r cypress/snapshots/visual/**/__diff_output__
     SPEC="cypress/integration/**/**.spec.js"
fi
fi

echo ">>>: ENV:${ENV}, SUITE:${SUITE}, SPEC:${SPEC}"
./node_modules/.bin/cypress run --env configFile=${ENV} --spec "${SPEC}"

result=$?
 node reportScripts/mergeReports.js
exit $result