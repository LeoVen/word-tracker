#! /usr/bin/bash

set -e

# Save it for later
mv ./docs/CNAME ./

react-scripts build

rm -rf ./docs

mv build ./docs
mv CNAME ./docs
