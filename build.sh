#!/bin/bash

if [ -d "dist/" ] ; then
    rm -rf dist/
fi

mkdir dist/
mkdir dist/ressources

cp -r ressources/ ./dist/ressources
cp index.html ./dist/
cp index.js ./dist/
cp style.css ./dist/