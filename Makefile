#!/usr/bin/env bash

default: start

watch: #sudo apt-get install inotify-tools
	inotifywait -qrm --event modify --format '%w%f' $(PWD) | grep '\*.*' | hugo --watch=false

start:
	hugo server --watch=true

start-watch:
	hugo server --watch=true

build:
	rm -rf public && hugo

.PHONY: start start-watch watch
