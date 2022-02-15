#!/bin/bash

build(){
	echo "Compilation du programme Java"
	javac src/*.java -d bin/
}

build
