#!/usr/bin/env bash
export PATH="$HOME/.gem/ruby/2.6.0/bin:$PATH"
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
bundle exec jekyll liveserve --host 127.0.0.1
