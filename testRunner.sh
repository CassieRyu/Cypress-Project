#!/usr/bin/env bash

ENV="$1"
SUITE="$2"
SPEC="**/**.spec.js"

if [ "${SUITE}" = "visual" ] ; then
    rm -r cypress-visual-screenshots/**/comparison/
    rm -r cypress-visual-screenshots/**/diff/
    SPEC="cypress/e2e/visual/*.spec.js"
else

if [ "${SUITE}" = "functional" ] ; then
    rm -r cypress/reports/
    SPEC="cypress/e2e/functional/*.spec.js"

else
     rm -r cypress-visual-screenshots/**/comparison/
     rm -r cypress-visual-screenshots/**/diff/
     rm -r cypress/reports/
     SPEC="cypress/e2e/**/**.spec.js"
fi
fi

echo ">>>: ENV:${ENV}, SUITE:${SUITE}, SPEC:${SPEC}"
./node_modules/.bin/cypress run --env configFile=${ENV} --spec "${SPEC}"

result=$?
 node ./node_modules/.bin/mochawesome-merge cypress/reports/mochawesome-report/mochawesome*.json>cypress/reports/mochawesome-report/combineReport.json && ./node_modules/.bin/marge cypress/reports/mochawesome-report/combineReport.json --reportDir cypress/reports/mochawesome-report/ --inline
exit $result