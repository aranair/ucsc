#! /bin/bash

# yarn build
# yarn export

AWS_PROFILE=personal aws s3 sync out/ s3://ucsc.sg/ --delete
