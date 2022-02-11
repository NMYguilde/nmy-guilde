#!/bin/bash

if [ -d "dist/" ] ; then
    rm -rf dist/
fi

mkdir dist/
mkdir dist/ressources

cp -r ressources/ ./dist/ressources
cp index.html ./dist/
cp index.js ./dist/
<<<<<<< HEAD
cp style.css ./dist/
=======
cp style.css ./dist/

ls -al dist
>>>>>>> ba2cedbcb5d5c47ee61e081f6df4483480caf14f
